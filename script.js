
const form = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    if (!name || !email || !department) {
        message.textContent = "Please complete all fields.";
        return;
    }

    const item = document.createElement("li");
    item.textContent = `${name} | ${email} | ${department}`;
    employeeList.appendChild(item);

    message.textContent = "Employee registered successfully!";
    form.reset();
});
