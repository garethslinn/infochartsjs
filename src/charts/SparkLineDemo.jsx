import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SparkLine } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function SparkLineDemo() {
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
                <h2>SparkLine Chart</h2>
                <p>
                    The <strong>Sparkline Chart</strong> is a minimalist line graph
                    typically used to show trends or variations over time. It’s often used
                    in dashboards and reports due to its simplicity and small footprint.
                </p>
                <p>
                    This component supports customization of the data, title, colors,
                    background, and stroke width, making it a versatile chart for
                    small-scale visual representation of trends.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string, optional): The title displayed above
                        the sparkline chart. Defaults to an empty string.
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
                        <strong>strokeColor</strong> (string, optional): The color of the
                        sparkline line. Defaults to <code>"#4682b4"</code>.
                    </li>
                    <li>
                        <strong>strokeWidth</strong> (number, optional): The thickness of
                        the sparkline stroke. Defaults to <code>2</code>.
                    </li>
                    <li>
                        <strong>backgroundColor</strong> (string, optional): The background
                        color of the chart. Defaults to <code>"#fff"</code>.
                    </li>
                    <li>
                        <strong>foregroundColor</strong> (string, optional): The color of
                        the non-graph text (title and total). Defaults to{" "}
                        <code>"#000"</code>.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkLine
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
    strokeColor="#ffc109"
    strokeWidth={4}
    backgroundColor="darkblue"
    foregroundColor="#ffc109"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the Sparkline without hover functionality */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkLine
                        title="Sales Over Time"
                        data={salesData}
                        strokeColor="#ffc109"
                        strokeWidth={4}
                        backgroundColor="darkblue"
                        foregroundColor="#ffc109"
                    />
                </div>

                {/* Render the second SparkLine without hover functionality */}
                <div style={{ width: "20rem" }}>
                    <SparkLine
                        data={expenseData}
                        strokeColor="white"
                        strokeWidth={3}
                        backgroundColor="#d38888"
                        foregroundColor="white"
                    />
                </div>
            </div>
        </>
    );
}
