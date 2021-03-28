import {filter} from '@atlaskit/adf-utils';
import {Mention} from '@atlaskit/mention';
import {APIGatewayEvent} from 'aws-lambda';


export const fieldGroupStaticHandler = async (event: APIGatewayEvent) => {
  console.log('Mention', Mention);
  const fieldGroupMacro = filter(
    {type: 'something'},
    (node) =>
      node.attrs?.extensionKey === 'field-group' &&
      node.attrs?.parameters?.macroMetadata.macroId?.value === 'someId'
  );
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      fieldGroupMacro,
    }, null, 2),
  };
}
