import { Experiment } from "../mock-services/ExperimentService";

export function ExperimentDetails(props: any) {
    let experiment: Experiment = props.experiment;
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
        <h2>{experiment.name}</h2>
        <h5>{experiment.dateCreated.toUTCString()}</h5>
          <p>{experiment.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperimentDetails;
