import { employees } from "./data.js";

// Get URL parameter
const params = new URLSearchParams(window.location.search);
const id = +params.get("id");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const department = document.getElementById("department");
const role = document.getElementById("role");
const formTitle = document.getElementById("form-title");

if (id) {
  formTitle.textContent = "Edit Employee";
  const emp = employees.find((e) => e.id === id);
  if (emp) {
    firstName.value = emp.firstName;
    lastName.value = emp.lastName;
    email.value = emp.email;
    department.value = emp.department;
    role.value = emp.role;
  }
}

document.getElementById("employeeForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear old errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  let hasError = false;

  if (!firstName.value.trim()) {
    document.getElementById("firstNameError").textContent =
      "First Name is required";
    hasError = true;
  }

  if (!lastName.value.trim()) {
    document.getElementById("lastNameError").textContent =
      "Last Name is required";
    hasError = true;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById("emailError").textContent = "Email is required";
    hasError = true;
  } else if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    hasError = true;
  }

  if (!department.value) {
    document.getElementById("departmentError").textContent =
      "Please select a department";
    hasError = true;
  }

  if (!role.value.trim()) {
    document.getElementById("roleError").textContent = "Role is required";
    hasError = true;
  }

  if (hasError) return;

  if (id) {
    const emp = employees.find((e) => e.id === id);
    Object.assign(emp, {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      department: department.value,
      role: role.value,
    });
  } else {
    const newEmp = {
      id: Date.now(),
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      department: department.value,
      role: role.value,
    };
    employees.push(newEmp);
  }

  window.location.href = "index.html";
});
