import "./Dashboard.css";
import { default as getExperiments } from "../mock-services/ExperimentService";
import { ExperimentDetails } from "./ExperimentDetails";
import React from "react";
import { Experiment } from "../contract/Experiment";
import Lottie from "react-lottie";
import animationData from "../lottie/hosting.json";
import { Link } from "react-router-dom";

interface IProps {}

interface IState {
  experiment?: Experiment;
}

class Dashboard extends React.Component<IProps, IState> {
  _experiments = getExperiments();

  constructor(props: IProps) {
    super(props);
    this.state = { experiment: this._experiments[0] };
  }

  selectExperiment(index: number): void {
    this._experiments
      .filter((x) => x.isSelected)
      .forEach((x) => (x.isSelected = false));
    this._experiments[index].isSelected = true;
    this.setState({
      experiment: this._experiments[index],
    });
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };
    return (
      <div className="container block">
        <div style={{ float: "left", minHeight: "120px", minWidth: 120 }}>
          <Lottie
            options={defaultOptions}
            height={120}
            width={120}
            isClickToPauseDisabled={true}
          />
        </div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Welcome, you crazy scientist!</p>
            <p className="subtitle">
              Here's an overview of all of your current experiments.
            </p>
          </div>
        </section>

        <div>
        <h1 className="is-size-3">
          Experiments 
          <Link
            to={{
              pathname: "/wizard",
              state: this.state,
            }}
            className="button is-right is-outlined"
            style={{marginLeft: 20}}
          >
            Create new experiment
          </Link>
          </h1>
        </div>
        <br></br>

        <div className="block is-mobile">
          <div className="columns">
            <div className="column is-one-quarter">
              
              {this._experiments.map((exp, index) => (
                <div
                  className={`card column block ${
                    exp.isSelected ? "is-selected" : ""
                  }`}
                  onClick={() => this.selectExperiment(index)}
                >
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{exp.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="column">
              <ExperimentDetails experiment={this.state.experiment} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
