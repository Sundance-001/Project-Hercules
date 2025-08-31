import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import uniform, norm, poisson, binom
import os, uuid

def run_distributions():
    save_folder = "plots"
    os.makedirs(save_folder, exist_ok=True)

    unique_id = str(uuid.uuid4())  # e.g., '7f3b5a56-3d1a-43a8-9cfa-d7a55f6a930c'

    # --- Uniform ---
    x = np.linspace(0, 1, 1000)
    y = uniform.pdf(x, loc=0, scale=1)
    plt.plot(x, y, label="Uniform", color="blue")
    plt.title("Uniform Distribution PDF")
    plt.xlabel("x")
    plt.ylabel("Density")
    plt.grid(True)
    plt.legend()
    uniform_path = os.path.join(save_folder, f"uniform-{unique_id}.png")
    plt.savefig(uniform_path)
    plt.close()

    # --- Gaussian ---
    mu, sigma, n = 0, 1, 1000
    sample = np.random.normal(mu, sigma, n)
    plt.hist(sample, bins=50, density=True, alpha=0.6, color="blue", edgecolor="black")
    plt.plot(np.linspace(-4, 4, 200), norm.pdf(np.linspace(-4, 4, 200), mu, sigma), "r--", lw=2)
    gaussian_path = os.path.join(save_folder, f"gaussian-{unique_id}.png")
    plt.savefig(gaussian_path)
    plt.close()

    # --- Poisson ---
    lam = 3
    samples = np.random.poisson(lam, n)
    plt.hist(samples, bins=np.arange(0, 15)-0.5, density=True, alpha=0.6, color="cyan", edgecolor="black")
    plt.plot(np.arange(0, 15), poisson.pmf(np.arange(0, 15), lam), "ro--", lw=2)
    poisson_path = os.path.join(save_folder, f"poisson-{unique_id}.png")
    plt.savefig(poisson_path)
    plt.close()

    # --- Binomial ---
    n, p = 10, 0.5
    samples = np.random.binomial(n, p, 100000)
    plt.hist(samples, bins=np.arange(n+2)-0.5, density=True, alpha=0.6, color="purple", edgecolor="black")
    plt.plot(np.arange(0, n+1), binom.pmf(np.arange(0, n+1), n, p), "ro--", lw=2)
    binomial_path = os.path.join(save_folder, f"binomial-{unique_id}.png")
    plt.savefig(binomial_path)
    plt.close()

    # Return just the filenames for frontend
    return [
        os.path.basename(uniform_path),
        os.path.basename(gaussian_path),
        os.path.basename(poisson_path),
        os.path.basename(binomial_path)
    ]
