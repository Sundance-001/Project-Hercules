# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import budget_logic as logic

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite React default port
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, OPTIONS)
    allow_headers=["*"],  # Allow all headers
)


# Pydantic model for validation
class Expense(BaseModel):
    item: str
    amount: float

@app.get("/expenses")
def read_expenses():
    return logic.get_expenses()

@app.post("/expenses")
def create_expense(expense: Expense):
    return logic.add_expense(expense.item, expense.amount)

@app.put("/expenses/{expense_id}")
def update_expense(expense_id: int, expense: Expense):
    updated = logic.update_expense(expense_id, expense.item, expense.amount)
    if not updated:
        raise HTTPException(status_code=404, detail="Expense not found")
    return updated

@app.delete("/expenses/{expense_id}")
def delete_expense(expense_id: int):
    deleted = logic.delete_expense(expense_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Expense not found")
    return {"detail": "Expense deleted"}
# @app.get("/aggregate_expenses")
# def aggregate_expenses():
#     expenses = logic.get_expenses()   # ✅ pull from budget_logic
#     total = sum(exp["amount"] for exp in expenses)
#     return {"total_expenses": total, "count": len(expenses)}


