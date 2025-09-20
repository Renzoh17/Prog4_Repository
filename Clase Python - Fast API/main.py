from typing import Union

from fastapi import FastAPI, HTTPException

from pydantic import BaseModel

app = FastAPI()

items = {
    0 : {"name": "Foo", "price": 50.2},
    1: {"name": "ZZZZ", "price": 20.0, "description": "ZZZZ itme"}
}

class Item(BaseModel):
    name: str = None
    description: str = None
    price: float | None = None

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int, q: Union[str, None] = None):
    item = items.get(item_id, None)
    if not item:
         raise HTTPException(status_code=404, detail="Item no encontrado")
    return item

@app.post("/items")
def post_item(new_item: Item):
    # grabar en la base de datos
    return {"message": f"new item added {new_item}"}