const express = require("express");
const mysql = require("mysql2");  // Use mysql2 for better support
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3040;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MySQL Database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faris2222",  // Replace with your MySQL password
  database: "sharerippy",  // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL Connected");
});

// ---------------- Register Route ----------------
app.post('/api/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const query = 'SELECT email FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(insertQuery, [username, email, hashedPassword], (err, results) => {
        if (err) {
          console.error('Error inserting into MySQL:', err);
          return res.status(500).json({ message: 'Server error' });
        }

        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  } catch (err) {
    console.error('Error in registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ---------------- Login Route ----------------
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  // Query to find user by email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Successful login
      res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
