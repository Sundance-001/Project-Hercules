import json
from pathlib import Path

# File where we will store data
DATA_FILE = Path("expenses.json")

# Load existing expenses or start empty
def load_expenses():
    if DATA_FILE.exists():
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    return []

def save_expenses(expenses):
    with open(DATA_FILE, "w") as f:
        json.dump(expenses, f, indent=4)

# Initialize in-memory expenses
expenses = load_expenses()

def add_expense(item: str, amount: float):
    expense = {"id": len(expenses) + 1, "item": item, "amount": amount}
    expenses.append(expense)
    save_expenses(expenses)  # ✅ save after update
    return expense

def get_expenses():
    return expenses

def update_expense(expense_id: int, item: str, amount: float):
    for expense in expenses:
        if expense["id"] == expense_id:
            expense["item"] = item
            expense["amount"] = amount
            save_expenses(expenses)  # ✅ save after update
            return expense
    return None

def delete_expense(expense_id: int):
    for expense in expenses:
        if expense["id"] == expense_id:
            expenses.remove(expense)
            save_expenses(expenses)  # ✅ save after delete
            return True
    return False
