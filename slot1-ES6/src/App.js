import React, { useState } from "react";
import "./App.css";

// ========================================
// 1. PERSON CLASS
// ========================================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// ========================================
// 2. STUDENT CLASS EXTENDS PERSON
// ========================================
class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  // Calculate average score
  calculateAverage() {
    if (this.scores.length === 0) {
      return 0;
    }

    return (
      this.scores.reduce((total, score) => total + score, 0) /
      this.scores.length
    );
  }

  // Display full student information
  displayInfo() {
    return {
      name: this.name,
      age: this.age,
      scores: this.scores,
      average: this.calculateAverage(),
    };
  }
}

// ========================================
// 3. REST PARAMETER
// ========================================
function createScores(...scores) {
  return scores;
}

// ========================================
// 4. CREATE STUDENTS
// ========================================

const student1 = new Student(
  "John",
  20,
  createScores(8, 9, 10, 7, 8)
);

const student2 = new Student(
  "Alice",
  21,
  createScores(6, 7, 8, 5, 9)
);

// ========================================
// 5. SPREAD OPERATOR
// ========================================

const extraScores = [9, 10];

// Merge scores into existing score list
student1.scores = [...student1.scores, ...extraScores];

// ========================================
// REACT COMPONENT
// ========================================

function App() {
  const [students] = useState([student1, student2]);

  // ======================================
  // 6. DESTRUCTURING
  // ======================================

  const { name, age } = student1;

  // ======================================
  // 7. ARRAY METHODS
  // ======================================

  // FILTER
  const passingScores = student1.scores.filter(
    (score) => score >= 5
  );

  // MAP
  const processedScores = student1.scores.map(
    (score) => score * 10
  );

  // REDUCE
  const totalScore = student1.scores.reduce(
    (total, score) => total + score,
    0
  );

  const averageScore =
    totalScore / student1.scores.length;

  // ======================================
  // 8. PROMISE
  // ======================================

  const evaluateStudent = (student) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const average = student.calculateAverage();

        if (average >= 8) {
          resolve("Excellent Student");
        } else {
          resolve("Need Improvement");
        }
      }, 1000);
    });
  };

  const [evaluation, setEvaluation] =
    React.useState("Evaluating...");

  React.useEffect(() => {
    evaluateStudent(student1).then((result) => {
      setEvaluation(result);
    });
  }, []);

  // ======================================
  // DISPLAY
  // ======================================

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <div className="card">
        <h2>Student Information</h2>

        <p>
          <strong>Introduction:</strong>{" "}
          {student1.introduce()}
        </p>

        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>Age:</strong> {age}
        </p>

        <p>
          <strong>Scores:</strong>{" "}
          {student1.scores.join(", ")}
        </p>

        <p>
          <strong>Average Score:</strong>{" "}
          {student1.calculateAverage().toFixed(2)}
        </p>
      </div>

      <div className="card">
        <h2>Array Methods</h2>

        <p>
          <strong>Filter - Passing Scores:</strong>{" "}
          {passingScores.join(", ")}
        </p>

        <p>
          <strong>Map - Processed Scores:</strong>{" "}
          {processedScores.join(", ")}
        </p>

        <p>
          <strong>Reduce - Total Score:</strong>{" "}
          {totalScore}
        </p>

        <p>
          <strong>Reduce - Average:</strong>{" "}
          {averageScore.toFixed(2)}
        </p>
      </div>

      <div className="card">
        <h2>Promise Evaluation</h2>

        <p>
          <strong>Result:</strong> {evaluation}
        </p>
      </div>

      <div className="card">
        <h2>All Students</h2>

        {students.map((student, index) => (
          <div className="student" key={index}>
            <h3>{student.name}</h3>

            <p>Age: {student.age}</p>

            <p>
              Scores: {student.scores.join(", ")}
            </p>

            <p>
              Average:{" "}
              {student.calculateAverage().toFixed(2)}
            </p>

            <p>{student.introduce()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;