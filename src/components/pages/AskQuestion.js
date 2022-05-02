import "./AskQuestion.css";
import { useState } from "react";
import HeroSection from "../HeroSection";
import ReactQuill from "react-quill";
import Footer from "../Footer";
import "../../components/react-quill/dist/quill.snow.css";
import { Button } from "../Button";

function AskQuestion() {
  const [show, setShow] = useState("");
  function askQuestionHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="ask-question">
      <HeroSection />
      <div className="question-heading">Add Question</div>
      <input placeholder="Post Title" type="text" className="post-title" />

      <div className="short-description">
        <textarea
          placeholder="Short Description"
          className="short-description-textarea"
        ></textarea>
      </div>
      <div className="question-heading">Details</div>
      <div className="text-editor">
        <ReactQuill
          placeholder="Enter Details"
          className="shadow-sm "
          theme="snow"
          value={show}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "video", "image", "code-block"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "color",
            "background",
            "list",
            "bullet",
            "indent",
            "link",
            "video",
            "image",
            "code-block",
            "align",
          ]}
          onChange={(val) => {
            setShow(val);
          }}
        />
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

export default AskQuestion;
