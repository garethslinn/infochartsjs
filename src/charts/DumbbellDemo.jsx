import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DumbbellChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function DumbbellDemo() {
    return (
        <>
            <div>
                <h2>Dumbbell Chart</h2>
                <p>
                    The <strong>Dumbbell Chart</strong> is a dynamic and customizable
                    component from the Infocharts library, designed to showcase
                    comparisons between two data points for each category. It is perfect
                    for displaying side-by-side values for visualizing changes or
                    differences over time or between groups.
                </p>
                <p>
                    The Dumbbell Chart provides options to adjust colors, sizes, and more,
                    ensuring seamless integration with your design needs. It also ensures
                    accessibility, making it a great option for accessible data
                    visualization with responsive resizing and customizable options for
                    labels and axis values.
                </p>

                <h2>Props</h2>

                <ul>
                    <li>
                        <strong>data</strong> (array): The data points to plot, each object
                        in the array should have `series1`, `series2`, and `fruit` fields.
                    </li>
                    <li>
                        <strong>colors</strong> (array): Two colors to represent the two
                        series (default: blue and pink).
                    </li>
                    <li>
                        <strong>height</strong> (number): The height of the chart in pixels
                        (default: 400px).
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the axis labels.
                    </li>
                    <li>
                        <strong>width</strong> (number): The width of the chart in pixels
                        (default: 600px).
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The color for the text and
                        connecting lines.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<DumbbellChart
    data={[
        { fruit: "Apples", series1: 50, series2: 80 },
        { fruit: "Bananas", series1: 40, series2: 70 },
        { fruit: "Oranges", series1: 30, series2: 60 },
        { fruit: "Grapes", series1: 10, series2: 20 },
        { fruit: "Pears", series1: 20, series2: 50 },
        { fruit: "Peaches", series1: 40, series2: 50 }
    ]}
    colors={["rgba(0, 123, 255, 0.7)", "rgba(255, 0, 123, 0.7)"]}
    height={400}
    width={500}
    background="#fff"
    foreground="#000"
    labelColor="#000"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the DumbbellChart */}
                <div style={{ "padding-left": "2rem" }}>
                    <DumbbellChart
                        data={[
                            { fruit: "Apples", series1: 50, series2: 80 },
                            { fruit: "Bananas", series1: 40, series2: 70 },
                            { fruit: "Oranges", series1: 30, series2: 60 },
                            { fruit: "Grapes", series1: 10, series2: 20 },
                            { fruit: "Pears", series1: 20, series2: 50 },
                            { fruit: "Peaches", series1: 40, series2: 50 },
                        ]}
                        colors={["rgba(0, 123, 255, 0.7)", "rgba(255, 0, 123, 0.7)"]}
                        height={400}
                        width={600}
                        background="#fff"
                        foreground="#000"
                        labelColor="#000"
                    />
                </div>
            </div>
        </>
    );
}
