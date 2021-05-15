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
import AddMetric from "./AddMetric";
import React from "react";
import { render } from "@testing-library/react";
import { debug } from "console";
import { Link } from "react-router-dom";

interface IProps {
  experiment?: Experiment;
}

interface IState {
}

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

export class ExperimentDetails extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2>
              {this.props.experiment?.name}{" "}
              <Link
                to={{
                  pathname: "/addMetric",
                  state: this.props.experiment
                }}
                className="button is-right is-small is-danger is-outlined"
              >
                Add metric
              </Link>
            </h2>
            <h5>{this.props.experiment?.dateCreated?.toUTCString()}</h5>
            <p>{this.props.experiment?.description}</p>

            <div className="columns">
              <div className="column">
                <h5>Treatment</h5>
                {this.props.experiment?.treatmentDescription}
              </div>
              <div className="column">
                <h5>Control</h5>
                {this.props.experiment?.controlDescription}
              </div>
            </div>

            {!!this.props.experiment?.metricsControl &&
              !!this.props.experiment.metricsTreatment && (
                <div className="graph">
                  <XYPlot xType="ordinal" width={850} height={250}>
                    <HorizontalGridLines />
                    <DiscreteColorLegend items={["Treatment", "Control"]} />
                    <LineMarkSeries
                      curve={"curveMonotoneX"}
                      data={transformMetricToGraph(
                        this.props.experiment.metricsTreatment
                      )}
                    />
                    <LineMarkSeries
                      curve={"curveMonotoneX"}
                      data={transformMetricToGraph(
                        this.props.experiment.metricsControl
                      )}
                    />
                    <XAxis />
                    <YAxis />
                  </XYPlot>
                </div>
              )}

            <h5>Insights</h5>
            
        <div className="field">
          {
            this.props.experiment?.recommendations?.map(x => (
            <nav className="panel">
              <p className="panel-heading">{x.explanation}</p>
              <div className="panel-block">
                Average value in Treatment: {x.avgTreatment}
              </div>
              <div className="panel-block">
                Average value in Control: {x.avgControl}
              </div>
              <div className="panel-block">
                p-Value: {x.pValue}
              </div>
            </nav>
          ))}
        </div>
            
          </div>
        </div>
      </div>
    );
  }
}
