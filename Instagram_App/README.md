 # Instagram App

 A React and Vite Instagram-style social app with Firebase authentication, protected routes, animated transitions, and a responsive feed layout.

 ## Features

 - Splash screen shown before the main app loads
 - Login and signup routes
 - Protected home route at `/`
 - Firebase Authentication and Realtime Database integration
 - Responsive left navigation and right content panels
 - Motion animations and React Toastify notifications
 - Tailwind CSS styling with custom fonts and Instagram-inspired assets

 ## Tech Stack

 - React 19
 - Vite
 - React Router DOM
 - Firebase
 - Tailwind CSS 4
 - Motion
 - React Icons
 - React Toastify and SweetAlert2

 ## Getting Started

 ### Prerequisites

 - Node.js 18 or newer
 - A Firebase project with Authentication and Realtime Database enabled

 ### Installation

 ```bash
 npm install
 ```

 Create a `.env` file in the project root and add the Firebase API key:

 ```env
 VITE_FIREBASE_API_KEY=your_firebase_api_key
 ```

 The remaining Firebase project values are currently defined in `configuration/firebase.js`. Update them there if you connect the app to a different Firebase project.

 ### Run the development server

 ```bash
 npm run dev
 ```

 Open the local URL printed by Vite, usually `http://localhost:5173`.

 ## Available Scripts

 | Command | Description |
 | --- | --- |
 | `npm run dev` | Start the Vite development server |
 | `npm run build` | Create a production build |
 | `npm run preview` | Preview the production build locally |
 | `npm run lint` | Run Oxlint |

 ## Routes

 | Route | Description |
 | --- | --- |
 | `/` | Protected Instagram-style home page |
 | `/login` | Login page |
 | `/signup` | Signup page |

 ## Project Structure

 ```text
 Instagram_App/
 ├── configuration/
 │   └── firebase.js          # Firebase app, auth, and database setup
 ├── public/
 │   └── assets/              # Images and other public assets
 ├── src/
 │   ├── components/
 │   │   └── authentication/  # Login and signup components
 │   ├── Pages/
 │   │   ├── AppInitializer.jsx
 │   │   ├── InstagramPage.jsx
 │   │   ├── ProtectedRoute.jsx
 │   │   └── SplashScreen.jsx
 │   ├── App.jsx
 │   ├── App.css
 │   ├── index.css
 │   └── main.jsx
 ├── package.json
 └── vite.config.js
 ```

 ## Firebase Notes

 Authentication is exposed from `configuration/firebase.js` through the Firebase Auth instance, while the Realtime Database is exposed through the `database` export. Keep secrets and environment-specific values in `.env` files and do not commit them to version control.

 ## Build for Production

 ```bash
 npm run build
 npm run preview
 ```
