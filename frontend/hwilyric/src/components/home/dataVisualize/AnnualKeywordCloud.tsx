// WordCloud.tsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createWordCloud, Word } from "./WordCloud";
import { randomInt } from "d3";

interface WordCloudProps {
  words: Word[];
  width: number;
  height: number;
}

export const WordCloud: React.FC<WordCloudProps> = ({
  words,
  width,
  height,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    createWordCloud(words, width, height, (cloudWords) => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(cloudWords)
        .enter()
        .append("text")
        .style("font-size", (d: Word) => `${d.size}px`)
        .style("font-family", "Impact")
        .style("fill", (_, i) => color(i.toString()))
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d: Word) =>
            `translate(${[randomInt, randomInt]})rotate(${randomInt})`
        )
        .text((d: Word) => d.text);
    });
  }, [words, width, height]);

  return <svg ref={svgRef}></svg>;
};
