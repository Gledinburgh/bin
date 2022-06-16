import { MapAreas } from "react-img-mapper";

export interface actorDetails {
  "name": string,
  "id": string,
  "modal": string,
  "audio"?: string,
  "imgUrl": string,
  "baseWidth": number,
  "baseHeight": number,
  "shaddow"?: any,
  "outline"?: boolean,
  "map": {
    "name": string
    "areas": MapAreas[];
  }
}
