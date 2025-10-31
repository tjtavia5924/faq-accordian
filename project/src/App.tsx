import info from "./faqData.json";
import star from "./assets/images/icon-star.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import { useState } from "react";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleInfo = (index: number) => {
    console.log("Toggling index:", index, "Current openIndex:", openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className="container">
      <div className="bg-img"/>
        <div className="info-container"> 
         
          <figure className="header">
            <img src={star} alt="image of star" />
            <h1>FAQS</h1>
          </figure>
          {info.faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <div key={index} className="faq-section">
                <figure >
                  <h2 className="faq-question">{faq.question}</h2>
                  {/* Toggle button to show/hide answer */}
                  <button className='faq-question-btn' onClick={() => toggleInfo(index)}>
                    <img
                      src={openIndex === index ? minus : plus}
                      alt={
                        openIndex === index ? "minus icon" : "plus icon"
                      }
                      aria-label={`${
                        openIndex === index ? "minus" : "plus"
                      }-icon ${index}`}
                    />
                  </button>
                  {/* Only show answer if this FAQ is open */}
                {openIndex === index && (
                  <>
                  {console.log("Rendering answer for index:", index)}
                  <p className="faq-answer">{faq.answer}</p>
                  </>
                )}
                </figure>
                
              </div>
            )
          )}
        </div>
      
    </div>
    
  )
}

export default App;
