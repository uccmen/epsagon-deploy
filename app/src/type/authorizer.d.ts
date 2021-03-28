import {APIGatewayAuthorizerResultContext} from "aws-lambda";

export declare interface AuthenticatedContext extends APIGatewayAuthorizerResultContext {
  accountId?: string;
  clientKey: string;
  tenant: string;
}
