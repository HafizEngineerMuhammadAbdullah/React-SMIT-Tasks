# 🎓 SMIT Student Portal

A clean and responsive **Student Login Portal** built with **React**, **Tailwind CSS**, and **CSS Modules** — designed for SMIT (Saylani Mass IT Training) course students.

---

## 👤 Author

**Muhammad Abdullah**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HafizEngineerMuhammadAbdullah)

---

## 🖥️ Live Preview

> Login form with CNIC & password fields, password visibility toggle, and student/teacher login options.

---

## ✨ Features

- 🔐 **Login Form** with CNIC and Password fields
- 👁️ **Password Visibility Toggle** — show/hide password using Eye / EyeOff icons
- 🔄 **Two-Way Data Binding** with `useState` hook
- 🚫 **Prevents Default** browser page reload on form submit
- 📋 **Form Data Logging** — displays user data in console on submit
- 👨‍🏫 **"Login as Teacher"** button for teacher access
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🎨 **Custom Font** — Poppins via local `@font-face`
- 🧩 **CSS Modules** + **Tailwind CSS** hybrid styling

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📁 Project Structure

```
SMIT-Student-Portal/
├── public/
│   └── assets/
│       ├── smit-logo.png
│       └── fonts/
│           └── Poppins-Regular.ttf
├── src/
│   ├── components/
│   │   ├── HandleForm.jsx       # Main login form component
│   │   └── StyleForm.module.css # CSS Module styles for form & buttons
│   ├── App.jsx                  # Root component with layout & logo
│   ├── index.css                # Tailwind import + global .text class
│   └── main.jsx                 # React entry point
└── README.md
```

---

## 🧩 Components

### `App.jsx`
- Root layout component
- Centers the portal on screen with full-height flex layout
- Renders the SMIT logo, "Student Portal" heading, and `<HandleForm />`

### `HandleForm.jsx`
- Manages all form state with `useState`
- **States:**
  - `cnicNo` — stores the CNIC input value
  - `password` — stores the password input value
  - `isShowPassword` — toggles password visibility
- **Functions:**
  - `togglePasswordVisibility()` — toggles eye icon and input type
  - `resistReload(e)` — prevents default form submission reload
  - `handleSubmit()` — logs user data to the console

### `StyleForm.module.css`
- Scoped CSS for `.form` and `.btn` classes
- Uses `Poppins` font via `@font-face`

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/HafizEngineerMuhammadAbdullah/SMIT-Student-Portal.git
cd SMIT-Student-Portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Lucide React (for Eye icons)
```bash
npm install lucide-react
```

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Open in Browser
```
http://localhost:5173
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI library |
| `react-dom` | DOM rendering |
| `tailwindcss` | Utility-first CSS framework |
| `lucide-react` | Eye / EyeOff icons for password toggle |

---

## 📸 UI Overview

```
┌─────────────────────────┐
│       [SMIT Logo]       │
│      Student Portal     │
│                         │
│  [ Login ] [Create Pwd] │
│                         │
│  Login                  │
│  Provide CNIC & pwd...  │
│                         │
│  CNIC *                 │
│  [____________________] │
│                         │
│  Password *             │
│  [________________] 👁️  │
│                         │
│  [      LOGIN      ]    │
│                         │
│  [ Login as Teacher ]   │
└─────────────────────────┘
```

---

## 🔗 Connect with Me

- 💼 [LinkedIn — Muhammad Abdullah](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
- 🐙 [GitHub — Muhammad Abdullah](https://github.com/HafizEngineerMuhammadAbdullah)
