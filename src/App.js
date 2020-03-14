import React from "react";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>Are you sure?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          keyImage="3h1j1"
          author="Alex"
          date="Today at 4:42PM"
          text="I like your post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          keyImage="3h1j2"
          author="Jane"
          date="Today at 5:42PM"
          text="Amazing content"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          keyImage="3h1j3"
          author="Sam"
          date="Today at 6:42PM"
          text="Woooaw"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
