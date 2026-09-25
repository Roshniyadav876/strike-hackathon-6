import "./Reviews.css";

const topReviews = [
  {
    name: "Gopal Kumar Jha",
    text: `Completed Nexus MERN in 8-9 months. Rohit Bhaiya taught not just 'what' but 'why' behind everything. My consistency broke many times, but I finally made it!`,
  },
  {
    name: "Adheli Priyanka",
    text: `Nexus builds from basics with in-depth explanations. Daily homework, live classes, and project contests with rewards kept me motivated throughout my learning journey.`,
  },
  {
    name: "Alok",
    text: `The live classes, HD recordings, and practice problems made learning smooth. Real-world projects prepared me for actual development work in the industry.`,
  },
  {
    name: "Babita Patel",
    text: `Nexus gave me a true from-scratch learning experience. The way they simplify core concepts, combined with daily assignments, live guidance, and exciting project challenges with rewards, kept me consistent and motivated every single day.`,
  },
  {
    name: "Raju Arya",
    text: `The live classes, HD recordings, and daily practice problems made learning smooth. Real-world projects prepared me for actual development work in the industry.`,
  },
];

const bottomReviews = [
  {
    name: "Aryan Verma",
    text: `Best decision for my learning journey. The concepts were explained clearly and helped me understand things instead of just memorizing them.`,
  },
  {
    name: "Shree",
    text: `The structured learning environment and practical approach helped me stay consistent throughout my preparation.`,
  },
  {
    name: "Navlesh Kumar",
    text: `The combination of live classes, assignments and projects made the overall learning experience very effective.`,
  },
  {
    name: "Mehul Prajapati",
    text: `The practical projects and continuous guidance helped me improve my development skills significantly.`,
  },
  {
    name: "Sonu",
    text: `A great learning experience with useful resources, clear explanations and regular practice.`,
  },
];

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <h3>{review.name}</h3>

      <p>"{review.text}"</p>
    </article>
  );
}

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-heading">
        <h2>Trusted by Visionaries</h2>
      </div>

      <div className="reviews-marquee top-marquee">
        <div className="reviews-track">
          <div className="reviews-group">
            {topReviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`top-1-${index}`}
              />
            ))}
          </div>

          <div className="reviews-group" aria-hidden="true">
            {topReviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`top-2-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-marquee bottom-marquee">
        <div className="reviews-track">
          <div className="reviews-group">
            {bottomReviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`bottom-1-${index}`}
              />
            ))}
          </div>

          <div className="reviews-group" aria-hidden="true">
            {bottomReviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`bottom-2-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;