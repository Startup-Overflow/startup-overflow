import HeroSection from "../HeroSection";
import Editor from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../Footer";
import { useState } from "react";
import { Button } from "../Button";

function CreateBlogs() {
  const [body, setbody] = useState("");
  const editorhandler = (e) => {
    setbody(e);
  };

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
        <Editor
          placeholder="Enter your Text"
          className="shadow-sm"
          theme="snow"
          value={body}
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
          onChange={editorhandler}
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
export default CreateBlogs;
