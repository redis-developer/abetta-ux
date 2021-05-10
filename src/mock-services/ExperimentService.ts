import { Experiment } from "../contract/Experiment";
import Metric from "../contract/Metric";

export default function getExperiments(): Experiment[] {
  let experiments: Experiment[] = [];
  let weightMetric: Metric = {
    name: "Weight",
    unitValue: "Kilograms",
    values: [
      { date: new Date("2020-09-09"), value: 89 },
      { date: new Date("2020-09-10"), value: 84 },
      { date: new Date("2020-09-11"), value: 85 },
      { date: new Date("2020-09-12"), value: 81 },
    ],
    lessIsBetter: true,
  };
  let weightMetricControl: Metric = {
    name: "Weight",
    unitValue: "Kilograms",
    values: [
      { date: new Date("2020-09-09"), value: 70 },
      { date: new Date("2020-09-10"), value: 77 },
      { date: new Date("2020-09-11"), value: 95 },
      { date: new Date("2020-09-12"), value: 100 },
    ],
    lessIsBetter: true,
  };

  experiments.push({
    id: "1",
    name: "Losing weight",
    description: "An experiment to lose weight",
    controlDescription: "Be yourself.",
    treatmentDescription: "Don't be yourself",
    dateCreated: new Date(),
    metricsTreatment: [weightMetric],
    metricsControl: [weightMetricControl]
  });
  experiments.push({
    id: "2",
    name: "Getting a life",
    description: "An experiment to get a life",
    controlDescription: "Be yourself.",
    treatmentDescription: "Don't be yourself",
    dateCreated: new Date(),
  });

  return experiments;
}
