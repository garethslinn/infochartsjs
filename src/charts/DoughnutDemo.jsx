import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DoughnutChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function DoughnutDemo() {
    return (
        <>
            <div>
                <h2>Doughnut Chart</h2>
                <p>
                    The <strong>Doughnut Chart</strong> is a customizable component from
                    the Infocharts library, designed for creating responsive doughnut
                    charts in React. It effectively displays data as percentages, ideal
                    for showing proportions and comparisons.
                </p>
                <p>
                    With a range of options for colors, text sizes, and more, the Doughnut
                    Chart adapts seamlessly to different screen sizes and design needs. It
                    ensures accessibility, providing clear data visualization while being
                    compliant with accessibility standards.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string): The title of the chart.
                    </li>
                    <li>
                        <strong>summary</strong> (string): A short description below the
                        chart.
                    </li>
                    <li>
                        <strong>value</strong> (number): The percentage value to display
                        (e.g., 56%).
                    </li>
                    <li>
                        <strong>size</strong> (number): The size of the chart in pixels
                        (default: 350).
                    </li>
                    <li>
                        <strong>bgColor</strong> (string): The color of the background
                        circle.
                    </li>
                    <li>
                        <strong>fgColor</strong> (string): The color of the foreground
                        circle (the filled part of the chart).
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>textColor</strong> (string): The color of the title and
                        summary text.
                    </li>
                    <li>
                        <strong>labelColor</strong> (string): The color of the percentage
                        text inside the chart.
                    </li>
                    <li>
                        <strong>percentageTextSize</strong> (number): The size of the
                        percentage text (in rem units).
                    </li>
                    <li>
                        <strong>titleTextSize</strong> (number): The size of the title text
                        (in rem units).
                    </li>
                    <li>
                        <strong>summaryTextSize</strong> (number): The size of the summary
                        text (in rem units).
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<DoughnutChart
    title="Apples"
    summary="56% of the total fruit production in the first quarter"
    value={56}
    size={300}
    bgColor="blue"         // Background color of the doughnut chart
    fgColor="orange"       // Foreground color (the filled portion of the chart)
    background="white"     // Background color of the container
    textColor="black"      // Text color for the title and summary
    labelColor="black"     // Color of the percentage label
    percentageTextSize={3.5} // Size of the percentage text in rem
    titleTextSize={1.8}      // Size of the chart title text in rem
    summaryTextSize={0.8}    // Size of the summary text in rem
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the DoughnutChart */}
                <DoughnutChart
                    title="Apples"
                    summary="56% of the total fruit production in the first quarter"
                    value={56}
                    size={300}
                    bgColor="blue" // Background color of the doughnut chart
                    fgColor="orange" // Foreground color (the filled portion of the chart)
                    background="white" // Background color of the container
                    textColor="black" // Text color for the title and summary
                    labelColor="black" // Color of the percentage label
                    percentageTextSize={3.5} // Size of the percentage text in rem
                    titleTextSize={1.8} // Size of the chart title text in rem
                    summaryTextSize={1} // Size of the summary text in rem
                />
            </div>
        </>
    );
}
