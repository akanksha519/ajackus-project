# ajackus-project
Created with CodeSandbox
# 🧑‍💼 Employee Directory Web Interface

A responsive and interactive employee management interface built using **HTML**, **CSS**, **JavaScript**, and **Freemarker templates**. This project simulates real-world front-end development tasks such as listing, filtering, editing, and managing employee data — all without a backend.

---

## 🚀 Features

- 📋 **Dashboard View**  
  Displays a grid/list of employees with:
  - Employee ID
  - First Name & Last Name
  - Email
  - Department
  - Role
  - Edit & Delete actions

- 📝 **Add/Edit Employee Form**  
  - Pre-filled fields for editing
  - Clean form validation (required fields, email format)
  - Graceful error handling and in-memory data update

- 🔍 **Search, Filter, Sort**
  - Search by name or email
  - Filter by Department & Role
  - Sort by First Name or Department

- 📄 **Pagination**
  - Supports 10, 25, 50, and 100 items per page
  - Pagination controls: Prev / Next

- 📱 **Responsive Design**
  - Optimized for mobile, tablet, and desktop screens

---

## 🛠️ Tech Stack

- HTML5 + CSS3
- JavaScript (Vanilla)
- Freemarker (for templating mock data)
- No backend (in-memory JS array for all operations)

---

## 📂 Project Structure

employee-directory/
├── index.html # Dashboard
├── form.html # Add/Edit Employee Form
├── src/
│ ├── main.js # Dashboard logic (list, search, filter, sort)
│ ├── form.js # Form validation and data handling
│ ├── data.js # Mock employee data
│ └── style.css # Styling


---

## 🧪 How to Run

1. Clone the repository or download the ZIP:
   ```bash
   git clone https://github.com/akanksha519/employee-directory.git
   cd employee-directory
