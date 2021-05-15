import { Experiment } from "../contract/Experiment";
import axios from 'axios';

export default async function getExperiments(): Promise<Experiment[]> {
  let experiments = await axios.get("http://localhost:8080/abetta-xp/v1/experiments", {
	withCredentials: true
  });
  return experiments.data as Promise<Experiment[]>;
}
