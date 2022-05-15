import "./AskQuestion.css";
// import { useState } from "react";
import HeroSection from "../HeroSection";
// import JoditEditor from "jodit-react";
import Footer from "../Footer";

import { Button } from "../Button";

function AskQuestion() {
  // const [setValue] = useState("");
  // const editor = useRef(null);
  function askQuestionHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="ask-question">
      <HeroSection />
      <div className="edit-profile-heading">
        Ask
        <span className="edit-profile-heading-selected"> Question</span>
      </div>
      <input
        placeholder="Post Question Title"
        type="text"
        className="post-title"
      />

      <div className="short-description">
        <textarea
          placeholder="Short Description of Question"
          className="short-description-textarea"
        ></textarea>
      </div>
      <div className="question-heading">Details</div>
      {/* <div className="text-editor">
        <JoditEditor ref={editor} onChange={(content) => setValue(content)} />
      </div> */}
      <input
        placeholder="Add Some Hashtags"
        type="text"
        className="post-title hashtag"
      />
      <div className="ask-question-btn">
        <Button
          onClick={askQuestionHandler}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Submit
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default AskQuestion;
