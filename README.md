# JSON-Data-Manager
A simple CRUD (Create, Read, Update, Delete) app built with HTML, CSS, and JavaScript to manage JSON-like data in a tabular format. This project is beginner-friendly and demonstrates DOM manipulation, event handling, and form validation with a clean and modern UI.
🛠️ Technologies Used

HTML5 – Structure and layout

CSS3 – Styling with gradients, shadows, hover effects, responsiveness

JavaScript (ES6) – CRUD logic, DOM manipulation, localStorage (optional)

📖 How It Works

User fills out the form (ID, Name, Email).

On clicking Add, the data is appended to the table.

Each row has Edit and Delete buttons:

Edit → Pre-fills form with existing record and updates on submit.

Delete → Removes the record after confirmation.

The table is dynamically rendered using JavaScript.

(Optional) Data is stored in localStorage for persistence.

📝 Code Overview
🔹 HTML (index.html)

A clean layout with a form and a table.

Links to style.css and script.js.

Uses semantic tags for accessibility.

🔹 CSS (style.css)

Google Fonts (Poppins).

Gradient background with a centered white card.

Styled inputs, buttons, and table.

Hover effects and smooth transitions.

Subtle animations for rows.

🔹 JavaScript (script.js)

Stores records in an array of objects ([{ id, name, email }]).

Functions:

render() → Displays records in table.

editRecord(index) → Loads record into form for update.

removeRecord(index) → Deletes record with confirmation.

form.addEventListener("submit") → Handles Add/Update.

(Optional) saveData() & loadData() → Persist with localStorage.
