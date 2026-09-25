import { useEffect, useState } from "react";
import "./MemberOffer.css";

function MemberOffer({
  hasOffer = false,
  plan = "Strike Plus",
  discount = "15% OFF",
  coupon = "MONSOON15",
  buttonClass = "",
  duration = 24 * 60 * 60 * 1000,
}) {
  const storageKey = `strike-member-offer-${plan
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

  /* =========================
     TIMER SETUP
  ========================= */

  useEffect(() => {
    if (!hasOffer) return;

    const savedExpiry = localStorage.getItem(storageKey);

    if (savedExpiry) {
      const expiry = Number(savedExpiry);
      const remaining = expiry - Date.now();

      if (remaining > 0) {
        // Existing active offer
        setTimeLeft(remaining);
      } else {
        // Offer has already expired.
        // IMPORTANT: Do NOT create a new expiry.
        setTimeLeft(0);
      }
    } else {
      // First time user sees this offer
      const newExpiry = Date.now() + duration;

      localStorage.setItem(storageKey, newExpiry);
      setTimeLeft(duration);
    }
  }, [hasOffer, storageKey, duration]);


  /* =========================
     COUNTDOWN
  ========================= */

  useEffect(() => {
    if (!hasOffer || timeLeft <= 0) return;

    const timer = setInterval(() => {
      const savedExpiry = localStorage.getItem(storageKey);

      if (!savedExpiry) {
        setTimeLeft(0);
        clearInterval(timer);
        return;
      }

      const expiry = Number(savedExpiry);
      const remaining = expiry - Date.now();

      if (remaining <= 0) {
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasOffer, storageKey, timeLeft]);


  /* =========================
     NORMAL PLAN BUTTON
  ========================= */

  if (!hasOffer) {
    return (
      <button
        type="button"
        className={`plan-button ${buttonClass}`}
      >
        Get {plan}
        <span>→</span>
      </button>
    );
  }


  /* =========================
     TIMER FORMAT
  ========================= */

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


  /* =========================
     COPY COUPON
  ========================= */

  const handleCopy = async () => {
    if (timeLeft <= 0) return;

    try {
      await navigator.clipboard.writeText(coupon);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };


  /* =========================
     LOCKED STATE
  ========================= */

  if (!unlocked) {
    return (
      <div className="member-offer-wrapper">

        <button
          type="button"
          className={`plan-button member-unlock-button ${buttonClass}`}
          onClick={() => setUnlocked(true)}
        >
          <span className="member-unlock-star">
            ✦
          </span>

          Unlock Member Perk

          <span className="member-unlock-arrow">
            →
          </span>
        </button>

      </div>
    );
  }


  /* =========================
     REVEALED OFFER
  ========================= */

  return (
    <div className="member-offer-wrapper">

      <div className="member-offer-panel">

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="member-offer-close"
          aria-label="Close member offer"
          onClick={() => setUnlocked(false)}
        >
          ×
        </button>


        {/* HEADER */}

        <div className="member-offer-header">

          <span>
            ✦ MEMBER PERK UNLOCKED
          </span>

          <small>
            {plan}
          </small>

        </div>


        {/* DISCOUNT */}

        <div className="member-offer-discount">
          EXTRA {discount}
        </div>


        {/* DESCRIPTION */}

        <p className="member-offer-description">
          Use this exclusive code before the offer expires.
        </p>


        {/* COUPON */}

        <div className="member-offer-code-row">

          <span className="member-offer-code">
            {coupon}
          </span>

          <button
            type="button"
            className="member-offer-copy"
            onClick={handleCopy}
            disabled={timeLeft <= 0}
          >
            {copied ? "✓ COPIED" : "COPY"}
          </button>

        </div>


        {/* TIMER */}

        <div className="member-offer-timer">

          <span>
            OFFER ENDS IN
          </span>

          {timeLeft > 0 ? (
            <strong>
              {formatTime(hours)} :{" "}
              {formatTime(minutes)} :{" "}
              {formatTime(seconds)}
            </strong>
          ) : (
            <strong className="offer-expired">
              OFFER EXPIRED
            </strong>
          )}

        </div>


        {/* GET PLAN */}

        <button
          type="button"
          className={`member-offer-get ${buttonClass}`}
          disabled={timeLeft <= 0}
        >
          Get {plan}
          <span>→</span>
        </button>

      </div>

    </div>
  );
}

export default MemberOffer;