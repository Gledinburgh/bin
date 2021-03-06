import { actorDetails } from "../../../types";

const dudeShaddow = {
  "id": "dude-shaddow",
  "imgUrl": "/mockup/bin-shaddow.png",
  "baseWidth": 346,
  "baseHeight": 99,
}

export const JunkYardDude: actorDetails = {
  "name": "JunkYardDude",
  "id": "dude",
  "audio": "Audio/Eli_Hello_GX.mp3",
  "modal": "scrapYard",
  "hoverText": "Eli",
  "shaddow": dudeShaddow,
  "imgUrl": "./Stage/dude-empty.png",
  "baseWidth": 286,
  "baseHeight": 561,
  "map": {
    "name": "dudeMap",
    "areas": [{
      shape: "poly",
      coords: [18, 402, 47, 401, 73, 386, 82, 398, 87, 405, 93, 419, 111, 416, 130, 412, 135, 396, 135, 372, 136, 316, 136, 267, 127, 239, 136, 233, 138, 215, 150, 222, 171, 204, 173, 160, 153, 122, 147, 103, 118, 89, 117, 77, 121, 68, 121, 59, 120, 37, 111, 22, 87, 10, 63, 3, 46, 13, 37, 21, 33, 34, 33, 45, 38, 54, 37, 64, 36, 74, 43, 84, 24, 96, 9, 122, 4, 152, 7, 173, 15, 184, 23, 194, 20, 242, 13, 268, 14, 286, 21, 298, 15, 321, 16, 337, 15, 367, 11, 383, 11, 395]
    }]
  }
}