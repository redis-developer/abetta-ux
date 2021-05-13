import Metric from "./Metric";
import Recommendation from "./Recommendation";

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
    recommendations?: Recommendation[];
}

export enum Status {
    NOT_STARTED = 0,
    ACTIVE = 1,
    COMPLETED = 2
}