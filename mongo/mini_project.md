# MongoDB Beginner Project: Student Course Management System

## Project Objective
Create a small MongoDB database for a college system to manage students, courses, and enrollments. Learn to create collections, insert documents, and write practical queries.

---

## Section 1: Database Setup

### Step 1: Create Database
```js
use CollegeDB
```


---

## Section 2: Create Collections

### 1. `students`
```js
db.createCollection("students")
```


### 2. `courses`
```js
db.createCollection("courses")
```


### 3. `enrollments`
```js
db.createCollection("enrollments")
```


---

## Section 3: Insert Sample Documents

### Insert Students
```js
db.students.insertMany([
  { _id: 1, name: "Ramesh", city: "Mumbai", age: 21 },
  { _id: 2, name: "Kavita", city: "Delhi", age: 22 },
  { _id: 3, name: "Suresh", city: "Bangalore", age: 23 }
])
```


### Insert Courses
```js
db.courses.insertMany([
  { _id: 101, title: "MongoDB Basics", duration: "4 weeks", fees: 1500 },
  { _id: 102, title: "Java Programming", duration: "6 weeks", fees: 2000 },
  { _id: 103, title: "Web Development", duration: "8 weeks", fees: 2500 }
])
```


### Insert Enrollments
```js
db.enrollments.insertMany([
  { student_id: 1, course_id: 101, enrolled_on: "2023-07-01" },
  { student_id: 1, course_id: 102, enrolled_on: "2023-07-05" },
  { student_id: 2, course_id: 101, enrolled_on: "2023-07-03" },
  { student_id: 3, course_id: 103, enrolled_on: "2023-07-10" }
])
```


---

## Section 4: Problem Solving Queries

### Q1. List all students
```js
db.students.find()
```


### Q2. List all courses with fees > ₹1500
```js
db.courses.find({ fees: { $gt: 1500 } })
```


### Q3. Find student from Delhi
```js
db.students.find({ city: "Delhi" })
```


### Q4. Show all enrollments for student with ID 1
```js
db.enrollments.find({ student_id: 1 })
```


### Q5. Use `$lookup` to get student names with their enrolled course titles
```js
db.enrollments.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "student_id",
      foreignField: "_id",
      as: "studentInfo"
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "course_id",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  {
    $project: {
      _id: 0,
      student: { $arrayElemAt: ["$studentInfo.name", 0] },
      course: { $arrayElemAt: ["$courseInfo.title", 0] },
      enrolled_on: 1
    }
  }
])
```


### Q6. Count total number of courses
```js
db.courses.countDocuments()
```


### Q7. Count how many courses each student enrolled in
```js
db.enrollments.aggregate([
  { $group: { _id: "$student_id", totalCourses: { $sum: 1 } } }
])
```


### Q8. Show names of students enrolled in "MongoDB Basics"
```js
db.enrollments.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "course_id",
      foreignField: "_id",
      as: "course"
    }
  },
  {
    $match: {
      "course.title": "MongoDB Basics"
    }
  },
  {
    $lookup: {
      from: "students",
      localField: "student_id",
      foreignField: "_id",
      as: "student"
    }
  },
  {
    $project: {
      _id: 0,
      studentName: { $arrayElemAt: ["$student.name", 0] }
    }
  }
])
```


### Q9. Update Ramesh’s age to 22
```js
db.students.updateOne({ name: "Ramesh" }, { $set: { age: 22 } })
```


### Q10. Delete the course "Web Development"
```js
db.courses.deleteOne({ title: "Web Development" })
```


### Q11. List students who are not from Mumbai
```js
db.students.find({ city: { $ne: "Mumbai" } })
```


---

## Section 5: Practice Ideas

- Add new fields like mobile number or email
- Add a `status` field to enrollments (e.g., "active", "cancelled")
- Track course completion status
- Add indexes on `student_id` and `course_id`

---

## Assignments

1. Add a new student from Pune and enroll them in "Java Programming"
2. Write a query to find total enrollments for each course
3. List all students older than 21
4. Delete a student and all their enrollments
5. Use Compass to visualize the entire database

---
