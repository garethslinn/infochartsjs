import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StackedRow } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function StackedRowDemo() {
    return (
        <>
            <div>
                <h2>Stacked Row Chart</h2>
                <p>
                    The <strong>Stacked Row Chart</strong> is a horizontal bar chart
                    component that allows you to visualize multiple categories in a single
                    row by stacking the values side by side. It is ideal for comparing
                    parts of a whole across multiple categories or groups.
                </p>
                <p>
                    Each row represents a category, and within each row, the segments of
                    the bar represent different data points. The chart is customizable
                    with color schemes, labels, and explanations, making it a great tool
                    for data presentation.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): The data for the chart, where each
                        item represents a row with a description and segments.
                    </li>
                    <li>
                        <strong>legend</strong> (array): The legend for the chart, showing
                        the labels and colors for each segment.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart.
                    </li>
                    <li>
                        <strong>textColor</strong> (string): The color for the text labels
                        and descriptions.
                    </li>
                    <li>
                        <strong>defaultColors</strong> (array): Default colors for the
                        segments if not provided in the data.
                    </li>
                    <li>
                        <strong>explanation</strong> (string): A text explanation to
                        describe the chart.
                    </li>
                    <li>
                        <strong>barWidth</strong> (string): The width of the bars, typically
                        expressed as a percentage (default: '90%').
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<StackedRow
data={[
  {
    description: "Category 1",
    segments: [
      { value: 10, color: "#f39c12" },
      { value: 20, color: "#8e44ad" },
      { value: 30, color: "#27ae60" },
      { value: 25, color: "#d35400" },
      { value: 15, color: "#3498db" },
    ],
  },
  {
    description: "Category 2",
    segments: [
      { value: 20, color: "#f39c12" },
      { value: 15, color: "#8e44ad" },
      { value: 25, color: "#27ae60" },
      { value: 20, color: "#d35400" },
      { value: 20, color: "#3498db" },
    ],
  },
  {
    description: "Category 3",
    segments: [
      { value: 30, color: "#f39c12" },
      { value: 20, color: "#8e44ad" },
      { value: 10, color: "#27ae60" },
      { value: 25, color: "#d35400" },
      { value: 15, color: "#3498db" },
    ],
  },
]}
legend={[
  { label: "Segment 1", color: "#f39c12" },
  { label: "Segment 2", color: "#8e44ad" },
  { label: "Segment 3", color: "#27ae60" },
  { label: "Segment 4", color: "#d35400" },
  { label: "Segment 5", color: "#3498db" },
]}
background="darkblue"
textColor="#fff"
defaultColors={[
  "#f39c12",
  "#8e44ad",
  "#27ae60",
  "#d35400",
  "#3498db",
]}
explanation="This chart shows the proportion of five different values for different categories."
barWidth="90%"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the StackedRow */}
                <StackedRow
                    data={[
                        {
                            description: "Category 1",
                            segments: [
                                { value: 10, color: "#f39c12" },
                                { value: 20, color: "#8e44ad" },
                                { value: 30, color: "#27ae60" },
                                { value: 25, color: "#d35400" },
                                { value: 15, color: "#3498db" },
                            ],
                        },
                        {
                            description: "Category 2",
                            segments: [
                                { value: 20, color: "#f39c12" },
                                { value: 15, color: "#8e44ad" },
                                { value: 25, color: "#27ae60" },
                                { value: 20, color: "#d35400" },
                                { value: 20, color: "#3498db" },
                            ],
                        },
                        {
                            description: "Category 3",
                            segments: [
                                { value: 30, color: "#f39c12" },
                                { value: 20, color: "#8e44ad" },
                                { value: 10, color: "#27ae60" },
                                { value: 25, color: "#d35400" },
                                { value: 15, color: "#3498db" },
                            ],
                        },
                    ]}
                    legend={[
                        { label: "Segment 1", color: "#f39c12" },
                        { label: "Segment 2", color: "#8e44ad" },
                        { label: "Segment 3", color: "#27ae60" },
                        { label: "Segment 4", color: "#d35400" },
                        { label: "Segment 5", color: "#3498db" },
                    ]}
                    background="darkblue"
                    textColor="#fff"
                    defaultColors={[
                        "#f39c12",
                        "#8e44ad",
                        "#27ae60",
                        "#d35400",
                        "#3498db",
                    ]}
                    explanation="This chart shows the proportion of five different values for different categories."
                    barWidth="90%"
                />
            </div>
        </>
    );
}
