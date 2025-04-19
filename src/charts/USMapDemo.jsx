import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { USMap } from "infocharts";

import "infocharts/styles/infocharts.css";

export default function USMapDemo() {

    const colour_high = "#0477BF";
    const colour_medium = "#04B2D9";
    const colour_low = "#6DDAF2";

    const handleTooltip = (item) => {
        console.log(item);
    };

    const stateData = {
        AL: { fill: colour_medium, label: "AL", stat: "47.32" },
        AK: { fill: colour_low, label: "AK", stat: "12.57" },
        AZ: { fill: colour_medium, label: "AZ", stat: "35.62" },
        AR: { fill: colour_low, label: "AR", stat: "26.14" },
        CA: { fill: colour_high, label: "CA", stat: "58.91" },
        CO: { fill: colour_medium, label: "CO", stat: "41.23" },
        CT: { fill: colour_medium, label: "CT", stat: "39.45" },
        DE: { fill: colour_low, label: "DE", stat: "28.11" },
        FL: { fill: colour_high, label: "FL", stat: "52.76" },
        GA: { fill: colour_medium, label: "GA", stat: "44.67" },
        HI: { fill: colour_medium, label: "HI", stat: "31.89" },
        ID: { fill: colour_low, label: "ID", stat: "23.54" },
        IL: { fill: colour_high, label: "IL", stat: "49.85" },
        IN: { fill: colour_medium, label: "IN", stat: "37.12" },
        IA: { fill: colour_low, label: "IA", stat: "29.74" },
        KS: { fill: colour_medium, label: "KS", stat: "34.29" },
        KY: { fill: colour_medium, label: "KY", stat: "40.58" },
        LA: { fill: colour_low, label: "LA", stat: "22.34" },
        ME: { fill: colour_low, label: "ME", stat: "18.93" },
        MD: { fill: colour_high, label: "MD", stat: "46.78" },
        MA: { fill: colour_high, label: "MA", stat: "50.24" },
        MI: { fill: colour_medium, label: "MI", stat: "42.16" },
        MN: { fill: colour_medium, label: "MN", stat: "39.84" },
        MS: { fill: colour_low, label: "MS", stat: "25.67" },
        MO: { fill: colour_medium, label: "MO", stat: "33.45" },
        MT: { fill: colour_low, label: "MT", stat: "21.54" },
        NE: { fill: colour_medium, label: "NE", stat: "30.75" },
        NV: { fill: colour_high, label: "NV", stat: "47.29" },
        NH: { fill: colour_medium, label: "NH", stat: "36.41" },
        NJ: { fill: colour_high, label: "NJ", stat: "51.18" },
        NM: { fill: colour_low, label: "NM", stat: "28.67" },
        NY: { fill: colour_high, label: "NY", stat: "53.21" },
        NC: { fill: colour_medium, label: "NC", stat: "43.89" },
        ND: { fill: colour_low, label: "ND", stat: "17.65" },
        OH: { fill: colour_high, label: "OH", stat: "45.92" },
        OK: { fill: colour_medium, label: "OK", stat: "32.58" },
        OR: { fill: colour_medium, label: "OR", stat: "38.67" },
        PA: { fill: colour_high, label: "PA", stat: "49.24" },
        RI: { fill: colour_low, label: "RI", stat: "29.83" },
        SC: { fill: colour_medium, label: "SC", stat: "37.45" },
        SD: { fill: colour_low, label: "SD", stat: "22.94" },
        TN: { fill: colour_medium, label: "TN", stat: "40.17" },
        TX: { fill: colour_high, label: "TX", stat: "53.89" },
        UT: { fill: colour_medium, label: "UT", stat: "31.72" },
        VT: { fill: colour_low, label: "VT", stat: "19.54" },
        VA: { fill: colour_medium, label: "VA", stat: "44.36" },
        WA: { fill: colour_high, label: "WA", stat: "50.98" },
        WV: { fill: colour_low, label: "WV", stat: "23.76" },
        WI: { fill: colour_medium, label: "WI", stat: "38.45" },
        WY: { fill: colour_low, label: "WY", stat: "16.78" },
    };

    return (
        <>
            <div>
                <h2>USMap: Interactive State Visualisation</h2>
                <p>
                    The <strong>USMap</strong> component displays a map of the United
                    States, where each state can be styled and interacted with based on
                    the provided data.
                </p>

                <h3>Code Examples</h3>
                <div className="pre-wrapper">
                    <SyntaxHighlighter language="tsx" style={materialDark}>
                        {`

const colour_high = '#87CEEB';
const colour_medium = '#4682B4';
const colour_low = '#D32F2F';

// Option callback function if you wish to use a tooltip ect
// Typical returned object 
// {
//     fill: "#0477BF"
//     label: "NV"
//     stat: "47.29"
//     x: 280
//     y: 104
// }

const handleTooltip = (item:) => {
    console.log(item);
};

<USMap
    regionData={{
        AL: { fill: colour_medium, label: 'AL', stat: '47.32' }, 
        AK: { fill: colour_low, label: 'AK', stat: '12.57' }, 
        AZ: { fill: colour_medium, label: 'AZ', stat: '35.62' }, 
        AR: { fill: colour_low, label: 'AR', stat: '26.14' }, 
        CA: { fill: colour_high, label: 'CA', stat: '58.91' }, 
        CO: { fill: colour_medium, label: 'CO', stat: '41.23' }, 
        CT: { fill: colour_medium, label: 'CT', stat: '39.45' }, 
        DE: { fill: colour_low, label: 'DE', stat: '28.11' }, 
        FL: { fill: colour_high, label: 'FL', stat: '52.76' }, 
        GA: { fill: colour_medium, label: 'GA', stat: '44.67' }, 
        HI: { fill: colour_medium, label: 'HI', stat: '31.89' }, 
        ID: { fill: colour_low, label: 'ID', stat: '23.54' }, 
        IL: { fill: colour_high, label: 'IL', stat: '49.85' }, 
        IN: { fill: colour_medium, label: 'IN', stat: '37.12' }, 
        IA: { fill: colour_low, label: 'IA', stat: '29.74' }, 
        KS: { fill: colour_medium, label: 'KS', stat: '34.29' }, 
        KY: { fill: colour_medium, label: 'KY', stat: '40.58' }, 
        LA: { fill: colour_low, label: 'LA', stat: '22.34' }, 
        ME: { fill: colour_low, label: 'ME', stat: '18.93' }, 
        MD: { fill: colour_high, label: 'MD', stat: '46.78' }, 
        MA: { fill: colour_high, label: 'MA', stat: '50.24' }, 
        MI: { fill: colour_medium, label: 'MI', stat: '42.16' }, 
        MN: { fill: colour_medium, label: 'MN', stat: '39.84' }, 
        MS: { fill: colour_low, label: 'MS', stat: '25.67' }, 
        MO: { fill: colour_medium, label: 'MO', stat: '33.45' }, 
        MT: { fill: colour_low, label: 'MT', stat: '21.54' }, 
        NE: { fill: colour_medium, label: 'NE', stat: '30.75' }, 
        NV: { fill: colour_high, label: 'NV', stat: '47.29' }, 
        NH: { fill: colour_medium, label: 'NH', stat: '36.41' }, 
        NJ: { fill: colour_high, label: 'NJ', stat: '51.18' }, 
        NM: { fill: colour_low, label: 'NM', stat: '28.67' }, 
        NY: { fill: colour_high, label: 'NY', stat: '53.21' }, 
        NC: { fill: colour_medium, label: 'NC', stat: '43.89' }, 
        ND: { fill: colour_low, label: 'ND', stat: '17.65' }, 
        OH: { fill: colour_high, label: 'OH', stat: '45.92' }, 
        OK: { fill: colour_medium, label: 'OK', stat: '32.58' }, 
        OR: { fill: colour_medium, label: 'OR', stat: '38.67' }, 
        PA: { fill: colour_high, label: 'PA', stat: '49.24' }, 
        RI: { fill: colour_low, label: 'RI', stat: '29.83' }, 
        SC: { fill: colour_medium, label: 'SC', stat: '37.45' }, 
        SD: { fill: colour_low, label: 'SD', stat: '22.94' }, 
        TN: { fill: colour_medium, label: 'TN', stat: '40.17' }, 
        TX: { fill: colour_high, label: 'TX', stat: '53.89' }, 
        UT: { fill: colour_medium, label: 'UT', stat: '31.72' }, 
        VT: { fill: colour_low, label: 'VT', stat: '19.54' }, 
        VA: { fill: colour_medium, label: 'VA', stat: '44.36' }, 
        WA: { fill: colour_high, label: 'WA', stat: '50.98' }, 
        WV: { fill: colour_low, label: 'WV', stat: '23.76' }, 
        WI: { fill: colour_medium, label: 'WI', stat: '38.45' }, 
        WY: { fill: colour_low, label: 'WY', stat: '16.78' } 
    }}
    title="Population by state"
    summary="Marked by low, medium and high levels"
    showLegend={true}
    legend={{
        low: colour_low,
        medium: colour_medium,
        high: colour_high,
    }}
    width="100%"
    height="100%"
    background="darkblue"
    titleSize="2rem"
    summarySize="1.2rem"
    legendSize="1rem"
    iconSize="2rem"
    strokeColor="#fff"
    textColor="#fff"
    strokeWidth="1.8"
    nameColor="#fff"
    fnc={handleTooltip}
/>`}
                    </SyntaxHighlighter>
                </div>

                <h2>Example Usage</h2>

                {/* Example with fixed dimensions */}
                <div>
                    <USMap
                        regionData={stateData}
                        title="Population by state"
                        summary="Marked by low, medium and high levels"
                        showLegend={true}
                        legend={{
                            low: colour_low,
                            medium: colour_medium,
                            high: colour_high,
                        }}
                        width="100%"
                        height="100%"
                        background="darkblue"
                        titleSize="2rem"
                        summarySize="1.2rem"
                        legendSize="1rem"
                        iconSize="2rem"
                        strokeColor="darkBlue"
                        textColor="#fff"
                        strokeWidth="1.8"
                        nameColor="#fff"
                        fnc={handleTooltip}
                    />
                </div>
            </div>
        </>
    );
}
