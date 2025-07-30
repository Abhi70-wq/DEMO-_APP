const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve all static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to Fibonacci page
app.get('/fib', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fibonacci.html'));
});
app.get('/col', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'collections.html'));
});


// Route to Palindrome page
app.get('/palindrome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palindrome.html'));
});

app.get('/junit testing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'JUNIT_TESTING.HTML'));
});

app.get('/hacker_context', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hacker_context.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
