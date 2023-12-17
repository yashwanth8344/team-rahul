// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Simulated in-memory database
let users = [
    { id: 1, username: 'john_doe', password: 'password123', enrolledCourses: [1, 2] }
];

let courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, title: 'Web Development Fundamentals', description: 'Explore the fundamentals of web development.' }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const enrolledCourses = user.enrolledCourses.map(courseId => courses.find(course => course.id === courseId));
        res.json({ success: true, user: { username: user.username, enrolledCourses } });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Endpoint for user signup
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (users.find(u => u.username === username)) {
        res.json({ success: false, message: 'Username already exists. Please choose a different username.' });
    } else {
        const newUser = { id: users.length + 1, username, password, enrolledCourses: [] };
        users.push(newUser);
        res.json({ success: true, message: 'User created successfully' });
    }
});

// Endpoint to get course data
app.get('/courses', (req, res) => {
    res.json({ success: true, courses });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
// JavaScript code

// ... (Existing code)

// Show coding game section
document.getElementById('codingGameLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('codingGameSection').style.display = 'block';
});



