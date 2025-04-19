import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PieGraph } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function PieDemo() {
    return (
        <>
            <div>
                <h2>Pie Graph</h2>
                <p>
                    The <strong>Pie Graph</strong> is a widely-used chart type for
                    displaying proportional data. It breaks down a dataset into segments
                    that represent each category's contribution to the whole. It can be
                    used to quickly visualize percentages or share within a set.
                </p>
                <p>
                    This customizable pie chart allows for different color schemes,
                    patterns, and label styles. It includes accessibility features such as
                    optional data tables and aria descriptions. The patterns can also be
                    toggled on or off to provide further customization.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string): The title of the graph.
                    </li>
                    <li>
                        <strong>summary</strong> (string): A brief summary describing the
                        data or source.
                    </li>
                    <li>
                        <strong>source</strong> (string): The source of the data.
                    </li>
                    <li>
                        <strong>data</strong> (array): The data to be displayed, with each
                        object containing `name` and `value` fields.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The foreground color for text
                        elements.
                    </li>
                    <li>
                        <strong>showTable</strong> (boolean): Toggle to show or hide the
                        data table for accessibility.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the labels.
                    </li>
                    <li>
                        <strong>labelSize</strong> (string): The size of the labels for the
                        percentage values.
                    </li>
                    <li>
                        <strong>isFloat</strong> (boolean): Toggle to display percentages as
                        floats or integers.
                    </li>
                    <li>
                        <strong>tableName</strong> (string): The name of the category for
                        the data table.
                    </li>
                    <li>
                        <strong>tableValue</strong> (string): The value label for the data
                        table.
                    </li>
                    <li>
                        <strong>patterns</strong> (array): An array of patterns to apply to
                        each pie segment.
                    </li>
                    <li>
                        <strong>isPattern</strong> (boolean): Toggle to display patterns in
                        the pie segments.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<PieGraph
  title="Fruit Production"
  summary="A pie chart showing the distribution of fruit production in the first quarter."
  source="Agriculture Department"
  data={[
    { name: "Apples", value: 50, color: "#ff6347" },
    { name: "Bananas", value: 30, color: "#4682b4" },
    { name: "Oranges", value: 20, color: "#32cd32" },
  ]}
  background="#0c263e"
  foreground="#ffffff"
  showTable={true}
  labelColor="#ffffff"
  labelSize="0.15rem"
  isFloat={false}
  tableName="Fruit"
  tableValue="Production"
  patterns={["dots", "lines", "stars"]}
  isPattern={true}
/>

                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the PieGraph */}
                <PieGraph
                    title="Fruit Production"
                    summary="A pie chart showing the distribution of fruit production in the first quarter."
                    source="Agriculture Department"
                    data={[
                        { name: "Apples", value: 50, color: "#ff6347" },
                        { name: "Bananas", value: 30, color: "#4682b4" },
                        { name: "Oranges", value: 20, color: "#32cd32" },
                    ]}
                    background="#0c263e"
                    foreground="#ffffff"
                    showTable={true}
                    labelColor="#ffffff"
                    labelSize="0.15rem"
                    isFloat={false}
                    tableName="Fruit"
                    tableValue="Production"
                    patterns={["dots", "lines", "stars"]}
                    isPattern={true}
                />
            </div>
        </>
    );
}
