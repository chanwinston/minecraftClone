import logImg from "./images/log.jpg";
import grassImg from "./images/grass.jpg";
import { TextureLoader } from "three";

export const grass = new TextureLoader().load(grassImg);
export const log = new TextureLoader().load(logImg);
