// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello,This is your new caption Abhishek')
// })

// app.get('/courses', function (req, res) {
//   res.send('Print all courses')
// })

// app.listen(4000, ()=>{
//     console.log("Started server");
// }
// )





const express = require('express');
const app = express();

// Simulated data
const courses = [
  { id: 1, name: "Web Development", instructor: "Abhishek" },
  { id: 2, name: "Data Science", instructor: "Priya" },
  { id: 3, name: "UI/UX Design", instructor: "Rahul" }
];

// Home route
app.get('/', (req, res) => {
  res.send('👋 Hello, Abhishek! Welcome to your awesome Course API 🚀');
});

// About route
app.get('/about', (req, res) => {
  res.send("📚 This is a simple course service built with love and Express.js 💻");
});

// Get all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Get a specific course by ID
app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: "❌ Course not found" });
  }

  res.json(course);
});

// Start server
app.listen(4000, () => {
  console.log("🚀 Server is running on http://localhost:4000");
});
