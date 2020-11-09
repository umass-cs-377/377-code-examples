from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()


class Breed(BaseModel):
    breed: str


class State:
    def __init__(self, breed: Breed):
        self.breed = breed

    def set(self, breed: Breed):
        self.breed = breed

    def get(self) -> Breed:
        return self.breed


state = State(Breed(breed="pitbull"))


@app.get("/dog")
async def get_dog():
    return state.get()


@app.patch("/dog")
async def patch_breeds(new_state: Breed):
    state.set(new_state)
    return state.get()

uvicorn.run(app, host="127.0.0.1", port="3000", log_level="info")
