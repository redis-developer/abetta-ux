export default interface Metric {
    name: string;
    unitValue: string;
    values: {date: Date, value: number}[];
    lessIsBetter?: boolean;
}