import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StackedBarChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function StackedBarDemo() {
    return (
        <>
            <div>
                <h2>Stacked Bar Chart</h2>
                <p>
                    The <strong>Stacked Bar Chart</strong> component displays data using
                    stacked bars, where each bar represents a category and the different
                    sections of the bar correspond to different data series. This chart is
                    ideal for showing how a total value is divided among categories.
                </p>
                <p>
                    It supports dynamic resizing and customizable colors, making it a
                    flexible and powerful tool for visualizing complex datasets.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): An array of objects representing the
                        data for each category, including a month field and fields for each
                        series.
                    </li>
                    <li>
                        <strong>colors</strong> (array): An array of colors for the
                        different series.
                    </li>
                    <li>
                        <strong>height</strong> (number): The height of the chart in pixels
                        (default: 400px).
                    </li>
                    <li>
                        <strong>seriesNames</strong> (array): Names of the series that are
                        displayed in the legend.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The color for the chart
                        foreground elements, such as lines.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the labels on the
                        chart.
                    </li>
                    <li>
                        <strong>valueColor</strong> (string): The color of the values
                        displayed on the chart.
                    </li>
                    <li>
                        <strong>axisColor</strong> (string): The color of the axis lines.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<StackedBarChart
    data={[
        { month: 'January', series1: 30, series2: 20, series3: 50 },
        { month: 'February', series1: 40, series2: 30, series3: 30 },
        { month: 'March', series1: 20, series2: 50, series3: 30 },
    ]}
    width={800}
    height={400}
    colors={["#ffc109", "#00a37a", "#7a00a3"]}
    background="darkblue"
    labelColor="#fff"
    axisColor="#fff"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                <StackedBarChart
                    data={[
                        { month: "January", series1: 30, series2: 20, series3: 50 },
                        { month: "February", series1: 40, series2: 30, series3: 30 },
                        { month: "March", series1: 20, series2: 50, series3: 30 },
                    ]}
                    width={800}
                    height={400}
                    colors={["#ffc109", "#00a37a", "#7a00a3"]}
                    background="darkblue"
                    labelColor="#fff"
                    axisColor="#fff"
                />
            </div>
        </>
    );
}
