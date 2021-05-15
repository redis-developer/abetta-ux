import { Experiment } from "../contract/Experiment";
import Metric from "../contract/Metric";

export default function getExperiments(): Experiment[] {
  let experiments: Experiment[] = [];
  let weightMetric: Metric = {
    name: "Weight",
    unitValue: "Kilograms",
    metricValues: [
      { dateRecorded: new Date("2020-09-09"), value: 89 },
      { dateRecorded: new Date("2020-09-10"), value: 84 },
      { dateRecorded: new Date("2020-09-11"), value: 85 },
      { dateRecorded: new Date("2020-09-12"), value: 81 },
    ],
    lessIsBetter: true,
  };
  let weightMetricControl: Metric = {
    name: "Weight",
    unitValue: "Kilograms",
    metricValues: [
      { dateRecorded: new Date("2020-09-09"), value: 70 },
      { dateRecorded: new Date("2020-09-10"), value: 77 },
      { dateRecorded: new Date("2020-09-11"), value: 95 },
      { dateRecorded: new Date("2020-09-12"), value: 100 },
    ],
    lessIsBetter: true,
  };

  experiments.push({
    id: "1",
    name: "Losing weight",
    controlDescription: "Be yourself.",
    treatmentDescription: "Don't be yourself",
    dateCreated: new Date(),
    treatmentMetrics: [weightMetric],
    controlMetrics: [weightMetricControl],
    recommendations: [
      {
        controlAverage: 87,
        treatmentAverage: 82,
        pValue: 0.01
      }
    ]
  } as Experiment);
  experiments.push({
    id: "2",
    name: "Getting a life",
    controlDescription: "Be yourself.",
    treatmentDescription: "Don't be yourself",
    dateCreated: new Date(),
  });

  return experiments;
}
