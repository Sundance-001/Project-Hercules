from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import distributions  # import your logic

app = FastAPI()

# --- CORS: allow frontend ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Root test endpoint ---
@app.get("/")
def root():
    return {"message": "FastAPI + React + DataScience is live!"}

# --- Trigger plot generation ---
@app.post("/generate")
def generate_plots():
    plots = distributions.run_distributions()
    return {"message": "Plots generated successfully", "plots": plots}


# --- Fetch a specific plot ---
@app.get("/plot/{name}")
def get_plot(name: str):
    file_path = os.path.join("plots", name)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "Plot not found"}
