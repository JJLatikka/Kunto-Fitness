import "../styles/Home.css";
import { kunto_fitness, image_style } from "../lib/var";

export function Home() {
  const kuva = require("../heartWithRate.png");
  return (
    <div id="frame">
      <div id="center">
        <div>{kunto_fitness}</div>
        <img style={image_style} src={kuva} alt=":-#)#" />
      </div>
    </div>
  );
}
