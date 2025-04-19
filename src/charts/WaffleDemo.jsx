import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { WaffleChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function WaffleDemo() {
    return (
        <>
            <div>
                <h2>Waffle Chart</h2>
                <p>
                    The <strong>Waffle Chart</strong> is a grid-based visualization that
                    uses icons or shapes to represent percentages. It’s a visual way to
                    show proportions, often used in infographics and data visualization.
                </p>
                <p>
                    This component supports customization of colors, icons, and
                    percentages, providing a versatile and simple approach to displaying
                    data distributions.
                </p>

                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>title</strong> (string): The title of the waffle chart.
                    </li>
                    <li>
                        <strong>percentage</strong> (number): The percentage to be
                        displayed.
                    </li>
                    <li>
                        <strong>background</strong> (string): The background color of the
                        chart container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): The text color used for the
                        title and description.
                    </li>
                    <li>
                        <strong>description</strong> (string): A brief description shown
                        below the title.
                    </li>
                    <li>
                        <strong>activeColor</strong> (string): The color of the active
                        (filled) icons in the chart.
                    </li>
                    <li>
                        <strong>nonActiveColor</strong> (string): The color of the inactive
                        icons in the chart.
                    </li>
                </ul>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<WaffleChart
  title="Waffle Chart Example"
  percentage={75}
  background="darkblue"
  foreground="#fff"
  description="This waffle chart shows a 75% completion rate."
  activeColor="#ffc109"
  nonActiveColor="lightblue"
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Render the WaffleChart */}
                <WaffleChart
                    title="Waffle Chart Example"
                    percentage={75}
                    background="darkblue"
                    foreground="#fff"
                    description="This waffle chart shows a 75% completion rate."
                    activeColor="#ffc109"
                    nonActiveColor="lightblue"
                />
            </div>
        </>
    );
}
