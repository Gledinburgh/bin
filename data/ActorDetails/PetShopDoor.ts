import { actorDetails } from "../../types";

export const PetShopDoor: actorDetails = {
  "name": "PetShopDoor",
  "id": "pet-shop-door",
  "imgUrl": "./mockup/petshop-door.png",
  "baseWidth": 288,
  "baseHeight": 375,
  "map": {
    "name": "doorMap",
    "areas": [{
      shape: "poly",
      coords: [58, 1, 132, 19, 280, 45, 283, 444, 63, 400, 55, 8]
    }]
  }
}