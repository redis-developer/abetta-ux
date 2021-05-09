import React from "react";
import logo from "./logo.svg";
import "./Dashboard.css";
import getExperiments from "../mock-services/ExperimentService";

export function Dashboard() {
  let experiments = getExperiments();

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

      <div className="block columns">
        {experiments.map((exp) => (
          <div className="card column block">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{exp.name}</p>
                </div>
              </div>

              <div className="content">
                {exp.description}
                <br />
                <time>{exp.dateCreated.toUTCString()}</time>
              </div>
            </div>
          </div>
        ))}

        <div className="card column block">
          <div className="card-content">
            <a className="subtitle is-3 is-spaced" href="/wizard">
              Create new experiment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
