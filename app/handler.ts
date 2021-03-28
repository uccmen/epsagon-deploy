import {APIGatewayEvent} from 'aws-lambda';
import {fieldGroupStaticHandler} from './src/handler/macro/field-group-static';

export const hello = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

export const getTemplateAdf = fieldGroupStaticHandler;
