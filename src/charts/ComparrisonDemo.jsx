import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ComparisonGraph } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function ComparrisonDemo() {
    return (
        <>
            <div>
                <h2>Comparison Graph</h2>
                <p>
                    The <strong>Comparison Graph</strong> is a customizable component from
                    the Infocharts library, designed to display comparisons using
                    proportional circles. Each circle's size is proportional to the value
                    it represents, making it an excellent choice for visually comparing
                    large sets of data or displaying proportions.
                </p>
                <p>
                    This graph ensures accessibility by supporting customizable colors,
                    sizes, and labels, and it adapts responsively to different screen
                    sizes. It is a flexible tool for presenting data in a visually
                    engaging way while ensuring that all users can interact with the
                    chart.
                </p>

                <h2>Props</h2>

                <ul>
                    <li>
                        <strong>title</strong> (string): The title of the graph.
                    </li>
                    <li>
                        <strong>summary</strong> (string): A short description or summary
                        below the graph.
                    </li>
                    <li>
                        <strong>ariaDescription</strong> (string): The aria description for
                        accessibility purposes.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color for the labels
                        inside the circles.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The color for the text and
                        circle labels.
                    </li>
                    <li>
                        <strong>data</strong> (array): The data points to display. Each
                        object should contain `value` and `color` properties.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<ComparisonGraph
  title="Comparison Graph Example"
  summary="This graph compares different fruit production."
  ariaDescription="A comparison graph showing the production of various fruits."
  labelColor="#ffffff"
  background="#0c263e"
  foreground="#ffffff"
  data={[
    { value: 80, color: "#5DADE2" },
    { value: 60, color: "#FF6347" },
  ]}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                <ComparisonGraph
                    title="Comparison Graph Example"
                    summary="This graph compares different fruit production."
                    ariaDescription="A comparison graph showing the production of various fruits."
                    labelColor="#ffffff"
                    background="#0c263e"
                    foreground="#ffffff"
                    data={[
                        { value: 80, color: "#5DADE2" },
                        { value: 60, color: "#FF6347" },
                    ]}
                />
            </div>
        </>
    );
}
