import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BenchmarkChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function BenchmarkDemo() {
    return (
        <>
            <div>
                <h2>Benchmark Chart</h2>
                <p>
                    The <strong>Benchmark Chart</strong> is used to compare actual
                    performance against predefined benchmarks or targets. This component
                    provides a clear visualization of whether actual values meet, exceed,
                    or fall short of the benchmark, allowing for easy analysis of progress
                    and performance.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>data</strong> (array): An array of objects where each object
                        represents a category, containing `label`, `actual`, and `benchmark`
                        fields.
                    </li>
                    <li>
                        <strong>title</strong> (string): Title of the chart.
                    </li>
                    <li>
                        <strong>background</strong> (string): Background color of the chart.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): Foreground color, usually for
                        text or lines.
                    </li>
                    <li>
                        <strong>barColor</strong> (string): Color of the actual performance
                        bars.
                    </li>
                    <li>
                        <strong>targetColor</strong> (string): Color of the benchmark/target
                        lines.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<BenchmarkChart
    data={[
        { label: 'Category 1', actual: 70, benchmark: 80 },
        { label: 'Category 2', actual: 50, benchmark: 60 },
        { label: 'Category 3', actual: 90, benchmark: 85 },
    ]}
    title="Performance vs Target"
    background="darkblue"
    foreground="#fff"
    barColor="#4682b4"
    targetColor="#ffc109"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the BenchmarkChart */}
                <div style={{ paddingRight: "2rem" }}>
                    <BenchmarkChart
                        data={[
                            { label: "Category 1", actual: 70, benchmark: 80 },
                            { label: "Category 2", actual: 50, benchmark: 60 },
                            { label: "Category 3", actual: 90, benchmark: 85 },
                        ]}
                        title="Performance vs Target"
                        background="darkblue"
                        foreground="#fff"
                        barColor="#4682b4"
                        targetColor="#ffc109"
                    />
                </div>
            </div>
        </>
    );
}
