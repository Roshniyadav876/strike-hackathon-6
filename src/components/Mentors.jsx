import "./Mentors.css";

const mentors = [
  {
    name: "Rohit Negi",
    role: "Founder & Lead Instructor",
    image: "/Rohit_sir.jpg",
  },
  {
    name: "Aditya Tandon",
    role: "Co-Founder & Senior Instructor",
    image: "/Aditya_sir.jpg",
  },
];

function Mentors() {
  return (
    <section className="mentors-section" id="mentors">
      <div className="mentors-container">

        <h2 className="mentors-title">
          Meet With Our Mentors
        </h2>

        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <article className="mentor-card" key={mentor.name}>
              <div className="mentor-image-wrapper">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-image"
                />
              </div>

              <h3>{mentor.name}</h3>

              <p>{mentor.role}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Mentors;