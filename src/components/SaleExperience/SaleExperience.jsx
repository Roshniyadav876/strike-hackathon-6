import { useEffect, useState } from "react";
import "./SaleExperience.css";

const OFFER_DURATION = 24 * 60 * 60 * 1000;
const STORAGE_KEY = "strike-ai-perk-expiry";

function SaleExperience() {
  const [stage, setStage] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(OFFER_DURATION);

  useEffect(() => {
    let expiry = Number(localStorage.getItem(STORAGE_KEY));

    // First visit → start the 24-hour offer
    if (!expiry) {
      expiry = Date.now() + OFFER_DURATION;
      localStorage.setItem(STORAGE_KEY, String(expiry));
    }

    // Existing expiry is respected
    setTimeLeft(Math.max(0, expiry - Date.now()));

    const timer = setInterval(() => {
      const currentExpiry = Number(
        localStorage.getItem(STORAGE_KEY)
      );

      const remaining = currentExpiry - Date.now();

      if (remaining <= 0) {
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalSeconds = Math.max(
    0,
    Math.floor(timeLeft / 1000)
  );

  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;

  const formatTime = (value) =>
    String(value).padStart(2, "0");

  const startDiscovery = () => {
    if (stage !== "idle") return;

    setStage("scanning");

    setTimeout(() => {
      setStage("detected");
    }, 850);

    setTimeout(() => {
      setStage("open");
    }, 1600);
  };

  const closeOffer = () => {
    setStage("idle");
  };

  const revealOffer = () => {
    if (timeLeft <= 0) return;

    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={`ai-sale ${stage}`}>

      {/* =========================
          INITIAL SIGNAL
      ========================= */}

      {stage === "idle" && (
        <button
          type="button"
          className="ai-signal-trigger"
          onClick={startDiscovery}
          aria-label="Discover Strike signal"
        >
          <span className="signal-orbit orbit-one"></span>

          <span className="signal-orbit orbit-two"></span>

          <span className="signal-core">
            <span className="core-dot"></span>
          </span>

          <span className="signal-text">
            <small>STRIKE AI</small>

            <strong>
              Signal detected
            </strong>
          </span>

          <span className="signal-arrow">
            ↗
          </span>
        </button>
      )}

      {/* =========================
          SCANNING
      ========================= */}

      {stage === "scanning" && (
        <div className="ai-scanning">

          <div className="scanner-icon">
            <span></span>
          </div>

          <div className="scanner-content">

            <span className="scanner-label">
              STRIKE AI
            </span>

            <strong>
              Scanning for member perks
            </strong>

            <div className="scanner-progress">
              <span></span>
            </div>

          </div>

          <div className="scanner-status">
            SCANNING...
          </div>

        </div>
      )}

      {/* =========================
          SIGNAL DETECTED
      ========================= */}

      {stage === "detected" && (
        <div className="ai-detected">

          <div className="detected-icon">
            ✦
          </div>

          <div className="detected-content">

            <span>
              SALE DETECTED
            </span>

            <strong>
              Member discount found.
            </strong>

          </div>

          <div className="detected-check">
            ✓
          </div>

        </div>
      )}

      {/* =========================
          OPEN — MYSTERY EXPERIENCE
      ========================= */}

      {stage === "open" && (
        <div className="ai-offer-panel">

          <div className="offer-grid"></div>

          <div className="offer-glow"></div>

          {/* CLOSE */}

          <button
            type="button"
            className="ai-offer-close"
            onClick={closeOffer}
            aria-label="Close signal"
          >
            ×
          </button>

          {/* HEADER */}

          <div className="ai-offer-header">

            <div className="ai-status">
              <span className="status-dot"></span>

              UNKNOWN SIGNAL DETECTED
            </div>

            <span className="ai-code">
              STRIKE://AI-07
            </span>

          </div>

          {/* MYSTERY MESSAGE */}

          <div className="ai-offer-title">

            <span>
              THE SYSTEM FOUND
            </span>

            <strong>
              SOMETHING FOR YOU.
            </strong>

          </div>

          <div className="ai-mystery-message">

            <span>
              ACCESS HAS BEEN
            </span>

            <strong>
              TEMPORARILY GRANTED.
            </strong>

          </div>

          {/* =========================
              LARGE COUNTDOWN
          ========================= */}

          <div className="ai-countdown">

            <span className="countdown-label">
              TRANSMISSION ENDS IN
            </span>

            {timeLeft > 0 ? (
              <div className="countdown-time">

                <div>
                  <strong>
                    {formatTime(hours)}
                  </strong>

                  <small>
                    HRS
                  </small>
                </div>

                <span>:</span>

                <div>
                  <strong>
                    {formatTime(minutes)}
                  </strong>

                  <small>
                    MIN
                  </small>
                </div>

                <span>:</span>

                <div>
                  <strong>
                    {formatTime(seconds)}
                  </strong>

                  <small>
                    SEC
                  </small>
                </div>

              </div>
            ) : (
              <strong className="sale-expired">
                SIGNAL EXPIRED
              </strong>
            )}

            {timeLeft > 0 && (
              <div className="countdown-running">
                <span></span>
                TIME IS RUNNING
              </div>
            )}

          </div>

          {/* URGENCY */}

          <div className="ai-signal-warning">

            <span>
              THE SIGNAL WON'T
            </span>

            <strong>
              STAY ACTIVE FOREVER.
            </strong>

          </div>

          {/* CTA */}

          <button
            type="button"
            className="ai-claim"
            onClick={revealOffer}
            disabled={timeLeft <= 0}
            aria-disabled={timeLeft <= 0}
          >
            <span>
              {timeLeft > 0
                ? "UNLOCK WHAT'S INSIDE"
                : "SIGNAL EXPIRED"}
            </span>

            {timeLeft > 0 && (
              <strong>
                →
              </strong>
            )}

          </button>

          {/* FOOTER */}

          <div className="ai-footer">

            <span>
              {timeLeft > 0
                ? "● SIGNAL ACTIVE"
                : "● SIGNAL EXPIRED"}
            </span>

          </div>

        </div>
      )}

    </div>
  );
}

export default SaleExperience;