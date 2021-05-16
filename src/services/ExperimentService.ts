import { Experiment } from "../contract/Experiment";
import axios from 'axios';
import { MetricValue } from "../contract/Metric";

let inMemoryExperiments: Experiment[] = [];

export function getInMemoryExperiments(): Experiment[] { return inMemoryExperiments };
export function getHost(): string { return window.location.hostname.includes("localhost") ? "http://localhost:8080" : "https://abetta-gw.herokuapp.com" }

export async function getExperiments(): Promise<Experiment[]> {
	let experiments = await axios.get(getHost()+"/abetta-xp/v1/experiments", {
		headers: {
			userId: "116318025302562319906"
		}
	});

	return experiments.data as Promise<Experiment[]>;
}

export async function createExperiment(experiment: Experiment): Promise<Experiment> {
	let experiments = await axios.post(getHost()+"/abetta-xp/v1/experiments", experiment, {
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
	let experiments = await axios.post(getHost()+"/abetta-xp/v1/experiments/"+experimentId+"/"+target+"-metrics/weight/records", recordValue, {
		headers: {
			userId: "116318025302562319906"
		}
	});

	return experiments.data as Promise<Experiment>;
}
