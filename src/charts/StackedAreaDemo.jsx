import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StackedAreaChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function StackedAreaDemo() {
    return (
        <>
            <div>
                <h2>Stacked Area Chart</h2>
                <p>
                    The <strong>Stacked Area Chart</strong> is a useful tool for
                    visualizing data series that are stacked on top of each other. It is
                    ideal for showing the cumulative effect of multiple data series,
                    making it easy to observe trends over time or across categories.
                </p>
                <p>
                    This component is fully customizable with adjustable colors, labels,
                    and axes. It automatically adjusts to fit the width of its container
                    and provides options for responsive resizing. This is a powerful
                    visualization tool for comparing multiple data sets while highlighting
                    their individual and combined contributions.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): The data to plot, each object should
                        contain `series1`, `series2`, `series3`, and `month` fields.
                    </li>
                    <li>
                        <strong>colors</strong> (array): The colors for each series in the
                        stacked chart.
                    </li>
                    <li>
                        <strong>height</strong> (number): The height of the chart in pixels
                        (default: 400px).
                    </li>
                    <li>
                        <strong>seriesNames</strong> (array): The names of each series
                        displayed in the legend (default: ["Series 1", "Series 2", "Series
                        3"]).
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the labels in the
                        legend.
                    </li>
                    <li>
                        <strong>axisColor</strong> (string): The color of the axis lines and
                        labels.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<StackedAreaChart
  data={[
    { month: "Jan", series1: 30, series2: 50, series3: 20 },
    { month: "Feb", series1: 40, series2: 60, series3: 30 },
    { month: "Mar", series1: 35, series2: 55, series3: 25 },
    { month: "Apr", series1: 50, series2: 70, series3: 40 },
    { month: "May", series1: 60, series2: 80, series3: 50 },
  ]}
  width={800}
  height={400}
  colors={["#5DADE2", "#1F618D", "#154360"]}
  background="#0c263e"
  labelColor="#ffffff"
  axisColor="#ffffff"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the StackedAreaChart */}
                <StackedAreaChart
                    data={[
                        { month: "Jan", series1: 30, series2: 50, series3: 20 },
                        { month: "Feb", series1: 40, series2: 60, series3: 30 },
                        { month: "Mar", series1: 35, series2: 55, series3: 25 },
                        { month: "Apr", series1: 50, series2: 70, series3: 40 },
                        { month: "May", series1: 60, series2: 80, series3: 50 },
                    ]}
                    width={800}
                    height={400}
                    colors={["#5DADE2", "#1F618D", "#154360"]}
                    background="#fff"
                    labelColor="#000"
                    axisColor="#000"
                />
            </div>
        </>
    );
}
