import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { InTen } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function InTenDemo() {
    return (
        <>
            <div>
                <h2>InTen: Dynamic Responsive percentage person guage</h2>
                <p>
                    The <strong>InTen</strong> component renders a responsive SVG
                    visualisation where the width of a colored bar is controlled by the
                    `value` prop, representing a percentage.
                </p>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
// fixed width
<InTen
    width="300px"
    foreground="lightblue"
    background="darkblue"
    value={15}
/>

// responsive
<InTen 
    value={45}
/>

// responsive with type 2 (type 1 is default)
<InTen 
    value={45}
    type={2}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>
                <div>
                    <InTen
                        width="300px"
                        foreground="lightblue"
                        background="darkblue"
                        value={15}
                    />
                </div>

                <div>
                    <InTen value={66} />
                </div>

                <div>
                    <InTen value={45} type={2} />
                </div>
            </div>
        </>
    );
}
