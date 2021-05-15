import Metric from "../contract/Metric";

export default function getMetrics(): Metric[] {
    let metrics: Metric[] = [];

    metrics.push({
        name: "weight",
        unitValue: "kilograms",
        metricValues: [],
        lessIsBetter: true
    });

    return metrics;
}