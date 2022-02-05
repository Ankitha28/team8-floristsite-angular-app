const Pool = require("pg").Pool;


// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "root",
  port: 5432,
});


// const getUsers = (req, res) => {
//     console.log("connecting to database");
//     db.query("SELECT * FROM users", (error, result) => {
//     if (error) {
//         throw error;
//     }
//     res.json(result.rows);
//     });
// };


// database query to fetch data based on users id
// request object can read data from URL
const getUserByCred = (req, res) => {
    console.log("Running getUserByCred");

    const email = req.params.email;
    const password = req.params.pass;

    db.query("SELECT * FROM users where email=$1 and password=$2", [email, password], (error, result) => {
    if (error) {
        throw error;
    }
    res.json(result.rows);
    });
};


// database query to insert new record in the table
// request object can read data from HTTP request body
const createAccount = (req, res) => {
    console.log("Running createAccount");

    const newPost = req.body;
    const first_name = newPost.first_name;
    const last_name = newPost.last_name;
    const contact_no = newPost.contact_no;
    const address = newPost.address;
    const email = newPost.email;
    const password = newPost.password;
    db.query(
        "INSERT INTO users(first_name, last_name, contact_no, address, email, password) values($1, $2, $3, $4, $5, $6)",
        [first_name, last_name, contact_no, address, email, password],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json({ message: "New User added" });
        }
    );
};

const login = (req, res) => {
    console.log("Running login");

    const newPost = req.body;
    const email = newPost.email;
    const password = newPost.password; 
    db.query(
        "SELECT * FROM users WHERE email=$1 AND password=$2",
        [email, password],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.json(result.rows);
        }
    );
};
          

// module.exports will export object with function
module.exports = { getUserByCred, createAccount, login };

