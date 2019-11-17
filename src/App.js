import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import fetchPic from "./utils/fetchPic";
import {API, graphqlOperation} from "aws-amplify"
import {onDeleteImage} from './graphql/subscriptions';
import {getImage} from './graphql/queries';
import {deleteImage} from './graphql/mutations';


Amplify.configure(awsconfig);

class App extends Component {
    state = {
        image: "#"
    };

    getPic = async () => {
        try{
            const {data: {
                getImage : {
                    image
                }
            }} = await API.graphql(graphqlOperation(getImage, { id: '1' }))
            return image            
            
        } catch { return }       
        
    }

    intervalID = 0

    async componentDidMount() {
        const image = await this.getPic()
        this.setState({image})
        this.intervalID = setInterval(async () => {
            const image = await this.getPic()
            this.setState({image})
        }, 1800000);
        
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
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
