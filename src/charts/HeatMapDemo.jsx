import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HeatMap } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function HeatMapDemo() {
    return (
        <>
            <div>
                <h2>Heat Map</h2>
                <p>
                    The <strong>Heat Map</strong> component is a powerful way to visualize
                    data intensity over time or across different categories. The color
                    scale moves from blue (lower values) to red (higher values), making it
                    ideal for spotting trends, variations, and concentrations within your
                    data.
                </p>
                <p>
                    This component is highly customizable with options to set labels,
                    background colors, and value displays. It adapts to various datasets
                    and ensures that the visualization is both accessible and clear for
                    users.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): The data to plot, a 2D array where
                        each value represents the intensity for a specific month and
                        category.
                    </li>
                    <li>
                        <strong>months</strong> (array): The labels for the top row,
                        typically months or time periods.
                    </li>
                    <li>
                        <strong>rowLabels</strong> (array): The labels for each row,
                        representing the categories or items being tracked.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        heat map container.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the row and
                        column labels.
                    </li>
                    <li>
                        <strong>valueColor</strong> (string): The text color inside each
                        heat map cell.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<HeatMap
    data={[
        [30, 50, 70, 90],
        [40, 60, 80, 100],
        [20, 40, 60, 80]
    ]}
    months={['January', 'February', 'March', 'April']}
    rowLabels={['Category 1', 'Category 2', 'Category 3']}
    background="#fff"
    labelColor="#000"
    valueColor="#fff"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the HeatMap */}
                <HeatMap
                    data={[
                        [30, 50, 70, 90],
                        [40, 60, 80, 100],
                        [20, 40, 60, 80],
                    ]}
                    months={["January", "February", "March", "April"]}
                    rowLabels={["Category 1", "Category 2", "Category 3"]}
                    background="#fff"
                    labelColor="#000"
                    valueColor="#fff"
                />
            </div>
        </>
    );
}
