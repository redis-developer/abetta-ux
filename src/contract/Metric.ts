export interface MetricValue {dateRecorded: Date, value: number}

export default interface Metric {
    name: string;
    unitValue: string;
    metricValues: MetricValue[];
    lessIsBetter?: boolean;
}