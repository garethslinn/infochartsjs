import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StackedVenn } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function StackedVennDemo() {
    const nestedData = [
        { label: "Largest Set", value: 50, color: "#fca" },
        { label: "Medium Set", value: 30, color: "#deaa87" },
        { label: "Smallest Set", value: 10, color: "#c87137" },
    ];

    return (
        <>
            <div>
                <h2>StackedVenn: Responsive Nested Chart</h2>
                <p>
                    The <strong>StackedVenn</strong> component maintains a square aspect
                    ratio, scaling based on the width of its container. If no width is
                    provided, it defaults to 100%.
                </p>

                <h2>Code Examples</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<StackedVenn
    data={[
        { label: 'Largest Set', value: 50, color: '#fca' },
        { label: 'Medium Set', value: 30, color: '#deaa87' },
        { label: 'Smallest Set', value: 10, color: '#c87137' }
    ]}
    width="300px"
    minRadius={20}
    maxRadius={80}
    background="#f9f9f9"
    foreground="darkblue"
    textSize="1rem"
    colors={['#ff9999', '#99cc99', '#9999ff']}
/>

<StackedVenn
    data={[
        { label: 'Largest Set', value: 50, color: '#fca' },
        { label: 'Medium Set', value: 30, color: '#deaa87' },
        { label: 'Smallest Set', value: 10, color: '#c87137' },
        { label: 'Small', value: 5, color: 'red' }
    ]}
    minRadius={20}
    maxRadius={80}
    background="#f0f0f0"
    foreground="black"
    textSize="0.8rem"
    colors={['#fca', '#deaa87', '#c87137', '#ff6666']}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Example with fixed width */}
                <div style={{ width: "300px" }}>
                    <StackedVenn
                        data={nestedData}
                        width="300px"
                        minRadius={20}
                        maxRadius={80}
                        background="#f1f1f1"
                        foreground="black"
                        textSize="0.5rem"
                        colors={["#fff", "#fff", "#fff"]}
                    />
                </div>

                <StackedVenn
                    data={[
                        { label: "Largest", value: 50, color: "#fca" },
                        { label: "Medium", value: 30, color: "#deaa87" },
                        { label: "Small", value: 10, color: "#c87137" },
                        { label: "Tiny", value: 3, color: "red" },
                    ]}
                    minRadius={10}
                    maxRadius={80}
                    background="black"
                    foreground="white"
                    textSize="0.45rem"
                    colors={["#ffc109", "#4171a0", "#ff7f50", "#32a852"]}
                />
            </div>
        </>
    );
}
