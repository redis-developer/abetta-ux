import getMetrics from "../mock-services/MetricService";
import Lottie from "react-lottie";
import animationData from "../lottie/track.json";
import React from "react";
import { Experiment } from "../contract/Experiment";
import Metric from "../contract/Metric";
import { createExperiment } from "../services/ExperimentService";

interface IProps { }

interface IState {
	experiment: Experiment;
}
export default class Wizard extends React.Component<IProps, IState> {

	private defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData
	};
	private metrics: Metric[] = getMetrics();

	constructor(props) {
		super(props);
		this.state = { experiment: { experimentMetrics: this.metrics } as Experiment };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleChange(event) {
		let name = (event.target as any).name;
		let value = (event.target as any).value;
		let experiment = this.state.experiment;
		experiment[name] = value;
		this.setState({
			experiment: experiment
		});
	}

	async handleSubmit() {
		let submittedExperiment = await createExperiment(this.state.experiment);
		document.location.href="/dashboard";
	}

	render() {
		return (
			<div className="container">
				<div style={{ float: "left", minHeight: "140px", minWidth: 140 }}>
					<Lottie
						options={this.defaultOptions}
						height={140}
						width={140}
						isClickToPauseDisabled={true}
					/>
				</div>
				<section className="hero is-info">
					<div className="hero-body">
						<p className="title">Creating a new experiment</p>
						<p className="subtitle">
							... is easy, and we will guide you through it!</p>
					</div>
				</section>

				<div className="field">
					<label className="label">Experiment name</label>
					<div className="control">
						<input
							name="name"
							className="input"
							type="text"
							placeholder="Give your experiment a name!"
							value={this.state.experiment.name}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="field">
					<label className="label">Metric</label>
					<div className="select">
						<select>
							{this.metrics.map((metric) => (
								<option>{metric.name}</option>
							))}
						</select>
					</div>
				</div>

				<div className="columns">
					<div className="column">
						<h3 className="is-size-4">Control</h3>
						<div className="field">
							<label className="label">Description</label>
							<div className="control">
								<textarea
									name="controlDescription"
									className="textarea"
									placeholder="What are you experimenting with?"
									value={this.state.experiment.controlDescription}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="column">
						<h3 className="is-size-4">Treatment</h3>
						<div className="field">
							<label className="label">Description</label>
							<div className="control">
								<textarea
									name="treatmentDescription"
									className="textarea"
									placeholder="Put a short description of what your treatment days will be"
									value={this.state.experiment.treatmentDescription}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>{" "}
				</div>

				<div className="field is-grouped">
					<div className="control">
							<button className="button is-link" onClick={() => this.handleSubmit()} >Create</button>
					</div>
					<div className="control">
						<a href="/dashboard">
							<button className="button is-link is-light">Cancel</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}