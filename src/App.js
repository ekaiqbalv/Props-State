import React, { Component } from "react";
import SeasonPage from "./pages/SeasonPage";
import LoadingPage from "./pages/LoadingPage";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonPage lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <LoadingPage text="Please allow geolocation..." />;
  }

  getLocation(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidMount() {
     this.getLocation()
  }

  componentDidUpdate() {
    this.getLocation()
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
