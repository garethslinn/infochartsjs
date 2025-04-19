import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArcadeBar } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function ArcadeBarDemo() {
    return (
        <>
            <div>
                <h2>ArcadeBar: Fun Arcade Maze style Chart</h2>
                <p>
                    The <strong>ArcadeBar</strong> component renders a fun arcade style
                    bar chart, fully customisable.
                </p>
                <p>
                    Download{" "}
                    <a target="_blank" href="https://www.npmjs.com/package/infocharts">
                        Infocharts
                    </a>
                </p>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<ArcadeBar
  data={{
      title: 'Player High Scores',
      // titleSize: 23,
      // valueSize: 16,
      // legendTextSize: 12,
      // textColor: 'yellow',
      // mazeColor: '#444',
      // background: '#333',
      // foreground: '#ff6f61',
      // hideLegend: true,
      series: {
          values: [3143, 1984, 1512, 733],
          // colors: ['#6b5b95', '#88b04b', '#92a8d1', '#f7cac9'],
          legend: ['Jenny W', 'Rupert B', 'Gemma D', 'Edgar T']
      }
  }}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>
                <div>
                    <ArcadeBar
                        data={{
                            title: "Player High Scores",
                            // titleSize: 23,
                            // valueSize: 16,
                            // legendTextSize: 12,
                            // textColor: 'yellow',
                            // mazeColor: '#444',
                            // background: '#333',
                            // foreground: '#ff6f61',
                            // hideLegend: true,
                            series: {
                                values: [3143, 1984, 1512, 733],
                                // colors: ['#6b5b95', '#88b04b', '#92a8d1', '#f7cac9'],
                                legend: ["Jenny W", "Rupert B", "Gemma D", "Edgar T"],
                            },
                        }}
                    />

                    <h2>How to override values</h2>

                    <ArcadeBar
                        data={{
                            title: "Best Selling Games",
                            titleSize: 23,
                            valueSize: 16,
                            legendTextSize: 12,
                            textColor: "yellow",
                            mazeColor: "#444",
                            background: "#333",
                            foreground: "#ff6f61",
                            // hideLegend: true,
                            series: {
                                values: [7023, 2550, 8044, 6554],
                                colors: ["#6b5b95", "#88b04b", "#92a8d1", "#f7cac9"],
                                legend: ["Puckman", "Munchman", "Mazeman", "Ghostly"],
                            },
                        }}
                    />

                    <h2>Hide legend</h2>

                    <ArcadeBar
                        data={{
                            title: "Hidden Legend Example",
                            hideLegend: true,
                            series: {
                                values: [200, 250, 300, 210],
                            },
                        }}
                    />

                    <h2>What to expect if no values added</h2>

                    <ArcadeBar />
                </div>
            </div>
        </>
    );
}
