'use strict';

function response(statusCode,body){
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers":"X-Requested-With,content-type, orderType, culture"
    },
    body: JSON.stringify(body)
  };
}

const AWS = require('aws-sdk');  
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.inscription = (event, context, callback) => {
  let body = JSON.parse(event.body);
  const params = {
    TableName: 'bulle-user',
    Item: {
      name:body.name,
      email:body.email,
      password:body.password
    },
  };

  dynamo.putItem(params,(error, data) => {
    if(error){
      console.log(error);
      callback(null,response(200,{status:'error',message:'error creating user'}))
    }
    else
      callback(null,response(200,{status:'ok',message:'ok'}))
  })
}