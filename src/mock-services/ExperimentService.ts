export interface Experiment {
    name: string;
    dateCreated: Date;
    description: string;
    isSelected?: boolean;
}
export default function getExperiments(): Experiment[] {
    let experiments: Experiment[] = [];
    experiments.push({ name: "Losing weight", description: "An experiment to lose weight", dateCreated: new Date() })
    experiments.push({ name: "Getting a life", description: "An experiment to get a life", dateCreated: new Date() })
    experiments.push({ name: "Getting a life 232", description: "An experiment to get a life", dateCreated: new Date() })


    return experiments;
}