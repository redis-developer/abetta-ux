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
  experiment?: Experiment;
  isActive: boolean;
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
    this.state = { experiment: props.experiment ?? {
      id: "",
      name: "",
      description: "",
      dateCreated: new Date()
    }, isActive: false };
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2>
              {this.state.experiment?.name}{" "}
              <Link
                to={{
                  pathname: "/addMetric",
                  state: this.state
                }}
                className="button is-right is-small is-danger is-outlined"
              >
                Add metric
              </Link>
            </h2>
            <h5>{this.state.experiment?.dateCreated.toUTCString()}</h5>
            <p>{this.state.experiment?.description}</p>

            <div className="columns">
              <div className="column">
                <h5>Treatment</h5>
                {this.state.experiment?.treatmentDescription}
              </div>
              <div className="column">
                <h5>Control</h5>
                {this.state.experiment?.controlDescription}
              </div>
            </div>

            {!!this.state.experiment?.metricsControl &&
              !!this.state.experiment.metricsTreatment && (
                <div className="graph">
                  <XYPlot xType="ordinal" width={850} height={250}>
                    <HorizontalGridLines />
                    <DiscreteColorLegend items={["Treatment", "Control"]} />
                    <LineMarkSeries
                      curve={"curveMonotoneX"}
                      data={transformMetricToGraph(
                        this.state.experiment.metricsTreatment
                      )}
                    />
                    <LineMarkSeries
                      curve={"curveMonotoneX"}
                      data={transformMetricToGraph(
                        this.state.experiment.metricsControl
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
            this.state.experiment?.recommendations?.map(x => (
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
