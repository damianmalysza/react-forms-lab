import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.handleChange}/>
        <p>Chars Left: {charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
