let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

h1.innerText = "Welcome to the  Land of JS";
h2.innerText = "Welcome to the  Land of HTML";

document.body.appendChild(h1);
document.body.appendChild(h2);
h1.style.backgroundColor = "green";

// A file can have:
// many named exports ✅
// only ONE default export ✅

// import { arr } from "./app.js";
// import userName from "./app.js";
// import { age, skills } from "./app.js";
// import name from "./app.js";
import userName, { arr, age, skills } from "./app.js";

console.log("hello");
console.log(arr);
console.log(userName);
console.log(name);
console.log(age, skills);
