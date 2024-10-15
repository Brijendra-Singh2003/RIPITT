import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import { useParams } from "react-router-dom";

import "./BlogId.css";

function BlogById() {
  //   const { id } = useParams();
  const id = "top-5-cold-emailing-trends-every-marketer-must-know-in-2023";
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/Blogs/${id}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, []);
  return (
    <div className="container max-w-4xl mx-auto p-4">
      <ReactMarkdown className="noTailwind">{content}</ReactMarkdown>
    </div>
  );
}

export default BlogById;
