import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SparkBar } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function SparkBarDemo() {
    const salesData = [
        { item: "January", value: 500 },
        { item: "February", value: 200 },
        { item: "March", value: 150 },
        { item: "April", value: 300 },
        { item: "May", value: 400 },
        { item: "June", value: 450 },
        { item: "July", value: 500 },
    ];

    const expenseData = [
        { item: "January", value: 30 },
        { item: "February", value: 20 },
        { item: "March", value: 30 },
        { item: "April", value: 10 },
        { item: "May", value: 70 },
        { item: "June", value: 20 },
        { item: "July", value: 30 },
    ];

    return (
        <>
            <div>
                <h2>SparkBar Chart</h2>
                <p>
                    The <strong>SparkBar Chart</strong> is a minimalist bar graph
                    typically used to show trends or variations over time. It’s often used
                    in dashboards and reports due to its simplicity and small footprint.
                    The bars represent individual data points without any interactive
                    functionality.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string, optional): The title displayed above
                        the SparkBar chart.
                    </li>
                    <li>
                        <strong>data</strong> (object[]): The data points to be plotted.
                        Each object includes:
                        <ul>
                            <li>
                                <strong>item</strong> (string): A label for the data point, like
                                "January."
                            </li>
                            <li>
                                <strong>value</strong> (number): The value associated with the
                                data point, like 500.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>fillColor</strong> (string, optional): The color of the
                        bars. Defaults to <code>"#4682b4"</code>.
                    </li>
                    <li>
                        <strong>backgroundColor</strong> (string, optional): The background
                        color of the chart. Defaults to <code>"#fff"</code>.
                    </li>
                    <li>
                        <strong>foregroundColor</strong> (string, optional): The color of
                        non-graph text (title and total). Defaults to <code>"#000"</code>.
                    </li>
                    <li>
                        <strong>noTotal</strong> (boolean, optional): If set to{" "}
                        <code>true</code>, the total value will not be displayed.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkBar
    title="Sales Over Time"
    data={[
        { item: 'January', value: 500 },
        { item: 'February', value: 200 },
        { item: 'March', value: 150 },
        { item: 'April', value: 300 },
        { item: 'May', value: 400 },
        { item: 'June', value: 450 },
        { item: 'July', value: 500 },
    ]}
    fillColor="#ffc109"
    backgroundColor="#fff"
    foregroundColor="darkblue"
/>
                    `}
                    </SyntaxHighlighter>

                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkBar
    data={[
        { item: 'January', value: 30 },
        { item: 'February', value: 20 },
        { item: 'March', value: 30 },
        { item: 'April', value: 10 },
        { item: 'May', value: 70 },
        { item: 'June', value: 20 },
        { item: 'July', value: 30 },
    ]}
    fillColor="#ffc109"
    backgroundColor="darkblue"
    foregroundColor="white"
/>
                    `}
                    </SyntaxHighlighter>

                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkBar
    data={[
        { item: 'January', value: 30 },
        { item: 'February', value: 20 },
        { item: 'March', value: 30 },
        { item: 'April', value: 10 },
        { item: 'May', value: 70 },
        { item: 'June', value: 20 },
        { item: 'July', value: 30 },
    ]}
    fillColor="white"
    backgroundColor="black"
    foregroundColor="white"
    noTotal
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the SparkBar with different data sets */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkBar
                        title="Sales Over Time"
                        data={salesData}
                        fillColor="#ffc109"
                        backgroundColor="darkblue"
                        foregroundColor="white"
                    />
                </div>

                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkBar
                        data={expenseData}
                        fillColor="white"
                        backgroundColor="#d38888"
                        foregroundColor="white"
                    />
                </div>

                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkBar
                        data={expenseData}
                        fillColor="white"
                        backgroundColor="black"
                        foregroundColor="white"
                        noTotal
                    />
                </div>
            </div>
        </>
    );
}
