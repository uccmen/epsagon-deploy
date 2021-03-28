import {APIGatewayEvent, AuthResponse, Callback, CustomAuthorizerResult, Handler} from 'aws-lambda';
import {APIGatewayRequestAuthorizerEvent} from 'aws-lambda/trigger/api-gateway-authorizer';
import {fieldGroupStaticHandler} from './src/handler/macro/field-group-static';
import {AuthenticatedContext} from './src/type/authorizer';

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

const failAuthorization = (callback: Callback, logMessage: string): void => {
  console.log(logMessage);
  return callback('Unauthorized');
};

export const generateIAMPolicy = (
  effect: 'Allow' | 'Deny',
  principalId: string,
  resource: string,
  context?: AuthenticatedContext
): AuthResponse => ({
  ...context && {context},
  policyDocument: {
    Statement: [
      {
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource
      }
    ],
    Version: '2012-10-17'
  },
  principalId
});

export const getAuthorizerHandler = (): Handler<APIGatewayRequestAuthorizerEvent, CustomAuthorizerResult | void> => async (
  {
    methodArn, queryStringParameters
  }, _context, callback
): Promise<AuthResponse | void> => {
  const authToken = queryStringParameters?.jwt;
  const principalId = queryStringParameters?.user_account_id;
  if (!authToken || !principalId) {
    return failAuthorization(callback, 'Missing auth token.');
  }

  return generateIAMPolicy('Allow', principalId, methodArn);
};

export const authorizer = getAuthorizerHandler();

