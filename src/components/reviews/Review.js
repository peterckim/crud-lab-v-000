import React, { Component } from "react";

class Review extends Component {
  handleOnClick = event => {
    this.props.delete(this.props.review);
  };

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>{review.text}</li>
        <button onClick={event => this.handleOnClick(event)}> X </button>
      </div>
    );
  }
}

export default Review;
