import "./Dashboard.css";
import {default as getExperiments, Experiment} from "../mock-services/ExperimentService";
import ExperimentDetails from "./ExperimentDetails";
import React from "react";

interface IProps {
}

interface IState {
  experiment?: Experiment;
}

class Dashboard extends React.Component<IProps, IState> {

  _experiments = getExperiments();

  constructor(props: IProps) {
    super(props);
    this.state = {experiment: this._experiments[0]};
  }

  selectExperiment(index: number): void {
    this._experiments.filter(x => x.isSelected).forEach(x => x.isSelected = false);
    this._experiments[index].isSelected = true;
    this.setState({
      experiment: this._experiments[index]
    });
  }

  render() {
    return (
      <div className="container block">
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Welcome, you crazy scientist!</p>
            <p className="subtitle">
              Here's an overview of all of your current experiments.
            </p>
          </div>
        </section>
  
        <h1 className="is-size-3">Experiments</h1>
        <br></br>
  
        <div className="block is-mobile">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="card primary column block">
                <div className="card-content">
                  <a className="subtitle is-5 is-spaced" href="/wizard">
                    Create new experiment
                  </a>
                </div>
              </div>
              {this._experiments.map((exp, index) => (
                <div className={`card column block ${exp.isSelected? "is-selected" : ""}`} onClick={() => this.selectExperiment(index)}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{exp.name}</p>
                      </div>
                    </div>
  
                    {/* <div className="content">
                      {exp.description}
                      <br />
                      <time>{exp.dateCreated.toUTCString()}</time>
                    </div> */}
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
