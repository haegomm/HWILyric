// wordCloud.ts
import * as d3 from "d3";
import cloud from "d3-cloud";

export interface Word {
  text: string;
  size: number;
}

export function createWordCloud(
  words: Word[],
  width: number,
  height: number,
  callback: (words: Word[]) => void
) {
  const layout = cloud()
    .size([width, height])
    .words(words)
    .padding(5)
    .rotate(() => Math.round(1 - Math.random()) * 90)
    .font("Impact")
    .fontSize(100)
    .on("end", callback);

  layout.start();
}
