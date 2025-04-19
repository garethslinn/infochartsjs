import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HorizontalBar } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function HorizontalBarDemo() {
    return (
        <>
            <div>
                <h2>Horizontal Bar Chart</h2>
                <p>
                    The <strong>Horizontal Bar Chart</strong> is a visual representation
                    of data using horizontal bars where the length of each bar is
                    proportional to the data value it represents. It’s perfect for
                    comparing quantities across categories and showcasing the relative
                    differences between them.
                </p>
                <p>
                    This component is highly customizable, supporting color overrides,
                    custom labels, and responsive design, making it suitable for a variety
                    of data visualization needs. The chart dynamically adjusts its colors
                    and labels based on the provided props, making it easy to integrate
                    into different designs and use cases.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string): The title of the chart.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The color of the text labels.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the values inside
                        the bars.
                    </li>
                    <li>
                        <strong>summary</strong> (string): A short description or summary
                        displayed below the title.
                    </li>
                    <li>
                        <strong>items</strong> (array): The data points to display in the
                        chart. Each object should contain `name`, `value`, and `color`
                        properties.
                    </li>
                    <li>
                        <strong>year</strong> (string | number): A year label to show on the
                        chart (optional).
                    </li>
                    <li>
                        <strong>valueType</strong> (string): A unit or label to append to
                        the values (e.g., %, $).
                    </li>
                    <li>
                        <strong>colorSeries</strong> (array): Optional array of colors to
                        override the default series colors.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<HorizontalBar
    title="Fruit Production Comparison"
    background="#0c263eff"
    foreground="#ffffff"
    labelColor="#ffffff"
    summary="A horizontal bar chart comparing the production of various fruits in 2023."
    year={2023}
    valueType="%"
    items={[
        { name: "Apples", value: 50, color: "#007bff" },
        { name: "Bananas", value: 30, color: "#28a745" },
        { name: "Oranges", value: 20, color: "#ffc107" },
        { name: "Grapes", value: 15, color: "#17a2b8" }
    ]}
    colorSeries={["#ff5733", "#c70039", "#900c3f", "#581845"]}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the HorizontalBar Chart */}
                <HorizontalBar
                    title="Fruit Production Comparison"
                    background="#0c263eff"
                    foreground="#ffffff"
                    labelColor="#ffffff"
                    summary="A horizontal bar chart comparing the production of various fruits in 2023."
                    year={2023}
                    valueType="%"
                    items={[
                        { name: "Apples", value: 50, color: "#007bff" },
                        { name: "Bananas", value: 30, color: "#28a745" },
                        { name: "Oranges", value: 20, color: "#ffc107" },
                        { name: "Grapes", value: 15, color: "#17a2b8" },
                    ]}
                    colorSeries={["#ff5733", "#c70039", "#900c3f", "#581845"]}
                />
            </div>
        </>
    );
}
