import React, { useState, useEffect } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);
  const [total, setTotal] = useState(0);

  // Fetch expenses from FastAPI backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  // Add or update expense
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch(`http://127.0.0.1:8000/expenses/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item, amount: parseFloat(amount) }),
      });
      setEditId(null);
    } else {
      await fetch("http://127.0.0.1:8000/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item, amount: parseFloat(amount) }),
      });
    }

    const updated = await fetch("http://127.0.0.1:8000/expenses").then((res) =>
      res.json()
    );
    setExpenses(updated);

    setItem("");
    setAmount("");
  };

  // Delete expense
  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/expenses/${id}`, { method: "DELETE" });
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  // Load data for editing
  const handleEdit = (expense) => {
    setItem(expense.item);
    setAmount(expense.amount);
    setEditId(expense.id);
  };

  // Compute total
  const computeTotal = () => {
    const sum = expenses.reduce((acc, exp) => acc + Number(exp.amount), 0);
    setTotal(sum);
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">💰 Expense Tracker</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="btn btn-primary">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="expense-list">
        {expenses.map((exp) => (
          <li key={exp.id} className="expense-item">
            <span>
              {exp.item} - ${exp.amount}
            </span>
            <div>
              <button onClick={() => handleEdit(exp)} className="btn btn-edit">
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(exp.id)}
                className="btn btn-delete"
              >
                ❌ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={computeTotal} className="btn btn-secondary">
        Compute Total
      </button>
      {total > 0 && <h3 className="total-display">Total Expenses: ${total}</h3>}
    </div>
  );
}

export default ExpenseTracker;
