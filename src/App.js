import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import fetchPic from "./utils/fetchPic";

Amplify.configure(awsconfig);

class App extends Component {
    state = {
        image: "#"
    };

    async componentDidMount() {
        this.setState({ image: await fetchPic() });
    }

    render() {
        return (
            <div className="App">
                <p>Hello</p>
                <img
                    src={this.state.image}
                    alt="Image"
                    style={{ margin: "auto" }}
                />
            </div>
        );
    }
}

export default withAuthenticator(App, true);
