import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What programming languages can I learn on the platform?",
    answer:
      "Strike offers comprehensive courses in JavaScript, Python, Java, C++, React, Node.js, and many more. We also provide courses on Data Structures, Algorithms, System Design, and Full-Stack Development with hands-on projects.",
  },
  {
    question: "What will I learn in the DSA + Gen AI course?",
    answer:
      "You will learn Data Structures and Algorithms along with Generative AI concepts, problem solving, and practical project development.",
  },
  {
    question:
      "Do I need prior coding experience to join DSA + Gen AI course?",
    answer:
      "No. The course starts from the fundamentals and gradually takes you toward advanced concepts through structured learning and practice.",
  },
  {
    question: "How is Gen AI integrated with DSA in this course?",
    answer:
      "The course combines DSA problem solving with Generative AI concepts and practical applications.",
  },
  {
    question:
      "Will this course help me crack product-based company interviews?",
    answer:
      "The course focuses on DSA, problem solving, projects, and interview preparation.",
  },
  {
    question:
      "How long does it take to complete the DSA + Gen AI course?",
    answer:
      "The completion time depends on your learning pace and consistency.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <div className="faq-heading">
          <h2>
            <span>Your Questions, </span>
            <strong>Answered</strong>
          </h2>

          <p>
            Get instant answers to most common questions about Strike.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;