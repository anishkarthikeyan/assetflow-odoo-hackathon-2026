from fastapi import FastAPI

app = FastAPI(
    title="AssetFlow API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to AssetFlow API"
    }

@app.get("/health")
def health():
    return {
        "status": "ok"
    }