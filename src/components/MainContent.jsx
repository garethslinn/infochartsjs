import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    ArcadeBarDemo,
    HistoryChartDemo,
    USMapDemo,
    BenchmarkDemo,
    ComparisonDemo,
    DoughnutDemo,
    DumbbellDemo,
    HeatMapDemo,
    HorizontalBarDemo,
    HorizontalListDemo,
    InTenDemo,
    PieDemo,
    RiskMatrixDemo,
    SparkBarDemo,
    SparkHorizontalDemo,
    SparkLineDemo,
    SparkStackedBarDemo,
    SpineAreaDemo,
    StackedAreaDemo,
    StackedBarDemo,
    StackedRowDemo,
    StackedVennDemo,
    WaffleDemo,
} from '../charts';
import "infocharts/styles/infocharts.css";

const MainContent = () => (
    <main className="main" id="main-content" role="main" tabIndex={-1} aria-labelledby="main-heading">
        <Routes>
            <Route path="/" element={
                <section>
                    <h2 id="main-heading">Welcome</h2>
                </section>
            } />

            <Route path="/charts/arcade" element={<ArcadeBarDemo />} />
            <Route path="/charts/benchmark" element={<BenchmarkDemo />} />
            <Route path="/charts/comparison" element={<ComparisonDemo />} />
            <Route path="/charts/doughnut" element={<DoughnutDemo />} />
            <Route path="/charts/dumbbell" element={<DumbbellDemo />} />
            <Route path="/charts/heatmap" element={<HeatMapDemo />} />
            <Route path="/charts/history" element={<HistoryChartDemo />} />
            <Route path="/charts/horizontal-bar" element={<HorizontalBarDemo />} />
            <Route path="/charts/horizontal-list" element={<HorizontalListDemo />} />
            <Route path="/charts/in-ten" element={<InTenDemo />} />
            <Route path="/charts/pie" element={<PieDemo />} />
            <Route path="/charts/risk-matrix" element={<RiskMatrixDemo />} />
            <Route path="/charts/spark-bar" element={<SparkBarDemo />} />
            <Route path="/charts/spark-horizontal" element={<SparkHorizontalDemo />} />
            <Route path="/charts/spark-line" element={<SparkLineDemo />} />
            <Route path="/charts/spark-stacked-bar" element={<SparkStackedBarDemo />} />
            <Route path="/charts/spine-area" element={<SpineAreaDemo />} />
            <Route path="/charts/stacked-area" element={<StackedAreaDemo />} />
            <Route path="/charts/stacked-bar" element={<StackedBarDemo />} />
            <Route path="/charts/stacked-row" element={<StackedRowDemo />} />
            <Route path="/charts/stacked-venn" element={<StackedVennDemo />} />
            <Route path="/charts/us-map" element={<USMapDemo />} />
            <Route path="/charts/waffle" element={<WaffleDemo />} />

            <Route path="*" element={
                <section>
                    <h2 id="main-heading">Page not found</h2>
                </section>
            } />
        </Routes>
    </main>
);

export default MainContent;
