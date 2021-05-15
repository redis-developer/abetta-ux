import { Experiment } from "../contract/Experiment";
import axios from 'axios';
import { MetricValue } from "../contract/Metric";

let inMemoryExperiments: Experiment[] = [];

export function getInMemoryExperiments(): Experiment[] { return inMemoryExperiments };

export async function getExperiments(): Promise<Experiment[]> {
	let experiments = await axios.get("http://localhost:8080/abetta-xp/v1/experiments", {
		headers: {
			userId: "116318025302562319906"
		}
	});

	return experiments.data as Promise<Experiment[]>;
}

export async function createExperiment(experiment: Experiment): Promise<Experiment> {
	let experiments = await axios.post("http://localhost:8080/abetta-xp/v1/experiments", experiment, {
		headers: {
			userId: "116318025302562319906"
		}
	});

	return experiments.data as Promise<Experiment>;
}

export async function addExperimentMetricValue(experimentId: string, target: "control"|"treatment", metricValue: MetricValue): Promise<Experiment> {
	let recordValue = {
		dateRecorded: Date.parse(metricValue.dateRecorded?.toISOString()).toString().substring(0, 10),
		value: +metricValue.value
	}
	let experiments = await axios.post("http://localhost:8080/abetta-xp/v1/experiments/"+experimentId+"/"+target+"-metrics/weight/records", recordValue, {
		headers: {
			userId: "116318025302562319906"
		}
	});

	return experiments.data as Promise<Experiment>;
}

//   export function createExperiment(experiment: Experiment): void {
// 	axios.defaults.withCredentials = true;

// 	// const instance = axios.create({
// 	// 	withCredentials: true
// 	// })

// 	// let experiments = await instance.post("http://localhost:8080/abetta-xp/v1/experiments", experiment, {
// 	//   withCredentials: true
// 	// });

// 	// return experiments.data as Promise<Experiment>;
// 	inMemoryExperiments.push(experiment);
//   }