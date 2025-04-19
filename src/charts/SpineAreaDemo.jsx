import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SplineAreaChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function SpineAreaDemo() {
    return (
        <>
            <div>
                <h2>Spline Chart</h2>
                <p>
                    The <strong>Spline Chart</strong> is a smooth curve-based chart ideal
                    for representing continuous data trends. It uses cubic Bezier curves
                    to generate smooth transitions between data points, making it an
                    excellent choice for visualizing trends over time or continuous data
                    sets.
                </p>
                <p>
                    This chart component is highly customizable with options for colors,
                    labels, and sizes. It also provides a filled area under the curve to
                    emphasize the total area covered by the data.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): The numerical data points to plot on
                        the chart.
                    </li>
                    <li>
                        <strong>labels</strong> (array): Labels for the x-axis corresponding
                        to each data point.
                    </li>
                    <li>
                        <strong>width</strong> (number): The width of the chart in pixels
                        (default: 800px).
                    </li>
                    <li>
                        <strong>height</strong> (number): The height of the chart in pixels
                        (default: 400px).
                    </li>
                    <li>
                        <strong>fillColor</strong> (string): The color used to fill the area
                        under the curve.
                    </li>
                    <li>
                        <strong>strokeColor</strong> (string): The color of the spline line
                        itself.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the x-axis
                        labels.
                    </li>
                    <li>
                        <strong>lineColor</strong> (string): The color of the vertical grid
                        lines.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SplineAreaChart
    data={[30, 40, 35, 50, 45, 60, 55]}
    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
    width={800}
    height={400}
    fillColor="lightblue"
    strokeColor="#fff"
    background="darkblue"
    labelColor="#fff"
    lineColor="#fff"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the SplineAreaChart */}
                <SplineAreaChart
                    data={[30, 40, 35, 50, 45, 60, 55]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                    width={800}
                    height={400}
                    fillColor="lightblue"
                    strokeColor="#fff"
                    background="darkblue"
                    labelColor="#fff"
                    lineColor="#fff"
                />
            </div>
        </>
    );
}
