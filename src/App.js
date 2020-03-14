import React, { Component } from "react";
import SeasonPage from "./pages/SeasonPage";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  const = renderContent () {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonPage lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <div>Loading...</div>;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    {renderContent()}
  }
}

export default App;
