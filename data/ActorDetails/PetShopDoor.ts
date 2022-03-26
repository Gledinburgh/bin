import { actorDetails } from "../../types";

export const PetShopDoor: actorDetails = {
  "name": "PetShopDoor",
  "id": "pet-shop-door",
  "modal": "petShop",
  "imgUrl": "./mockup/petshop-door.png",
  "baseWidth": 500,
  "baseHeight": 550,
  "map": {
    "name": "doorMap",
    "areas": [{
      shape: "poly",
      coords: [270, 99, 368, 120, 493, 142, 497, 160, 497, 202, 496, 275, 495, 341, 495, 422, 496, 468, 494, 548, 271, 498, 268, 294]
    }]
  }
}