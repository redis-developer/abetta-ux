export default function HelpPage() {
  return (
    <div className="container">
      <section className="hero is-danger is-quarterheight">
        <div className="hero-body">
          <div className="">
            <p className="title">Thank you for using abetta-me!</p>
            <p className="subtitle">
              A hackathon project, created by Antonis Anagnostou and Pavlos
              Gogousis.
            </p>
          </div>
        </div>
      </section>
      <section className="hero">
        <h1 className="is-size-2">What is this thing?</h1>
        <p className="is-size-4">
          abetta me is a way to improve yourself through scientific testing. If
          you ever wanted to try a change in your life, our app will help you
          set up your experiment, track metrics and detect statistically significant changes.
        </p>
      </section>

      <section className="hero">
        <h1 className="is-size-2">Technologies</h1>
        <p>Building on the strengths of giants</p>
        <div className="">
            <img src="https://www.ivaylopavlov.com/wp-content/uploads/2020/04/1Hires_redis_logo.png"></img>
        </div>
        <div className="columns">
          <div className="column">
            <img className="image" src="https://spring.io/images/OG-Spring.png"></img>
          </div>
          <div className="column">
            <img src="https://miro.medium.com/max/705/1*OiVr2f63kbvC4xKCB_z-mw.jpeg" />
          </div>
        </div>
      </section>

      <section className="hero">
        <h1 className="is-size-2">Contributors</h1>
        <div className="columns">
          <div className="column">
            <h3 className="is-size-3">Antonis Anagnostou</h3>
            <h3 className="is-size-4">Software Engineer</h3>
          </div>
          <div className="column">
            <h3 className="is-size-3">Pavlos Gogoussis</h3>
            <h3 className="is-size-4">Software Engineer</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
