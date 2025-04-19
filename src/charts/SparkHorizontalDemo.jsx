import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SparkHorizontalBar } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function SparkHorizontalDemo() {
    const total = 100;
    const salesValue = 75;
    const revenueValue = 90;
    const profitValue = 50;

    return (
        <>
            <div>
                <h2>SparkHorizontalBar Example</h2>
                <p>
                    The <strong>SparkHorizontalBar</strong> component represents a single
                    horizontal bar showing a percentage calculation of a value over a
                    total. The value and title are displayed in-line, and an optional
                    suffix (e.g., "%") can be used to clarify the data type.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string, optional): The title displayed
                        in-line with the value.
                    </li>
                    <li>
                        <strong>total</strong> (number): The total value used to calculate
                        the percentage.
                    </li>
                    <li>
                        <strong>value</strong> (number): The value to be represented as a
                        percentage of the total.
                    </li>
                    <li>
                        <strong>suffix</strong> (string, optional): A suffix such as "%" to
                        be displayed next to the value.
                    </li>
                    <li>
                        <strong>barColor</strong> (string, optional): The color used to fill
                        the horizontal bar. Defaults to <code>"#4682b4"</code>.
                    </li>
                    <li>
                        <strong>background</strong> (string, optional): The background color
                        for the bar area.
                    </li>
                    <li>
                        <strong>foreground</strong> (string, optional): The text color for
                        the title and value. Defaults to <code>"#000"</code>.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkHorizontalBar
    title="Sales"
    total={100}
    value={75}
    suffix="%"
    barColor="green"
    background="#f9f9f9"
    foreground="darkgreen"
/>
                    `}
                    </SyntaxHighlighter>

                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkHorizontalBar
    title="Revenue"
    total={100}
    value={90}
    suffix="%"
    barColor="blue"
    background="#d3d3d3"
    foreground="darkblue"
/>
                    `}
                    </SyntaxHighlighter>

                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkHorizontalBar
    title="Profit"
    total={100}
    value={50}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render SparkHorizontalBar with Sales percentage */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkHorizontalBar
                        title="Sales"
                        total={total}
                        value={salesValue}
                        suffix="%"
                        barColor="green"
                        background="#f9f9f9"
                        foreground="darkgreen"
                    />
                </div>

                {/* Render SparkHorizontalBar with Revenue percentage */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkHorizontalBar
                        title="Revenue"
                        total={total}
                        value={revenueValue}
                        suffix="%"
                        barColor="blue"
                        background="#d3d3d3"
                        foreground="darkblue"
                    />
                </div>

                {/* Render SparkHorizontalBar with Profit percentage */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkHorizontalBar
                        title="Profit"
                        total={total}
                        value={profitValue}
                    />
                </div>
            </div>
        </>
    );
}
