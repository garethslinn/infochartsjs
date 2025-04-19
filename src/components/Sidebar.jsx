import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <nav className="sidebar" aria-label="Main navigation">
        <h2>Charts</h2>
        <ul>
            <li><Link to="/charts/arcade">Arcade Chart</Link></li>
            <li><Link to="/charts/benchmark">Benchmark Chart</Link></li>
            <li><Link to="/charts/comparison">Comparison Chart</Link></li>
            <li><Link to="/charts/doughnut">Doughnut Chart</Link></li>
            <li><Link to="/charts/dumbbell">Dumbbell Chart</Link></li>
            <li><Link to="/charts/heatmap">Heat Map</Link></li>
            <li><Link to="/charts/history">History Chart</Link></li>
            <li><Link to="/charts/horizontal-bar">Horizontal Bar</Link></li>
            <li><Link to="/charts/horizontal-list">Horizontal List</Link></li>
            <li><Link to="/charts/in-ten">In Ten</Link></li>
            <li><Link to="/charts/pie">Pie Chart</Link></li>
            <li><Link to="/charts/risk-matrix">Risk Matrix</Link></li>
            <li><Link to="/charts/spark-bar">Spark Bar</Link></li>
            <li><Link to="/charts/spark-horizontal">Spark Horizontal</Link></li>
            <li><Link to="/charts/spark-line">Spark Line</Link></li>
            <li><Link to="/charts/spark-stacked-bar">Spark Stacked Bar</Link></li>
            <li><Link to="/charts/spine-area">Spine Area</Link></li>
            <li><Link to="/charts/stacked-area">Stacked Area</Link></li>
            <li><Link to="/charts/stacked-bar">Stacked Bar</Link></li>
            <li><Link to="/charts/stacked-row">Stacked Row</Link></li>
            <li><Link to="/charts/stacked-venn">Stacked Venn</Link></li>
            <li><Link to="/charts/us-map">US Map</Link></li>
            <li><Link to="/charts/waffle">Waffle Chart</Link></li>
        </ul>
    </nav>
);

export default Sidebar;
