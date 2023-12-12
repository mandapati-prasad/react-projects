import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./images";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blogs">
      <div className="gpt3_blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article
            image={blog01}
            date="dec 10,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3_blog-container_groupB">
          <Article
            image={blog02}
            date="dec 10,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog03}
            date="dec 10,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog04}
            date="dec 10,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog05}
            date="dec 10,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
