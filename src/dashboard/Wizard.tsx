export function Wizard() {
  return (
    <div className="container">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Creating a new experiment</p>
          <p className="subtitle">
            ... is easy, and we will guide you through it!
          </p>
        </div>
      </section>

      <div className="field">
        <label className="label">Experiment name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Give your experiment a name!"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
        <input
            className="input"
            type="text" placeholder="What are you experimenting with?"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Metric</label>
        <div className="select">
          <select>
            <option>Weight</option>
            <option>Mood</option>
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
                className="textarea"
                placeholder="Put a short description of what your control days will be"
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
                className="textarea"
                placeholder="Put a short description of what your treatment days will be"
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <a href="/dashboard"><button className="button is-link">Create</button></a>
        </div>
        <div className="control">
        <a href="/dashboard"><button className="button is-link is-light">Cancel</button></a>
        </div>
      </div>
    </div>
  );
}

export default Wizard;
