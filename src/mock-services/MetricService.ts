import Metric from "../contract/Metric";

export default function getMetrics(): Metric[] {
    let metrics: Metric[] = [];

    metrics.push({
        name: "Weight",
        unitValue: "Kilograms",
        values: [],
        lessIsBetter: true
    });

    metrics.push({
        name: "Mood",
        unitValue: "Stars",
        values: [],
        lessIsBetter: false
    });

    return metrics;
}