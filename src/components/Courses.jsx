import "./Courses.css";
import CourseOffer from "./CourseOffer/CourseOffer";

const courses = [
  {
    title: "Thunder: 100 Days of Code",
    description:
      "Web Development + System Design + Security + DevOps",
    duration: "100 Days",
    prerequisite: "HTML and CSS",
    hours: "100+ Hours",
    type: "LIVE",
    image: "/Thunder.png",
    offer: true,
    discount: "30% OFF",
    coupon: "THUNDER30",
  },
  {
    title: "DevOps Full Course",
    description:
      "Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud",
    duration: "8 Weeks",
    prerequisite: "Linux Basics",
    hours: "80+ Hours",
    type: "LIVE",
    image: "/Devops.png",
    offer: true,
    discount: "20% OFF",
    coupon: "DEVOPS20",
  },
  {
    title: "DSA + GenAI Combo",
    description:
      "Complete tech stack with DSA and AI",
    duration: "4 Months",
    prerequisite: "Basic Programming",
    hours: "100+ Hours",
    type: "POPULAR",
    image: "/DSA.png",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Master DSA with C++ from basics to advanced level",
    duration: "4 Months",
    prerequisite: "C++ Basics",
    hours: "100+ Hours",
    type: "LIVE",
    image: "/Data_structure.png",
  },
  {
    title: "Generative AI",
    description:
      "Build autonomous AI agents from scratch",
    duration: "4 Months",
    prerequisite: "Python Basics",
    hours: "50+ Hours",
    type: "LIVE",
    image: "/GenAI.jpg",
  },
];

function Courses() {
  return (
    <section className="courses-section" id="courses">

      <div className="courses-heading">
        <h2>What We Offer</h2>

        <p>
          Explore our comprehensive courses designed to elevate your skills
        </p>
      </div>

      <div className="courses-grid">

        {courses.map((course) => (
          <article
            className="course-card"
            key={course.title}
          >

            <div className="course-card-inner">

              {/* ================= FRONT ================= */}

              <div className="course-front">

                <div className="course-image">

                  <img
                    src={course.image}
                    alt={course.title}
                    draggable="false"
                  />

                  <span
                    className={
                      course.type === "POPULAR"
                        ? "course-badge popular"
                        : "course-badge live"
                    }
                  >
                    {course.type === "POPULAR"
                      ? "★ POPULAR"
                      : "● LIVE"}
                  </span>

                </div>

                <div className="front-content">

                  <h3>{course.title}</h3>

                  <p>
                    {course.description}
                  </p>

                </div>

              </div>


              {/* ================= BACK ================= */}

              <div className="course-back">

                {/* TOP SECTION */}

                <div className="back-top-panel">

                  <span
                    className={
                      course.type === "POPULAR"
                        ? "back-badge popular"
                        : "back-badge live"
                    }
                  >
                    {course.type === "POPULAR"
                      ? "★ POPULAR"
                      : "● LIVE"}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="back-description">
                    {course.description}
                  </p>

                  <div className="back-details">

                    <div className="back-detail">
                      <span>◷</span>
                      <strong>
                        {course.duration}
                      </strong>
                    </div>

                    <div className="back-detail">
                      <span>♙</span>
                      <strong>
                        Prerequisite: {course.prerequisite}
                      </strong>
                    </div>

                    <div className="back-detail">
                      <span>▣</span>
                      <strong>
                        {course.hours}
                      </strong>
                    </div>

                  </div>

                </div>


                {/* MIDDLE DIVIDER */}

                <div className="back-separator"></div>


                {/* BOTTOM SECTION */}

                <div
                  className={`back-bottom-panel ${
                    course.offer ? "has-offer" : ""
                  }`}
                >

                  {/* NORMAL CONTENT */}

                  <div className="course-default-content">

                    <p>
                      {course.description}
                    </p>

                    <span className="back-duration">
                      ◷ {course.duration}
                    </span>

                    <div className="back-gold-line"></div>

                    <button
                      type="button"
                      className="read-more"
                    >
                      Read More →
                    </button>

                  </div>


                  {/* COURSE OFFER */}

                  {course.offer && (
                    <div className="course-offer-container">

                      <CourseOffer
                        hasOffer={true}
                        course={course.title}
                        discount={course.discount}
                        coupon={course.coupon}
                      />

                    </div>
                  )}

                </div>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Courses;