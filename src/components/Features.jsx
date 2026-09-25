import "./Features.css";

function Features() {
  return (
    <section className="features-section" id="features">

      {/* HEADING */}
      <div className="features-heading">
        <h2>Why Choose Us</h2>

        <p>
          Learn smarter with modern tools, guided mentors, and a platform built
          to help you grow your skills faster, setting a new benchmark for
          modern coding excellence.
        </p>
      </div>


      {/* FEATURES GRID */}
      <div className="features-grid">

        {/* INTERVIEW */}
        <article className="feature-card interview-card">
          <div className="feature-card-content">
            <h3>Interview Preparation</h3>

            <p>
              Learn faster with hands-on tracks and mentor feedback.
            </p>
          </div>

          <div className="interview-illustration">
            <div className="person person-left">
              <div className="head"></div>
              <div className="body"></div>
            </div>

            <div className="laptop">
              <span></span>
            </div>

            <div className="person person-right">
              <div className="head"></div>
              <div className="body"></div>
            </div>
          </div>
        </article>


        {/* AI SUPPORT */}
        <article className="feature-card ai-support-card">

          <h3>AI Support</h3>

          <div className="robot-scene">

            <div className="chat-bubble">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="robot">

              <div className="antenna">
                <span></span>
              </div>

              <div className="robot-head">
                <div className="robot-face">
                  <i></i>
                  <i></i>
                </div>
              </div>

              <div className="robot-body">
                <div className="robot-arm left"></div>
                <div className="robot-arm right"></div>
              </div>

            </div>
          </div>
        </article>


        {/* PROJECT BASED LEARNING */}
        <article className="feature-card project-card">

          <h3>
            <strong>Projects</strong> Based Learning
          </h3>

          <div className="project-illustration">

            <div className="project-node node-one"></div>
            <div className="project-node node-two"></div>
            <div className="project-node node-three"></div>
            <div className="project-node node-four"></div>

            <div className="project-hand">
              <div className="finger finger-one"></div>
              <div className="finger finger-two"></div>
              <div className="finger finger-three"></div>
            </div>

            <div className="gear gear-one">⚙</div>
            <div className="gear gear-two">⚙</div>

          </div>
        </article>


        {/* PROGRESS */}
        <article className="feature-card progress-card">

          <div className="progress-top">

            <div>
              <h3>Track Your Progress</h3>

              <strong>Grow With Strike</strong>
            </div>

            <span className="tracking-badge">
              <i></i>
              Live Progress Tracking
            </span>

          </div>


          <div className="chart">

            <div className="chart-grid">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
            </div>

            <div className="chart-line">
              <span className="point p1"></span>
              <span className="point p2"></span>
              <span className="point p3"></span>
              <span className="point p4"></span>
              <span className="point p5"></span>
              <span className="point p6"></span>
              <span className="point p7"></span>
            </div>

            <div className="chart-bars">
              <div><span></span><small>Mon</small></div>
              <div><span></span><small>Tue</small></div>
              <div><span></span><small>Wed</small></div>
              <div><span></span><small>Thu</small></div>
              <div><span></span><small>Fri</small></div>
              <div><span></span><small>Sat</small></div>
              <div><span></span><small>Sun</small></div>
            </div>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Features;