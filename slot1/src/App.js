import React, { useState } from 'react';
import './App.css';

// 1. DATA DEFINITIONS
const initialPeople = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 2. OOP CLASSES
class Shape {
  constructor(color = "red") {
    this.color = color;
  }
  getArea() { return 0.0; }
  toString() { return `Shape[color=${this.color}]`; }
}

class Rectangle extends Shape {
  constructor(color, length = 1, width = 1) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() { return this.length * this.width; }
  toString() { return `Rectangle[${super.toString()},length=${this.length},width=${this.width}]`; }
}

class Triangle extends Shape {
  constructor(color, base = 1, height = 1) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() { return 0.5 * this.base * this.height; }
  toString() { return `Triangle[${super.toString()},base=${this.base},height=${this.height}]`; }
}

function App() {
  const [promiseResult, setPromiseResult] = useState('');

  // ES6 Calculations
  const firstTeenager = initialPeople.find(p => p.age >= 10 && p.age <= 20);
  const allTeenagers = initialPeople.filter(p => p.age >= 10 && p.age <= 20);
  const isEveryTeenager = initialPeople.every(p => p.age >= 10 && p.age <= 20);
  const isAnyTeenager = initialPeople.some(p => p.age >= 10 && p.age <= 20);

  const retailCompanies = companies
    .filter(c => c.category === 'Retail')
    .map(c => ({ ...c, start: c.start + 1 }));

  const handleTestPromise = () => {
    const checkRandomNumber = new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 10) + 1;
      if (num > 5) {
        resolve(`Success! Generated: ${num}`);
      } else {
        reject(`Error! Generated: ${num} (<= 5)`);
      }
    });

    checkRandomNumber
      .then(res => setPromiseResult(res))
      .catch(err => setPromiseResult(err));
  };

  const rect = new Rectangle("blue", 10, 5);
  const tri = new Triangle("green", 6, 4);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="nav-link nav-home">Home</a>
        <a href="#search" className="nav-link">Search</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#login" className="nav-link nav-login">Login</a>
      </nav>

      {/* Hero / Header Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          Hello <span className="highlight-blue">React</span>
        </h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React Logo" 
          className="react-logo" 
        />
        <p className="caption-italic">This is the React logo!</p>
        <p className="caption-sub">(I don't know why it is here either)</p>
        <p className="subtitle">The library for web and native user interfaces</p>
      </div>

      <h1 className="highlight-blue" style={{ fontSize: '2rem' }}>This is JSX</h1>

      {/* Course List Section */}
      <div className="card-section">
        <h2 className="section-title">Course names</h2>
        <ul className="course-list">
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </div>

      {/* ES6 Results Section */}
      <div className="card-section">
        <h2 className="section-title">ES6 Logic Results</h2>
        <p><strong>First Teenager:</strong> {firstTeenager ? firstTeenager.name : 'None'}</p>
        <p><strong>All Teenagers:</strong> {allTeenagers.map(t => t.name).join(', ')}</p>
        <p><strong>Is Every Person Teenager?</strong> {isEveryTeenager.toString()}</p>
        <p><strong>Is Any Person Teenager?</strong> {isAnyTeenager.toString()}</p>
        <p><strong>Sum of Ages:</strong> {ages.reduce((sum, age) => sum + age, 0)}</p>
      </div>

      {/* Retail Companies Table */}
      <div className="card-section">
        <h2 className="section-title">Retail Companies (Start Year + 1)</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Start Year</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {retailCompanies.map((c, index) => (
              <tr key={index}>
                <td><strong>{c.name}</strong></td>
                <td><strong>{c.start}</strong></td>
                <td><strong>{c.end}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OOP Section */}
      <div className="card-section">
        <h2 className="section-title">OOP Classes</h2>
        <p><strong>Rectangle Area:</strong> {rect.getArea()} ({rect.toString()})</p>
        <p><strong>Triangle Area:</strong> {tri.getArea()} ({tri.toString()})</p>
      </div>

      {/* Promise Section */}
      <div className="card-section">
        <h2 className="section-title">Promise Test</h2>
        <button className="btn-primary" onClick={handleTestPromise}>
          Generate Random Number
        </button>
        {promiseResult && <div className="promise-result">{promiseResult}</div>}
      </div>
    </div>
  );
}

export default App;