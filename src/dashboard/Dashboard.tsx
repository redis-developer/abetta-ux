import React from "react";
import logo from "./logo.svg";
import './Dashboard.css';

export function Dashboard() {
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
        <div className="card column block">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <div className="card column block">
          <div className="card-content">
            <a className="subtitle is-3 is-spaced" href="/wizard">Create new experiment</a>
          </div>
        </div>

        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>

      </div>
    </div>
  );
}

export default Dashboard;
