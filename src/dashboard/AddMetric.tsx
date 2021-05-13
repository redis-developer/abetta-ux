import React from "react";
import { Experiment } from "../contract/Experiment";

interface IProps {
  experiment?: Experiment;
}

interface IState {
  experiment?: Experiment;
  isForControl: boolean;
  isActive: boolean;
}

class AddMetric extends React.Component<IProps, IState> {
  state: IState = {
    experiment: undefined,
    isForControl: false,
    isActive: false
  };

  componentDidMount() {
    this.setState(() => ({
      experiment: (this.props as any).location.state.experiment,
    }));
  }

  setMetricTo(destination: "Treatment" | "Control"): void {
    this.setState(() => ({
      experiment: this.state.experiment,
      isForControl: destination == "Control",
      isActive: this.state.isActive
    }))
  }

  render() {
    return (
      <div className="container">
        <section className="hero is-warning">
          <div className="hero-body">
            <p className="title">Logging a metric for</p>
            <p className="subtitle">{this.state.experiment?.name}</p>
          </div>
        </section>

        <div className="field">
          <label className="label">Record Date</label>
          <div className="control">
            <input className="input" type="date" />
          </div>
        </div>

        <div className="control">
          <label className="radio" onClick={() => this.setMetricTo("Treatment")}>
            <input type="radio" name="foobar" 
                  checked={!this.state.isForControl} />
            Treatment
          </label>
          <label className="radio" onClick={() => this.setMetricTo("Control")}>
            <input type="radio" name="foobar" checked={this.state.isForControl} />
            Control
          </label>
        </div>

        <div className="field">
          <label className="label">Metric</label>
          {
            (this.state.isForControl ? this.state.experiment?.metricsControl : this.state.experiment?.metricsTreatment)?.map((x) => (
            <nav className="panel">
              <p className="panel-heading">{x.name}</p>

              {x.values.map((metric) => (
                <div className="panel-block">
                  {metric.date.toLocaleDateString()} - {metric.value.toString()} {x.unitValue}
                </div>
              ))}
            </nav>
          ))}
        </div>

        <div className="field">
          <label className="label">Record Value</label>
          <div className="control">
            <input className="input" type="number" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <a href="/dashboard">
              <button className="button is-warning is-link">Add</button>
            </a>
          </div>
          <div className="control">
            <a href="/dashboard">
              <button className="button is-warning is-link is-light">
                Cancel
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMetric;
