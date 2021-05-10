import Metric from "./Metric";

export interface Experiment {
    id: string;
    name: string;
    dateCreated: Date;
    description: string;
    controlDescription?: string;
    treatmentDescription?: string;
    dateCompleted?: Date;
    status?: Status,
    isSelected?: boolean;
    metricsControl?: Metric[];
    metricsTreatment?: Metric[];
}

export enum Status {
    NOT_STARTED = 0,
    ACTIVE = 1,
    COMPLETED = 2
}