import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SparkStackedBar } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function SparkStackedBarDemo() {
    const total = 100; // Total for percentage calculations

    const segmentsDefault = [
        { label: "Segment 1", value: 40, color: "green" },
        { label: "Segment 2", value: 30, color: "blue" },
        { label: "Segment 3", value: 20, color: "orange" },
        { label: "Segment 4", value: 10, color: "red" },
    ];

    const segmentsCompact = [
        { label: "Segment 1", value: 60, color: "#66ff00" },
        { label: "Segment 2", value: 25, color: "cyan" },
        { label: "Segment 3", value: 15, color: "yellow" },
    ];

    const segmentsCustom = [
        { label: "Segment 1", value: 35, color: "pink" },
        { label: "Segment 2", value: 40, color: "lightblue" },
        { label: "Segment 3", value: 25, color: "lightgreen" },
    ];

    return (
        <>
            <div>
                <h2>SparkStackedBar Variants</h2>
                <p>
                    The <strong>SparkStackedBar</strong> component allows you to visualize
                    data with stacked segments in different variants. Here are examples of
                    the default, compact, and custom variants.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string): The title displayed next to the
                        stacked bar.
                    </li>
                    <li>
                        <strong>total</strong> (number): The total value used to calculate
                        the percentage for each segment.
                    </li>
                    <li>
                        <strong>segments</strong> (array of objects): Each object includes:
                        <ul>
                            <li>
                                <strong>label</strong> (string): A label for the segment.
                            </li>
                            <li>
                                <strong>value</strong> (number): The value associated with the
                                segment.
                            </li>
                            <li>
                                <strong>color</strong> (string): The color used to fill the
                                segment.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>background</strong> (string, optional): The background color
                        for the bar area.
                    </li>
                    <li>
                        <strong>foreground</strong> (string, optional): The text color for
                        the title and value.
                    </li>
                    <li>
                        <strong>suffix</strong> (string, optional): A suffix such as "%" to
                        be displayed next to the value.
                    </li>
                    <li>
                        <strong>height</strong> (number, optional): Custom height for the
                        bar.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    {/* Default variant */}
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkStackedBar
    title="Default Variant"
    total={100}
    segments={[
        { label: 'Segment 1', value: 40, color: 'green' },
        { label: 'Segment 2', value: 30, color: 'blue' },
        { label: 'Segment 3', value: 20, color: 'orange' },
        { label: 'Segment 4', value: 10, color: 'red' }
    ]}
    background="#f0f0f0"
    foreground="darkblue"
    suffix="%"
/>
                    `}
                    </SyntaxHighlighter>

                    {/* Compact variant */}
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkStackedBar
    title="Compact Variant"
    total={100}
    segments={[
        { label: 'Segment 1', value: 60, color: '#66ff00' },
        { label: 'Segment 2', value: 25, color: 'cyan' },
        { label: 'Segment 3', value: 15, color: 'yellow' }
    ]}
    background="black"
    foreground="white"
    height={7}  // Custom height for compact variant
    suffix="%"
/>
                    `}
                    </SyntaxHighlighter>

                    {/* Custom variant */}
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<SparkStackedBar
    title="Custom Variant"
    total={100}
    segments={[
        { label: 'Segment 1', value: 35, color: 'pink' },
        { label: 'Segment 2', value: 40, color: 'lightblue' },
        { label: 'Segment 3', value: 25, color: 'lightgreen' }
    ]}
    background="white"
    suffix="%"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Default variant */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkStackedBar
                        title="Default Variant"
                        total={total}
                        segments={segmentsDefault}
                        background="#f0f0f0"
                        foreground="darkblue"
                        suffix="%"
                    />
                </div>

                {/* Compact variant */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkStackedBar
                        title="Compact Variant"
                        total={total}
                        segments={segmentsCompact}
                        background="black"
                        foreground="white"
                        height={7} // Custom height for compact variant
                        suffix="%"
                    />
                </div>

                {/* Custom variant */}
                <div style={{ width: "20rem", marginBottom: "2rem" }}>
                    <SparkStackedBar
                        title="Custom Variant"
                        total={total}
                        segments={segmentsCustom}
                        background="white"
                        height={20}
                        suffix="%"
                    />
                </div>
            </div>
        </>
    );
}
