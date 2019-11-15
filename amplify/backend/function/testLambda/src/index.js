/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

"use strict";
const AWS = require("aws-sdk");
const fetchPic = require("./fetchPic.js")

exports.handler = async (event, context) => {

    const documentClient = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION
    });

    const image = await fetchPic()

    const params = {
        TableName: "Image-2h3ltfznojg4lbx6j4mx7jpvem-dev",
        Item: {
            id: "1",
            image
        }
    };

    try {
        await documentClient.put(params).promise();
    } catch (err) {
        console.log(err);
    }
};
