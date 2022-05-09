import { useRef, useState } from "react";
import HeroSection from "../HeroSection";
import JoditEditor from "jodit-react";
import Footer from "../Footer";

import { Button } from "../Button";

function CreateBlogs() {
  const [setValue] = useState("");
  const editor = useRef(null);
  function askQuestionHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="ask-question">
      <HeroSection />
      <div className="edit-profile-heading">
        Create
        <span className="edit-profile-heading-selected"> Blogs</span>
      </div>
      <input
        placeholder="Enter Blog Title"
        type="text"
        className="post-title"
      />

      <div className="short-description">
        <textarea
          placeholder="Short Description of Blog"
          className="short-description-textarea"
        ></textarea>
      </div>
      <div className="question-heading">Details</div>
      <div className="text-editor">
        <JoditEditor ref={editor} onChange={(content) => setValue(content)} />
      </div>
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
export default CreateBlogs;
