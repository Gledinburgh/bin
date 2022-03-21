import { MapAreas } from "react-img-mapper";

export interface actorDetails {
  "name": string,
  "id": string,
  "modal": string
  "imgUrl": string,
  "baseWidth": number,
  "baseHeight": number,
  "map": {
    "name": string
    "areas": MapAreas[];
  }
}
