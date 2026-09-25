import "./Hero.css";

function Hero() {
  const handleJoinUs = () => {
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero">

      {/* ================= HERO CONTENT ================= */}
      <div className="hero-content">

        <h1 className="hero-title">
          <span className="hero-small-title">
            Take control of your
          </span>

          <span className="hero-main-title">
            Future With <span>Strike</span>
          </span>
        </h1>

        <p className="hero-description">
          Master DSA, System Design &amp; AI with interactive coding
          environments
        </p>

        <button
          type="button"
          className="hero-btn"
          onClick={handleJoinUs}
        >
          Join Us
          <span>→</span>
        </button>

      </div>


      {/* ================= STRIKE CODE EDITOR ================= */}
      <div className="strike-editor">

        {/* ---------- EDITOR HEADER ---------- */}
        <div className="editor-header">

          <div className="editor-left">

            <div className="editor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="editor-tab">
              <span className="code-icon">&lt;/&gt;</span>
              <span>strike.js</span>
              <b></b>
            </div>

          </div>

          <div className="editor-right">

            <span className="ready-badge">
              READY
            </span>

            <button
              type="button"
              className="run-code-btn"
            >
              <span>●</span>
              Run Code
            </button>

          </div>

        </div>


        {/* ---------- EDITOR WORKSPACE ---------- */}
        <div className="editor-workspace">

          {/* ================= LEFT COLUMN ================= */}
          <div className="editor-left-column">

            {/* ---------- CODE PANEL ---------- */}
            <div className="code-panel">

              <div className="code-line comment">
                <span className="line-number">1</span>
                <span>
                  // Strike Platform - Welcome Code
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">2</span>
                <span>
                  <b className="blue">const</b>{" "}
                  <b className="cyan">welcome</b> ={" "}
                  <b className="purple">async</b> () =&gt; {"{"}
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">3</span>
                <span className="indent">
                  <b className="blue">const</b>{" "}
                  user ={" "}
                  <b className="purple">await</b>{" "}
                  getUser();
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">4</span>
                <span className="indent">
                  console.log(
                  <span className="yellow">
                    {`Welcome ${"{user.name}"}!`}
                  </span>
                  );
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">5</span>
                <span className="indent">
                  console.log(
                  <span className="yellow">
                    {`Level: ${"{user.level}"}`}
                  </span>
                  );
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">6</span>
                <span className="indent">
                  <b className="blue">return</b>{" "}
                  {"{"}
                  {" status: "}
                  <span className="orange">
                    "success"
                  </span>
                  {" }"};
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">7</span>
                <span>
                  {"};"}
                </span>
              </div>

              <div className="code-space"></div>

              <div className="code-line">
                <span className="line-number">9</span>
                <span>
                  <b className="blue">const</b>{" "}
                  <b className="cyan">getUser</b> ={" "}
                  <b className="purple">async</b> () =&gt; {"{"}
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">10</span>
                <span className="indent">
                  name:{" "}
                  <span className="orange">
                    "Guest User"
                  </span>
                  ,
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">11</span>
                <span className="indent">
                  level:{" "}
                  <span className="orange">
                    "Beginner"
                  </span>
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">12</span>
                <span>
                  {"});"}
                </span>
              </div>

              <div className="code-space"></div>

              <div className="code-line">
                <span className="line-number">14</span>
                <span className="white">
                  welcome();
                </span>
              </div>

            </div>


            {/* ---------- TERMINAL ---------- */}
            <div className="terminal-panel">

              <div className="terminal-header">
                <span>▣</span>
                TERMINAL
              </div>

              <div className="terminal-content">
                <p>
                  Welcome to Strike Terminal! ✨
                </p>

                <span>$</span>
              </div>

            </div>

          </div>


          {/* ================= RIGHT AI COLUMN ================= */}
          <div className="ai-panel">

            <div className="ai-tabs">

              <span className="ai-tab-active">
                AI Assistant
              </span>

              <span>
                Bug Shots
              </span>

              <small>
                Static
              </small>

            </div>


            <div className="ai-content">

              <p className="quick-title">
                QUICK SUGGESTIONS
              </p>


              <div className="suggestion">
                <strong>
                  Refactor welcome()
                </strong>

                <span>
                  Extract user fetch and logging into
                  separate utils for better testability.
                </span>
              </div>


              <div className="suggestion">
                <strong>
                  Add input validation
                </strong>

                <span>
                  Validate user.level against enum:
                  Beginner | Advanced | Expert.
                </span>
              </div>


              <div className="suggestion">
                <strong>
                  Improve typing
                </strong>

                <span>
                  Define User type and return type for
                  getUser and welcome functions.
                </span>
              </div>


              <div className="suggestion">
                <strong>
                  Implement error handling
                </strong>

                <span>
                  Add try-catch blocks and custom error
                  messages for async operations.
                </span>
              </div>


              <div className="suggestion">
                <strong>
                  Add loading states
                </strong>

                <span>
                  Show skeleton loaders while fetching
                  user data for better UX.
                </span>
              </div>


              <div className="suggestion">
                <strong>
                  Optimize re-renders
                </strong>

                <span>
                  Wrap components with React.memo and
                  useMemo for expensive calculations.
                </span>
              </div>


              <p className="thought-title">
                THOUGHTS
              </p>


              <div className="thought">
                • Consider debouncing setDisplayedCode
                typing to save renders.
              </div>


              <div className="thought">
                • Memoize highlightCode with code length
                as key for performance.
              </div>


              <div className="thought">
                • Split regex patterns into precompiled
                list outside component.
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= HERO GLOW ================= */}
      <div className="hero-glow"></div>

    </section>
  );
}

export default Hero;