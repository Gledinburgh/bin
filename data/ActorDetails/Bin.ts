import { actorDetails } from "../../types";

const BinShaddow = {
  "id": "bin-shaddow",
  "imgUrl": "/mockup/bin-shaddow.png",
  "baseWidth": 346,
  "baseHeight": 99,
}

export const Bin: actorDetails = {
  "name": "Bin",
  "id": "bin",
  "modal": "park",
  "audio": "Audio/Bin_Hi_.mp3",
  "imgUrl": "./mockup/bin-empty.png",
  "baseWidth": 461,
  "baseHeight": 266,
  "shaddow": BinShaddow,
  "outline": true,
  "map": {
    "name": "binMap",
    "areas": [{
      shape: "poly",
      coords: [22, 292, 39, 300, 36, 320, 46, 330, 63, 338, 69, 328, 110, 356, 119, 362, 117, 374, 123, 386, 139, 388, 151, 378, 149, 362, 367, 324, 367, 333, 399, 334, 400, 316, 428, 306, 435, 129, 454, 120, 460, 111, 436, 98, 434, 82, 303, 0, 241, 7, 195, 16, 125, 28, 58, 47, 21, 60, 1, 80, 11, 136, 1, 153, 3, 204, 16, 217]
    }]
  }
}

