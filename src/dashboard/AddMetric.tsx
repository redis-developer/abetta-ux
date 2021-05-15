import React from "react";
import { Experiment } from "../contract/Experiment";
import Metric, { MetricValue } from "../contract/Metric";
import { addExperimentMetricValue } from "../services/ExperimentService";

interface IProps {
	experiment?: Experiment;
}

interface IState {
	experiment: Experiment;
	recordedValue: MetricValue;
	isForControl: boolean;
	isActive: boolean;
}

class AddMetric extends React.Component<IProps, IState> {

	constructor(props) {
		super(props);
		this.state = { 
			experiment: {} as Experiment,
			recordedValue: {} as MetricValue,
			isForControl: false,
			isActive: true
		 };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	componentDidMount() {
		this.setState(() => ({
			experiment: (this.props as any).location.state,
		}));
	}

	handleChange(event) {
		let name = (event.target as any).name;
		let value = (event.target as any).value;
		let recordedValue = this.state.recordedValue;
		recordedValue[name] = name == "dateRecorded" ? new Date(value) : value;
		console.log('hi')
		this.setState({
			recordedValue: recordedValue
		});
	}

	async handleSubmit() {
		let submittedExperiment = await addExperimentMetricValue(this.state.experiment.id, this.state.isForControl ? "control" : "treatment", this.state.recordedValue);
		document.location.href="/dashboard";
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
						<input className="input"
							name="dateRecorded"
							type="date"
							value={this.state.recordedValue.dateRecorded?.toISOString().substring(0, 10)}
							onChange={this.handleChange} />
					</div>
				</div>

				<div className="control">
					<label className="radio" onClick={() => this.setMetricTo("Treatment")}>
						<input type="radio"
							name="foobar"
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
						(this.state.isForControl ? this.state.experiment?.controlMetrics : this.state.experiment?.treatmentMetrics)?.map((x) => (
							<nav className="panel">
								<p className="panel-heading">{x.name}</p>

								{/* {x.metricValues.map((metric) => (
									<div className="panel-block">
										{metric.dateRecorded.toLocaleDateString()} - {metric.value.toString()} {x.unitValue}
									</div>
								))} */}
							</nav>
						))}
				</div>

				<div className="field">
					<label className="label">Record Value</label>
					<div className="control">
						<input className="input" name="value" type="number"
							value={this.state.recordedValue.value}
							onChange={this.handleChange} />
					</div>
				</div>

				<div className="field is-grouped">
					<div className="control">
							<button className="button is-warning is-link" onClick={() => this.handleSubmit()} >Add</button>
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
