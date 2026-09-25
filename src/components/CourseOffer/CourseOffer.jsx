import { useEffect, useState } from "react";
import "./CourseOffer.css";

function CourseOffer({
  hasOffer = false,
  course = "",
  discount = "30% OFF",
  coupon = "THUNDER30",
  duration = 24 * 60 * 60 * 1000,
}) {
  const storageKey = `strike-course-offer-${course
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!hasOffer) return;

    const savedExpiry = localStorage.getItem(storageKey);

    if (savedExpiry) {
      const remaining = Number(savedExpiry) - Date.now();

      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        const newExpiry = Date.now() + duration;
        localStorage.setItem(storageKey, newExpiry);
        setTimeLeft(duration);
      }
    } else {
      const newExpiry = Date.now() + duration;
      localStorage.setItem(storageKey, newExpiry);
      setTimeLeft(duration);
    }
  }, [hasOffer, storageKey, duration]);

  useEffect(() => {
    if (!hasOffer || timeLeft <= 0) return;

    const timer = setInterval(() => {
      const expiry = Number(localStorage.getItem(storageKey));
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

  if (!hasOffer) return null;

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatTime = (value) =>
    String(value).padStart(2, "0");

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
      <button
        type="button"
        className="course-offer-unlock"
        onClick={(event) => {
          event.stopPropagation();
          setUnlocked(true);
        }}
      >
        <span>✦</span>

        Unlock Course Offer

        <strong>→</strong>
      </button>
    );
  }

  /* =========================
     UNLOCKED STATE
  ========================= */

  return (
    <div className="course-offer">

      {/* CLOSE BUTTON */}

      <button
        type="button"
        className="course-offer-close"
        aria-label="Close course offer"
        onClick={(event) => {
          event.stopPropagation();
          setUnlocked(false);
        }}
      >
        ×
      </button>


      {/* HEADER */}

      <div className="course-offer-header">

        <span>
          ✦ SPECIAL COURSE OFFER
        </span>

        <small>
          LIMITED TIME
        </small>

      </div>


      {/* DISCOUNT */}

      <div className="course-offer-discount">
        {discount}
      </div>


      {/* DESCRIPTION */}

      <p>
        Use this exclusive code when enrolling in this course.
      </p>


      {/* COUPON */}

      <div className="course-offer-code">

        <span>
          {coupon}
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleCopy();
          }}
          disabled={timeLeft <= 0}
        >
          {copied ? "✓ COPIED" : "COPY"}
        </button>

      </div>


      {/* TIMER */}

      <div className="course-offer-timer">

        <span>
          OFFER ENDS IN
        </span>

        {timeLeft > 0 ? (
          <strong>
            {formatTime(hours)} : {formatTime(minutes)} :{" "}
            {formatTime(seconds)}
          </strong>
        ) : (
          <strong className="course-offer-expired">
            OFFER EXPIRED
          </strong>
        )}

      </div>


      {/* CTA */}

      <button
        type="button"
        className="course-offer-cta"
        disabled={timeLeft <= 0}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        Enroll Now
        <span>→</span>
      </button>

    </div>
  );
}

export default CourseOffer;