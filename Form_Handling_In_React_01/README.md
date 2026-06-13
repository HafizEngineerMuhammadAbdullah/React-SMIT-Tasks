# 📋 Student Registration Form — React

A fully functional **Student Registration Form** built with **React** and **Tailwind CSS**, featuring controlled inputs, multi-select checkboxes, radio buttons, dropdowns, and form submission handling.

---

## 👤 Author

**Muhammad Abdullah**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HafizEngineerMuhammadAbdullah)

---

## ✨ Features

- 📝 **Full Registration Form** with 9 input fields
- 🔘 **Radio Buttons** for Gender selection (Male / Female / Others)
- ☑️ **Multi-Select Checkboxes** for Department selection
- 📂 **Dropdown** for Course selection
- 📄 **Textarea** for Address input
- 🔄 **Two-Way Data Binding** using `useState` for all fields
- 🚫 **Prevents Default** browser reload on form submit
- 📋 **Console Logging** of all user data on submission
- 📱 **Responsive Layout** using Tailwind CSS

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📁 Project Structure

```
StudentRegistrationForm/
├── src/
│   ├── components/
│   │   └── HandleForm.jsx   # Main registration form component
│   ├── App.jsx              # Root component
│   └── main.jsx             # React entry point
├── index.html
└── README.md
```

---

## 🧩 Component — `HandleForm.jsx`

### 📦 States (useState)

| State | Type | Description |
|-------|------|-------------|
| `userName` | `string` | Student's full name |
| `userFatherName` | `string` | Father's name |
| `userEmail` | `string` | Email address |
| `userPassword` | `string` | Password |
| `gender` | `string` | Selected gender (default: `"Other"`) |
| `dept` | `array` | Selected departments (multi-select) |
| `course` | `string` | Selected course from dropdown |
| `city` | `string` | City name |
| `address` | `string` | Full address (textarea) |

---

### ⚙️ Functions

#### `handleDepartment(e)`
Handles multi-select checkbox logic for departments:
- If checkbox is **checked** → adds value to `dept` array
- If checkbox is **unchecked** → removes value from `dept` array using `.filter()`

```js
const handleDepartment = (e) => {
  const value = e.target.value;
  if (e.target.checked) {
    setDept([...dept, value]);
  } else {
    setDept(dept.filter((item) => item !== value));
  }
};
```

#### `handleSubmit(e)`
- Calls `e.preventDefault()` to stop page reload
- Logs all user details to the browser console
- Packages all state into a `userData` object

---

## 📋 Form Fields Overview

| Field | Input Type | Options |
|-------|-----------|---------|
| Username | Text input | — |
| Father Name | Text input | — |
| Email | Email input | — |
| Password | Password input | — |
| Gender | Radio buttons | Male / Female / Others |
| Department | Checkboxes | CSE / IT / ECE / Civil / Mech |
| Course | Dropdown | Web Dev, Agentic AI, Cyber Security, AI & Data Science |
| City | Text input | — |
| Address | Textarea | — |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/HafizEngineerMuhammadAbdullah/React-Series.git
cd StudentRegistrationForm
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

---

## 📸 UI Overview

```
┌────────────────────────────────────────┐
│  UserName    : [____________________]  │
│  FatherName  : [____________________]  │
│  Email id    : [____________________]  │
│  Password    : [____________________]  │
│                                        │
│  Gender  : ⚪ Male  ⚪ Female  ⚪ Others │
│                                        │
│  Department :                          │
│  ☐ CSE  ☐ IT  ☐ ECE  ☐ Civil  ☐ Mech  │
│                                        │
│  Courses : [-- Select Course --  ▼]    │
│                                        │
│  City    : [____________________]      │
│  Address : [____________________]      │
│            [____________________]      │
│                                        │
│         [ Register ]                   │
└────────────────────────────────────────┘
```

---

## 💡 Key React Concepts Used

- `useState` Hook — managing multiple form fields
- Controlled Components — two-way data binding via `value` + `onChange`
- Array state update — spread operator `[...dept, value]` for checkboxes
- `e.preventDefault()` — preventing default form reload
- Conditional array filtering — `.filter()` for unchecking departments

---

## 🔗 Connect with Me

- 💼 [LinkedIn — Muhammad Abdullah](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
- 🐙 [GitHub — Muhammad Abdullah](https://github.com/HafizEngineerMuhammadAbdullah)
