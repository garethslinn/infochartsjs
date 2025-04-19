import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HorizontalList } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function HorizontalListDemo() {
    return (
        <>
            <div>
                <h2>Horizontal List Chart</h2>
                <p>
                    The <strong>Horizontal List Chart</strong> is a simple and clean way
                    to represent data in a horizontal bar style where each bar corresponds
                    to a list item. This component is perfect for visualizing lists of
                    data with values, using horizontal bars to depict the relative size of
                    each item.
                </p>
                <p>
                    The chart supports color customization, labels, value types (such as
                    percentages or units), and responsive design. It’s ideal for
                    displaying ranked data or comparing quantities across a list of
                    categories.
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
                        <strong>summary</strong> (string): A short description or summary
                        displayed below the title.
                    </li>
                    <li>
                        <strong>items</strong> (array): The data points to display. Each
                        object should contain `name`, `value`, and `color` properties.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the label text.
                    </li>
                    <li>
                        <strong>valueType</strong> (string): A unit or label to append to
                        the values (e.g., %, $).
                    </li>
                    <li>
                        <strong>valueColor</strong> (string): The color of the values inside
                        the circles.
                    </li>
                    <li>
                        <strong>colors</strong> (array): Array of colors to override the
                        default bar colors for each item.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<HorizontalList
    title="Fruit Consumption Comparison"
    background="#0c263eff"
    foreground="#ffffff"
    summary="A horizontal list comparing the consumption of various fruits in 2023."
    labelColor="#ffffff"
    valueType="%"
    items={[
        { name: "Apples", value: 50, color: "#ff6347" },
        { name: "Bananas", value: 30, color: "#4682b4" },
        { name: "Oranges", value: 20, color: "#32cd32" },
        { name: "Grapes", value: 15, color: "#dda0dd" }
    ]}
    valueColor="#fff"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the HorizontalList */}
                <HorizontalList
                    title="Fruit Consumption Comparison"
                    background="#0c263eff"
                    foreground="#ffffff"
                    summary="A horizontal list comparing the consumption of various fruits in 2023."
                    labelColor="#ffffff"
                    valueType="%"
                    items={[
                        { name: "Apples", value: 50, color: "#ff6347" },
                        { name: "Bananas", value: 30, color: "#4682b4" },
                        { name: "Oranges", value: 20, color: "#32cd32" },
                        { name: "Grapes", value: 15, color: "#dda0dd" },
                    ]}
                    valueColor="#fff"
                />
            </div>
        </>
    );
}
