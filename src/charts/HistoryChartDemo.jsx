import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HistoryChart } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function HistoryChartDemo() {
    return (
        <>
            <div>
                <h2>HistoryChart</h2>
                <p>
                    The <strong>HistoryLine</strong> component creates a customizable
                    horizontal timeline with markers for key events, each with a title and
                    description. It supports custom colors, marker shapes, and flexible
                    spacing.
                </p>

                <h2>Code Example</h2>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`
<HistoryChart
  title="History Timeline"
  data={[
      { title: '2003', description: 'The year we launched our first product', color: '#cc5200' },
      { title: '2004', description: 'Expansion into new markets', color: '#0000cc' },
      { title: '2005', description: 'Acquired by a larger company', color: '#cc0026' },
      { title: '2006', description: 'Launched second product line', color: '#00cccc' },
      { title: '2007', description: 'Entered international markets', color: '#cc9900' },
      { title: '2008', description: 'Established major partnerships', color: '#660066' },
      { title: '2009', description: 'Achieved record-breaking sales', color: '#cc5200' },
  ]}
/>


<HistoryChart
  title="History Timeline 1"
  titleSize={6}
  labelSize={1.9}
  defaultColor="darkBlue"
  labelColor="yellow"
  background="#000"
  foreground="#fff"
  timelineColor='red'
  spacing={40}
  lineHeight={1.6}
  data={[
      { title: '2003', description: 'The year we launched our first product', color: '#cc5200' },
      { title: '2004', description: 'Expansion into new markets', color: '#0000cc' },
      { title: '2005', description: 'Acquired by a larger company', color: '#cc0026' },
      { title: '2006', description: 'Launched second product line', color: '#00cccc' },
      { title: '2007', description: 'Entered international markets', color: '#cc9900' },
      { title: '2008', description: 'Established major partnerships', color: '#660066' },
      { title: '2009', description: 'Achieved record-breaking sales', color: '#cc5200' },
  ]}
/>


<HistoryChart
  title="History Timeline"
  defaultColor="darkBlue"
  data={[
    {
      title: "2003",
      description: "The year we launched our first product",
    },
    {
      title: "2004",
      description: "Expansion into new markets",
    },
    {
      title: "2005",
      description: "Acquired by a larger company",
    },
    {
      title: "2006",
      description: "Launched second product line",
    },
    {
      title: "2007",
      description: "Entered international markets",
    },
    {
      title: "2008",
      description: "Established major partnerships",
    },
    {
      title: "2009",
      description: "Achieved record-breaking sales",
    },
  ]}
/>
                    `}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>
                <div>
                    <HistoryChart
                        title="History Timeline"
                        // titleSize={6}
                        // labelSize={1.9}
                        // defaultColor="darkBlue"
                        // labelColor="yellow"
                        // background="#000"
                        // foreground="#fff"
                        // timelineColor='red'
                        // spacing={40}
                        // lineHeight={1.6}
                        // descriptionWidth={30}
                        // descriptionOffset={14}
                        data={[
                            {
                                title: "2003",
                                description: "The year we launched our first product",
                                color: "#cc5200",
                            },
                            {
                                title: "2004",
                                description: "Expansion into new markets",
                                color: "#0000cc",
                            },
                            {
                                title: "2005",
                                description: "Acquired by a larger company",
                                color: "#cc0026",
                            },
                            {
                                title: "2006",
                                description: "Launched second product line",
                                color: "#00cccc",
                            },
                            {
                                title: "2007",
                                description: "Entered international markets",
                                color: "#cc9900",
                            },
                            {
                                title: "2008",
                                description: "Established major partnerships",
                                color: "#660066",
                            },
                            {
                                title: "2009",
                                description: "Achieved record-breaking sales",
                                color: "#cc5200",
                            },
                        ]}
                    />
                </div>
                <div>
                    <HistoryChart
                        title="This Timeline"
                        titleSize={6}
                        labelSize={1.7}
                        labelColor="yellow"
                        background="#000"
                        foreground="#fff"
                        timelineColor="red"
                        spacing={26}
                        lineHeight={1.4}
                        // descriptionWidth={30}
                        // descriptionOffset={14}
                        data={[
                            {
                                title: "1800",
                                description:
                                    "Industrial Revolution marks a major turning point in history.",
                                color: "#2f4b7c",
                            },
                            {
                                title: "1879",
                                description:
                                    "Thomas Edison invents the lightbulb, revolutionizing electricity.",
                                color: "#445a8d",
                            },
                            {
                                title: "1903",
                                description:
                                    "The Wright Brothers achieve the first powered flight.",
                                color: "#596a9e",
                            },
                            {
                                title: "1945",
                                description:
                                    "End of World War II, ushering in a new world order.",
                                color: "#6e79af",
                            },
                            {
                                title: "1969",
                                description:
                                    "Neil Armstrong walks on the moon, a landmark achievement in space exploration.",
                                color: "#8378bf",
                            },
                            {
                                title: "1989",
                                description:
                                    "The fall of the Berlin Wall, symbolizing the end of the Cold War.",
                                color: "#a16ac8",
                            },
                            {
                                title: "2007",
                                description:
                                    "The launch of the iPhone, transforming mobile technology.",
                                color: "#b85996",
                            },
                            {
                                title: "2023",
                                description:
                                    "AI becomes a mainstream technology, impacting industries worldwide.",
                                color: "#d45087",
                            },
                        ]}
                    />
                </div>

                <div>
                    <HistoryChart
                        title="History Timeline"
                        defaultColor="darkBlue"
                        timelineColor="green"
                        data={[
                            {
                                title: "2003",
                                description: "The year we launched our first product",
                            },
                            {
                                title: "2004",
                                description: "Expansion into new markets",
                            },
                            {
                                title: "2005",
                                description: "Acquired by a larger company",
                            },
                            {
                                title: "2006",
                                description: "Launched second product line",
                            },
                            {
                                title: "2007",
                                description: "Entered international markets",
                            },
                            {
                                title: "2008",
                                description: "Established major partnerships",
                            },
                            {
                                title: "2009",
                                description: "Achieved record-breaking sales",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
