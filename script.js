let userId = 1;

function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Add new user data to the table
    const table = document.getElementById('userList');
    const newRow = table.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const actionCell = newRow.insertCell();

    idCell.textContent = userId;
    nameCell.textContent = name;
    emailCell.textContent = email;

    const actionButtons = document.createElement('span');
    actionCell.appendChild(actionButtons);

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editUser(this);
    };
    actionButtons.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteUser(this);
    };
    actionButtons.appendChild(deleteButton);

    userId++;

    // Clear input fields after adding the user
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function deleteUser(button) {
    const row = button.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editUser(button) {
    const row = button.parentNode.parentNode.parentNode;
    const idCell = row.cells[0];
    const nameCell = row.cells[1];
    const emailCell = row.cells[2];

    const id = idCell.textContent;
    const name = nameCell.textContent;
    const email = emailCell.textContent;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;


   
    // Disable the edit button
    button.disabled = true;
}

function saveUserChanges(row) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    row.cells[1].textContent = name;
    row.cells[2].textContent = email;

    // Remove the save button
    const actionCell = row.cells[3];
    actionCell.removeChild(actionCell.lastChild);

    // Enable the edit button
    actionCell.children[0].disabled = false;
}

// Basic email validation function (consider more robust validation for a real application)
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}