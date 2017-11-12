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
      password:body.password,
      rank:'user',
      bulles:0
    },
  };

  dynamo.put(params,(error, data) => {
    if(error){
      console.log(error);
      callback(null,response(500,{status:'error',message:'error creating user'}))
    }
    else{
      var params = {
        TableName : 'bulle-user',
        AttributesToGet: [
          'name',
          'email',
          'rank',
          'bulles'
        ],
        Key: {
          email: body.email
        }
      };
      dynamo.get(params,(error,data)=>{
        if(error){
          console.log(error);
          callback(null,response(500,{status:'error',message:'error retrieving user'}))
        } else {
          callback(null,response(200,data.Item))
        }
      })
    }
  })
}

module.exports.connexion = (event, context, callback) => {
  let body = JSON.parse(event.body);

  var params = {
    TableName : 'bulle-user',
    AttributesToGet: [
      'name',
      'email',
      'rank',
      'bulles'
    ],
    Key: {
      email: body.email
    }
  };
  dynamo.get(params,(error,data)=>{
    if(error){
      console.log(error);
      callback(null,response(500,{status:'error',message:'error retrieving user'}))
    } else {
      callback(null,response(200,data.Item))
    }
  })
}

module.exports.achat = (event, context, callback) => {
  let body = JSON.parse(event.body);

  var params = {
    TableName: 'bulle-user',
    AttributesToGet: [
      'email',
      'bulles'
    ],
    Key:{
      email:body.email
    }
  }

  dynamo.get(params,(error,data)=>{
    if(error){
      console.log(error)
      callback(null,response(500,{message:"Error while retrieving the user"}))
    } else {
      let user = data.Item;
      params = {
        TableName: 'bulle-user',
        Item: {
          email:user.email,
          bulles:user.bulles+body.nombre
        }
      }
      dynamo.put(params,(error,data)=>{
        var params = {
          TableName : 'bulle-user',
          AttributesToGet: [
            'name',
            'email',
            'rank',
            'bulles'
          ],
          Key: {
            email: body.email
          }
        };
        dynamo.get(params,(error,data)=>{
          if(error){
            console.log(error);
            callback(null,response(500,{status:'error',message:'error retrieving user'}))
          } else {
            callback(null,response(200,data.Item))
          }
        })
      })
    }
  })
}
