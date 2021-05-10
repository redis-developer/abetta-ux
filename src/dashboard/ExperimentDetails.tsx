import { Experiment } from "../contract/Experiment";
import {
  XYPlot,
  XAxis,
  YAxis,
  DiscreteColorLegend,
  HorizontalGridLines,
  LineMarkSeries,
} from "react-vis";
import Metric from "../contract/Metric";
import "./ExperimentDetails.css";

function transformMetricToGraph(metricsTreatment: Metric[] = []): any[] {
  let graphData: any[] = [];
  let dateTimeFormat = Intl.DateTimeFormat("en");
  if (metricsTreatment.length > 0 && metricsTreatment[0] != undefined) {
    metricsTreatment[0].values.forEach((value) => {
      graphData.push({
        x: dateTimeFormat.format(value.date),
        y: value.value,
      });
    });
  }
  return graphData;
}

export function ExperimentDetails(props: any) {
  let experiment: Experiment = props.experiment;
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2>{experiment.name} <button className="button is-right is-small is-danger is-outlined">Add metric</button></h2>
          <h5>{experiment.dateCreated.toUTCString()}</h5>
          <p>{experiment.description}</p>

          <div className="columns">
            <div className="column">
              <h5>Treatment</h5>
              {experiment.treatmentDescription}
            </div>
            <div className="column">
              <h5>Control</h5>
              {experiment.controlDescription}
            </div>
          </div>

          {!!experiment.metricsControl && !!experiment.metricsTreatment && (
            <div className="graph">
              <XYPlot xType="ordinal" width={850} height={250}>
                <HorizontalGridLines />
                <DiscreteColorLegend items={["Treatment", "Control"]} />
                <LineMarkSeries
                  curve={"curveMonotoneX"}
                  data={transformMetricToGraph(experiment.metricsTreatment)}
                />
                <LineMarkSeries
                  curve={"curveMonotoneX"}
                  data={transformMetricToGraph(experiment.metricsControl)}
                />
                <XAxis />
                <YAxis />
              </XYPlot>
            </div>
          )}

          <h5>Insights</h5>
        </div>
      </div>
    </div>
  );
}

export default ExperimentDetails;
