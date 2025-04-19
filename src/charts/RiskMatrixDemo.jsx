import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { RiskRating } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function RiskMatrixDemo() {
    return (
        <>
            <div>
                <h2>Risk Rating Matrix</h2>
                <p>
                    The <strong>Risk Rating Matrix</strong> is an essential tool for
                    visualizing risk levels by cross-referencing likelihood and impact. It
                    is commonly used to evaluate the severity of risks in various
                    scenarios, such as business, project management, or health and safety
                    assessments.
                </p>
                <p>
                    This matrix allows for customizable color schemes and labels,
                    providing flexibility for different risk categories such as low,
                    medium, and high risk. It also ensures accessibility by allowing
                    control over text and background colors for better readability.
                </p>
                <h2>Props</h2>
                <ul>
                    <li>
                        <strong>riskData</strong> (array): The matrix data, where each item
                        represents a row of risk levels (`low`, `medium`, `high`).
                    </li>
                    <li>
                        <strong>likelihoodLabels</strong> (array): Labels for the columns
                        representing likelihoods.
                    </li>
                    <li>
                        <strong>impactLabels</strong> (array): Labels for the rows
                        representing impacts.
                    </li>
                    <li>
                        <strong>background</strong> (string): Background color of the matrix
                        container.
                    </li>
                    <li>
                        <strong>foreground</strong> (string): Color for the axis labels and
                        title text.
                    </li>
                    <li>
                        <strong>labelColor</strong> (array): Array of colors for the text
                        inside risk cells based on risk levels.
                    </li>
                    <li>
                        <strong>colors</strong> (array): Array of background colors for the
                        risk cells based on risk levels (`low`, `medium`, `high`).
                    </li>
                </ul>
                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<RiskRating
riskData={[
  ["low", "low", "low", "medium", "high"],
  ["low", "low", "medium", "high", "high"],
  ["low", "medium", "medium", "high", "high"],
  ["medium", "medium", "high", "high", "high"],
  ["medium", "high", "high", "high", "high"],
]}
likelihoodLabels={[
  "Rare",
  "Unlikely",
  "Possible",
  "Likely",
  "Certain",
]}
impactLabels={[
  "Insignificant",
  "Minor",
  "Moderate",
  "Major",
  "Catastrophic",
]}
background={"#0c263e"}
foreground={"#ffffff"}
labelColor={["#ffffff", "#ffffff", "#ffffff"]}
colors={["#3498db", "#f39c12", "#e74c3c"]}
/>
                    `}
                    </SyntaxHighlighter>
                </div>
                <h2>Example Usage</h2>
                {/* Render the RiskRating */}
                <div style={{ paddingRight: "2rem" }}>
                    <RiskRating
                        riskData={[
                            ["low", "low", "low", "medium", "high"],
                            ["low", "low", "medium", "high", "high"],
                            ["low", "medium", "medium", "high", "high"],
                            ["medium", "medium", "high", "high", "high"],
                            ["medium", "high", "high", "high", "high"],
                        ]}
                        likelihoodLabels={[
                            "Rare",
                            "Unlikely",
                            "Possible",
                            "Likely",
                            "Certain",
                        ]}
                        impactLabels={[
                            "Insignificant",
                            "Minor",
                            "Moderate",
                            "Major",
                            "Catastrophic",
                        ]}
                        background={"#0c263e"}
                        foreground={"#ffffff"}
                        labelColor={["#ffffff", "#ffffff", "#ffffff"]}
                        colors={["#3498db", "#f39c12", "#e74c3c"]}
                    />
                </div>
            </div>
        </>
    );
}
