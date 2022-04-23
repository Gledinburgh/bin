import { actorDetails } from "../../types";

const BinShaddow: actorDetails = {
  "name": "BinShaddow",
  "id": "bin-shaddow",
  "modal": "",
  "imgUrl": "/mockup/bin-shaddow.png",
  "baseWidth": 346,
  "baseHeight": 99,
  "map": {
    "name": "binShaddow",
    "areas": [{
      shape: "poly",
      coords: []
    }]
  }
}

export const Bin: actorDetails = {
  "name": "Bin",
  "id": "bin",
  "modal": "park",
  "imgUrl": "./mockup/bin-empty.png",
  "baseWidth": 461,
  "baseHeight": 266,
  "shaddow": BinShaddow,
  "outline": true,
  "map": {
    "name": "binMap",
    "areas": [{
      shape: "poly",
      coords: [2, 157, 3, 122, 12, 111, 11, 66, 8, 57, 20, 49, 28, 53, 38, 40, 57, 40, 65, 45, 77, 34, 90, 37, 98, 26, 108, 33, 123, 26, 141, 24, 147, 36, 150, 25, 165, 21, 175, 20, 179, 25, 196, 14, 202, 19, 213, 15, 218, 19, 230, 19, 243, 14, 328, 75, 351, 97, 335, 104, 334, 239, 316, 244, 317, 257, 304, 261, 289, 259, 285, 248, 121, 277, 121, 289, 116, 296, 102, 296, 94, 292, 97, 279, 57, 254, 42, 255, 34, 245, 34, 234, 17, 219, 16, 168]
    }]
  }
}

