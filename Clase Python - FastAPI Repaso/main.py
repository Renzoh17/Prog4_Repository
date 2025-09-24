from typing import Any, Dict, Optional, Union

from fastapi import FastAPI, HTTPException

from pydantic import BaseModel

app = FastAPI()

objects_json = [
   {
      "id": "1",
      "name": "Google Pixel 6 Pro",
      "data": {
         "color": "Cloudy White",
         "capacity": "128 GB"
      }
   },
   {
      "id": "2",
      "name": "Apple iPhone 12 Mini, 256GB, Blue",
      "data": None
   },
   {
      "id": "3",
      "name": "Apple iPhone 12 Pro Max",
      "data": {
         "color": "Cloudy White",
         "capacity GB": 512
      }
   },
   {
      "id": "4",
      "name": "Apple iPhone 11, 64GB",
      "data": {
         "price": 389.99,
         "color": "Purple"
      }
   },
   {
      "id": "5",
      "name": "Samsung Galaxy Z Fold2",
      "data": {
         "price": 689.99,
         "color": "Brown"
      }
   },
   {
      "id": "6",
      "name": "Apple AirPods",
      "data": {
         "generation": "3rd",
         "price": 120
      }
   },
   {
      "id": "7",
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB"
      }
   },
   {
      "id": "8",
      "name": "Apple Watch Series 8",
      "data": {
         "Strap Colour": "Elderberry",
         "Case Size": "41mm"
      }
   },
   {
      "id": "9",
      "name": "Beats Studio3 Wireless",
      "data": {
         "Color": "Red",
         "Description": "High-performance wireless noise cancelling headphones"
      }
   },
   {
      "id": "10",
      "name": "Apple iPad Mini 5th Gen",
      "data": {
         "Capacity": "64 GB",
         "Screen size": 7.9
      }
   },
   {
      "id": "11",
      "name": "Apple iPad Mini 5th Gen",
      "data": {
         "Capacity": "254 GB",
         "Screen size": 7.9
      }
   },
   {
      "id": "12",
      "name": "Apple iPad Air",
      "data": {
         "Generation": "4th",
         "Price": "419.99",
         "Capacity": "64 GB"
      }
   },
   {
      "id": "13",
      "name": "Apple iPad Air",
      "data": {
         "Generation": "4th",
         "Price": "519.99",
         "Capacity": "256 GB"
      }
   }
]

class ObjectData(BaseModel):
    pass

    class Config:
        extra = "allow"

class CreateObjectRequest(BaseModel):
    name: str
    data: Optional[Dict[str, Any]] = None
    
class CreateObjectResponse(BaseModel):
    id: str
    name: str
    data: Optional[Dict[str, Any]] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/objects")
def read_objects():
    return objects_json

@app.get("/filteredObjects/")
def read_objects(id_list):
    if id_list is None:
        return objects_json
    filtered_objects = [obj for obj in objects_json if obj["id"] in id_list]
    return filtered_objects

@app.get("/object/{id}")
def read_object(id):
    for obj in objects_json:
        if obj["id"] == id:
            return obj
    raise HTTPException(status_code=404, detail = f"Objeto {id} no se encontro")

@app.post("/object")
def add_object(obj: CreateObjectRequest):
    ids = [int(obj["id"]) for obj in objects_json]
    new_id = str(max(ids) + 1) if ids else "1"
    
    new_obj = {"id": new_id, "name": obj.name, "data": obj.data}
    
    objects_json.append(new_obj)
    
    return new_obj