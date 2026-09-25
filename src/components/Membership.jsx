import MemberOffer from "./MemberOffer/MemberOffer";
import "./Membership.css";

function Membership() {
  return (
    <section className="membership" id="pricing">

      {/* ================= HEADING ================= */}
      <div className="section-heading">
        <p>THE STRIKE MEMBERSHIP</p>

        <h2>
          Membership
          <br />
          Plans
        </h2>

        <span>
          One focused investment in your engineering career.
          <br />
          Every course. Present and future. Pay once, learn forever.
        </span>
      </div>


      {/* ================= PLANS ================= */}
      <div className="membership-grid">

        {/* ================= STRIKE PLUS ================= */}
        <article className="membership-card plus-card">

          {/* IMAGE */}
          <div className="card-image plus-image">
            <img
              src="/strike_plus.png"
              alt="Strike Plus"
            />

            <span className="image-badge">
              Most Popular
            </span>
          </div>


          {/* CONTENT */}
          <div className="membership-content">

            <p className="plan-label">
              MEMBERSHIP PLAN
            </p>

            <h3>Strike Plus</h3>

            <p className="plan-description">
              All existing Strike courses with access for your selected
              duration.
            </p>


            {/* DURATION */}
            <div className="duration-title">
              SELECT DURATION
            </div>

            <div className="duration-options">

              <button type="button">
                2 Years
              </button>

              <button type="button">
                3 Years
              </button>

              <button
                type="button"
                className="active"
              >
                4 Years
                <small>Popular</small>
              </button>

            </div>


            {/* PRICE */}
            <div className="price-row">

              <div className="main-price">
                <span className="rupee">₹</span>
                <strong>12,499</strong>
              </div>

              <del>₹19,999</del>

              <span className="discount">
                38% OFF
              </span>

              <span className="popular-price">
                Popular
              </span>

            </div>


            <p className="payment-info">
              4 Years · one-time · no renewals
            </p>


            {/* FEATURES */}
            <ul className="feature-list">

              <li>All current courses included</li>

              <li>HD recordings</li>

              <li>Live class access during plan</li>

              <li>Notes</li>

              <li>Resume Review</li>

              <li>Certificates</li>

              <li>System Design Platform</li>

              <li>DSA Platform</li>

              <li>Coder Arena Platform</li>

            </ul>


            {/* ================= SALE CTA ================= */}
            <MemberOffer
              hasOffer={true}
              plan="Strike Plus"
              discount="15% OFF"
              coupon="MONSOON15"
              buttonClass="plus-button"
            />

          </div>
        </article>


        {/* ================= STRIKE ULTRA ================= */}
        <article className="membership-card ultra-card">

          {/* IMAGE */}
          <div className="card-image ultra-image">

            <img
              src="./strike_ultra.png"
              alt="Strike Ultra"
            />

            <span className="image-badge ultra-badge">
              ✨ BEST VALUE
            </span>

          </div>


          {/* CONTENT */}
          <div className="membership-content">

            <p className="plan-label">
              MEMBERSHIP PLAN
            </p>

            <h3>Strike Ultra</h3>

            <p className="plan-description">
              This plan includes all existing courses, plus upcoming
              courses for your selected duration.
            </p>


            {/* DURATION */}
            <div className="duration-title">
              SELECT DURATION
            </div>

            <div className="duration-options ultra-duration">

              <button type="button">
                2 Years
              </button>

              <button type="button">
                3 Years
              </button>

              <button
                type="button"
                className="active"
              >
                4 Years
                <small>Popular</small>
              </button>

            </div>


            {/* PRICE */}
            <div className="price-row">

              <div className="main-price">
                <span className="rupee">₹</span>
                <strong>13,499</strong>
              </div>

              <del>₹24,999</del>

              <span className="discount">
                46% OFF
              </span>

              <span className="popular-price">
                Popular
              </span>

            </div>


            <p className="payment-info">
              4 Years · one-time · no renewals
            </p>


            {/* FEATURES */}
            <ul className="feature-list">

              <li className="highlight-feature">
                Everything in Strike Plus
              </li>

              <li>Upcoming batches included</li>

              <li>Coder Arena Platform</li>

              <li>Certificates</li>

              <li>Resume Review</li>

              <li>Notes</li>

              <li>System Design Platform</li>

              <li>DSA Platform</li>

            </ul>


            {/* ================= NORMAL CTA ================= */}
            <MemberOffer
              hasOffer={false}
              plan="Strike Ultra"
              buttonClass="ultra-button"
            />

          </div>
        </article>

      </div>


      {/* ================= NOTE ================= */}
      <p className="pricing-note">
        Prices inclusive of GST · One-time payment · No renewals
      </p>

    </section>
  );
}

export default Membership;