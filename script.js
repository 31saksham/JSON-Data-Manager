let records = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const body = document.querySelector('#tableBody');
const form = document.querySelector('#recordForm');
let editIndex = null;

// Render table
function render() {
  body.innerHTML = "";
  records.forEach((entry, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${entry.id}</td>
      <td>${entry.name}</td>
      <td>${entry.email}</td>
      <td>
        <button class="edit-btn" onclick="editRecord(${i})">✏ Edit</button>
        <button class="delete-btn" onclick="removeRecord(${i})">🗑 Delete</button>
      </td>
    `;
    body.appendChild(tr);
  });
}

// Handle form submit
form.addEventListener("submit", e => {
  e.preventDefault();
  const id = +document.getElementById("uid").value;
  const name = document.getElementById("uname").value.trim();
  const email = document.getElementById("uemail").value.trim();

  if (!id || !name || !email) {
    alert("All fields required!");
    return;
  }

  if (editIndex !== null) {
    // Update existing record
    records[editIndex] = { id, name, email };
    editIndex = null;
    form.querySelector("button").textContent = "Add";
  } else {
    // Add new record
    records.push({ id, name, email });
  }

  render();
  form.reset();
});

// Edit record (inline form fill)
function editRecord(index) {
  let current = records[index];
  document.getElementById("uid").value = current.id;
  document.getElementById("uname").value = current.name;
  document.getElementById("uemail").value = current.email;

  editIndex = index;
  form.querySelector("button").textContent = "Update";
}

// Delete record
function removeRecord(i) {
  if (confirm("Delete this entry?")) {
    records.splice(i, 1);
    render();
  }
}

// Initial render
render();
