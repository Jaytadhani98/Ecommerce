var cors = require("cors");
var express = require("express");
var mysql = require("mysql");
var cookieParser = require("cookie-parser");
var bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'your_secret_key';
var app = express();
app.use(express.json());
app.use(cookieParser());


const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.urlencoded({ extended: true }));


// Setup MySQL connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoppingdata",
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server running at http://${host}:${port}/`);
});

con.connect(function (error) {
    if (error) {
        console.log("Error connecting to database:", error);
    } else {
        console.log("Connected to database successfully");
    }
});

// Signup route
app.post("/signup", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    con.query("INSERT INTO userdata (name, email, password) VALUES (?, ?, ?)", [name, email, password],
        function (error, row) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                res.send(row);
            }
        });
});

// Login route
app.post("/login", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    con.query("SELECT * FROM userdata WHERE email = ? AND password = ?", [email, password],
        function (error, result) {
            if (error) {
                console.log(error);
            } else if (result.length > 0) {
                const user = { userid: result[0].userid };
                const token = jwt.sign({ userid: user.userid }, SECRET_KEY, { expiresIn: '1h' });

                res.cookie('access_token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                    path: '/dashboard'
                });
                res.json({ success: true, token, userid: user.id });

            } else {
                res.status(401).send("Invalid email or password");
            }
        });
});


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        req.token = token;  // Store token 
        next();
    });
};


// for file storage path
const path = require('path');
const multer = require('multer');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });




// add product 
app.post('/addproduct', authenticateToken, upload.single('file'), (req, res) => {
    const userid = req.user.userid;

    if (!userid) {
        return res.status(401).send('User ID is missing.');
    }
    const pro_name = req.body.name;
    const pro_price = req.body.price;
    const pro_image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!pro_image) {
        return res.status(400).send('File upload failed.');
    }

    const query = "INSERT INTO productlist (userid, pro_name, pro_price, pro_image) VALUES (?, ?, ?, ?)";
    con.query(query, [userid, pro_name, pro_price, pro_image], (error, row) => {
        if (error) {
            console.error("Error saving the product:", error);
            res.status(500).send('Error saving the product');
        } else {
            res.json({ success: true, message: 'Product added successfully' });
        }
    });
});



// show product
app.get("/products", authenticateToken, function (req, res) {
    const userid = req.user.userid;
    const query = "SELECT * FROM productlist WHERE userid = ?";

    con.query(query, [userid], function (error, rows) {
        if (error) {
            console.log(error);
            res.status(500).send("Error fetching data from database");
        } else {
            res.send(rows);
        }
    });
});


// delete product
app.delete('/products/:product_id', authenticateToken, (req, res) => {
    const product_id = req.params.product_id;
    const query = 'DELETE FROM productlist WHERE product_id = ?';

    con.query(query, [product_id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error deleting the product.");
        } else {
            res.json({ success: true, message: "Product deleted successfully." });
        }
    });
});





// Add item to cart
app.post('/cart', authenticateToken, (req, res) => {
    const userid = req.user.userid;
    const product_id = req.body.product_id;

    if (!product_id) {
        return res.status(400).send("Product ID is required.");
    }

    //  product is already in the cart
    const checkQuery = "SELECT * FROM cart WHERE userid = ? AND product_id = ?";
    con.query(checkQuery, [userid, product_id], (error, rows) => {
        if (error) {
            console.error("Error checking product in cart:", error);
            res.status(500).send("Error checking product in cart.");
        } else if (rows.length > 0) {
            res.status(400).json({ success: false, message: "Product already in your cart." });
        } else {
            // Product not in the cart, add it
            const insertQuery = "INSERT INTO cart (userid, product_id) VALUES (?, ?)";
            con.query(insertQuery, [userid, product_id], (error, result) => {
                if (error) {
                    console.error("Error adding product to cart:", error);
                    res.status(500).send("Error adding product to cart.");
                } else {
                    res.json({ success: true, message: "Product added to cart successfully." });
                }
            });
        }
    });
});


//  cart products details
app.get('/cart/:userId', authenticateToken, (req, res) => {
    const userid = req.user.userid;
    const query = `
        SELECT productlist.pro_name, productlist.pro_price, productlist.pro_image, cart.product_id
        FROM cart
        JOIN productlist ON cart.product_id = productlist.product_id
        WHERE cart.userid = ?;`;

    con.query(query, [userid], (error, rows) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error fetching cart items");
        } else {
            res.send(rows);
        }
    });
});





// Delete all cart items for a buynow option (Clear Cart)
app.post('/cart/clear', authenticateToken, (req, res) => {
    const userid = req.user.userid;

    con.query('DELETE FROM cart WHERE userid = ?', [userid], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error clearing the cart.");
        } else {
            res.json({ success: true, message: "Cart cleared successfully." });
        }
    });
});


//  only one item delete
app.delete('/cart/delete/:product_id', authenticateToken, (req, res) => {
    const userid = req.user.userid;
    const product_id = req.params.product_id; // Fetch the product ID from URL params

    const query = 'DELETE FROM cart WHERE userid = ? AND product_id = ?';
    con.query(query, [userid, product_id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error deleting the cart item.");
        } else {
            res.json({ success: true, message: "Item deleted from cart successfully." });
        }
    });
});



// for update product
app.put('/editproduct/:product_id', authenticateToken, (req, res) => {
    const product_id = req.params.product_id;
    const { pro_name, pro_price } = req.body;

    con.query("UPDATE productlist SET pro_name = ?, pro_price = ? WHERE product_id = ?",
        [pro_name, pro_price, product_id],
        function (error, result) {
            if (error) {
                console.error("Error updating product:", error);
            }
            if (result.affectedRows > 0) {
                res.json({ success: true, message: "Product updated successfully." });
            } else {
                res.status(404).send("Product not found.");
            }
        });

});
