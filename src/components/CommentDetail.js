import React, { Component } from "react";

class CommentDetail extends Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            src={`https://api.adorable.io/avatars/${this.props.keyImage}`}
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

// const CommentDetail = props => {
//   console.log(props);
// return (
//   <div className="comment">
//     <a href="/" className="avatar">
//       <img
//         alt="avatar"
//         src={`https://api.adorable.io/avatars/${props.keyImage}`}
//       />
//     </a>
//     <div className="content">
//       <a href="/" className="author">{props.author}</a>
//       <div className="metadata">
//         <span className="date">{props.date}</span>
//       </div>
//       <div className="text">{props.text}</div>
//     </div>
//   </div>
// );
// };

export default CommentDetail;
