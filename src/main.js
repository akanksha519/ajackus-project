import { employees } from "./data.js";

const listEl = document.getElementById("employee-list");
const searchInput = document.getElementById("search");
const perPageSelect = document.getElementById("perPage");
const departmentFilter = document.getElementById("departmentFilter");
const roleFilter = document.getElementById("roleFilter");
const sortBySelect = document.getElementById("sortBy");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageInfo = document.getElementById("pageInfo");

let filtered = [...employees];
let currentPage = 1;

function render() {
  const perPage = +perPageSelect.value;
  const totalPages = Math.ceil(filtered.length / perPage);
  currentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const start = (currentPage - 1) * perPage;
  const pageData = filtered.slice(start, start + perPage);

  listEl.innerHTML = "";
  pageData.forEach((emp) => {
    const row = document.createElement("div");
    row.className = "employee-card";
    row.innerHTML = `
      <p><strong>${emp.firstName} ${emp.lastName}</strong> (${emp.department})</p>
      <p>${emp.email} – ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    listEl.appendChild(row);
  });

  pageInfo.textContent = `Page ${
    totalPages === 0 ? 0 : currentPage
  } of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

window.deleteEmployee = (id) => {
  if (confirm("Are you sure?")) {
    const idx = employees.findIndex((e) => e.id === id);
    if (idx > -1) {
      employees.splice(idx, 1);
      applyFilter();
    }
  }
};

window.editEmployee = (id) => {
  window.location.href = `form.html?id=${id}`;
};

function applyFilter() {
  const q = searchInput.value.toLowerCase();
  const dept = departmentFilter.value;
  const role = roleFilter.value;
  const sort = sortBySelect.value;

  filtered = employees.filter((e) => {
    const matchSearch =
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q);
    const matchDept = dept === "" || e.department === dept;
    const matchRole = role === "" || e.role === role;
    return matchSearch && matchDept && matchRole;
  });

  if (sort) {
    filtered.sort((a, b) => a[sort].localeCompare(b[sort]));
  }

  currentPage = 1;
  render();
}

searchInput.addEventListener("input", applyFilter);
perPageSelect.addEventListener("change", applyFilter);
departmentFilter.addEventListener("change", applyFilter);
roleFilter.addEventListener("change", applyFilter);
sortBySelect.addEventListener("change", applyFilter);
prevBtn.addEventListener("click", () => {
  currentPage--;
  render();
});
nextBtn.addEventListener("click", () => {
  currentPage++;
  render();
});

render();
