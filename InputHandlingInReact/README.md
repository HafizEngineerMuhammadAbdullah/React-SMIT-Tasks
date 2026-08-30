# 🎯 React Input Handling App

A simple and responsive React application built to practice and understand fundamental React concepts such as **useState**, **controlled components**, **event handling**, **conditional rendering**, and **responsive UI design with Tailwind CSS**.

## 📸 Preview

The application allows users to:

* Enter their name in an input field
* Display the entered value on button click
* Reset the input and displayed value
* Experience a responsive UI that adapts to mobile, tablet, and desktop devices

---

## 🚀 Features

### ✅ Controlled Input Field

The input value is managed through React state using `useState`.

### ✅ Event Handling

Handles user interactions using:

* `onChange`
* `onClick`

### ✅ Conditional Rendering

Displays the entered name only after the user clicks the **"Want to See Value!"** button.

### ✅ Reset Functionality

Clears both:

* Input field value
* Displayed output

### ✅ Responsive Design

Built with Tailwind CSS using responsive utility classes.

### ✅ State Management

Uses React's `useState` hook to manage:

* User input
* Button state

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* JSX

---

## 📂 Project Structure

```text
src/
│
├── component/
│   └── HandleInput.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📚 Concepts Practiced

### React Hooks

```jsx
const [name, setName] = useState("");
const [isBtnPress, setBtnPress] = useState(false);
```

### Controlled Components

```jsx
<input
  value={name}
  onChange={handleChange}
/>
```

### Conditional Rendering

```jsx
<p>{isBtnPress ? name : ""}</p>
```

### Event Handling

```jsx
<button onClick={showVal}>
```

### State Updates

```jsx
setName("");
setBtnPress(false);
```

---

## ▶️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/react-input-handling-app.git
```

### Navigate to Project Folder

```bash
cd react-input-handling-app
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* How React state works
* How controlled inputs work
* How event handlers interact with state
* How React re-renders components
* How conditional rendering updates the UI
* How to build responsive layouts with Tailwind CSS
* The concept of two-way data binding in React

---

## 🔮 Future Improvements

* Add form validation
* Add local storage support
* Display multiple users
* Add dark/light mode
* Convert into a complete form handling project

---

## 👨‍💻 Author

**Muhammad Abdullah**

Frontend Developer | React Learner | JavaScript Enthusiast

Always exploring modern web development and building projects to strengthen core concepts.

---

⭐ If you found this project helpful, consider giving it a star!
