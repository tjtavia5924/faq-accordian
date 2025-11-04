import info from "./faqData.json";
import star from "./assets/images/icon-star.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import { useState } from "react";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleInfo = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="bg-img" />
      <div className="info-container">
        <figure className="header">
          <img src={star} alt="image of star" />
          <h1>FAQS</h1>
        </figure>
        {info.faqs.map((faq, index) => (
          <div key={index} className="faq-section">
            <div className="faq-container">
              {/* ROW: question + button */}
              <div className="faq-row">
                <span className="faq-question">{faq.question}</span>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleInfo(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <img
                    src={openIndex === index ? minus : plus}
                    alt={openIndex === index ? "minus icon" : "plus icon"}
                    width="20"
                    height="20"
                  />
                </button>
              </div>

              {/* ANSWER: always outside the .faq-row */}
              {openIndex === index && (
                <p id={`faq-answer-${index}`} className="faq-answer">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
