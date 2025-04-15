
# Overview
A simple React-based expense tracking application that allows users to:

Add new expenses with description, category, amount, and date

View all expenses in a table format

Search/filter expenses by description or category

Delete existing expenses

# Features
Expense Form: Add new expenses with validation

Expense Table: Displays all expenses in an organized table

Search Functionality: Filter expenses by description or category


# Installation
Clone the repository:

bash
Copy
git clone [repository-url];
cd phase2;
cd code-challenges;
cd expense-tracker;
Navigate to the project directory:

bash
Copy
cd expense-tracker
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
Usage
Adding an Expense:

Fill in the description, category, amount, and date

Click "SUBMIT" to add the expense

Viewing Expenses:

All expenses appear in the table below the form

Empty state shows "No expenses to show" when no expenses exist

Searching Expenses:

Type in the search bar to filter expenses by description or category

Deleting Expenses:

Click the "Delete" button which is just to the left of search bar

# File Structure
Copy
/src
├── index.css            # For styling
├── App.jsx             # Main application component
├── Delete.jsx     # Form for adding new expenses
└── SearchBar.js       # Search functionality component
├── Table.jsx    # Table displaying all expenses
├── Forms.jsx     # For all the input fields fro our data
Dependencies
React

Vite (for development)

CSS (for basic styling)

Future Improvements
Add local storage persistence

Implement expense editing functionality

Add charts for expense visualization

Include category filtering

Add user authentication

  # License
This project is open-source and available under the MIT License.

# Author: Ken Ochieng