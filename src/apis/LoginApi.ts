// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration } from '../configuration';
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { isCodeInRange } from '../util';

import { InlineObject } from '../models/InlineObject';
import { LoginErrorResponse } from '../models/LoginErrorResponse';
import { LoginPostRequest } from '../models/LoginPostRequest';
import { LoginPostResponse } from '../models/LoginPostResponse';

/**
 * no description
 */
export class LoginApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Login to the Shifter. username and password are required. Return AccessToken and RefreshToken when the request succeeded.
   * @param request
   */
  public async loginPost(
    request: LoginPostRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling loginPost.'
      );
    }

    // Path Params
    const localVarPath = '/login';

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'LoginPostRequest', ''),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Refresh AccessToken by RefreshToken. Return new AccessToken when request succeeded.
   * @param request
   */
  public async loginPut(
    request: InlineObject,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling loginPut.'
      );
    }

    // Path Params
    const localVarPath = '/login';

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'InlineObject', ''),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class LoginApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to loginPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async loginPost(
    response: ResponseContext
  ): Promise<LoginPostResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: LoginPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LoginPostResponse',
        ''
      ) as LoginPostResponse;
      return body;
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      const body: LoginErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LoginErrorResponse',
        ''
      ) as LoginErrorResponse;
      throw new ApiException<LoginErrorResponse>(401, body);
    }
    if (isCodeInRange('403', response.httpStatusCode)) {
      const body: LoginErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LoginErrorResponse',
        ''
      ) as LoginErrorResponse;
      throw new ApiException<LoginErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LoginPostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LoginPostResponse',
        ''
      ) as LoginPostResponse;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to loginPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async loginPut(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'any',
        ''
      ) as any;
      return body;
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'any',
        ''
      ) as any;
      throw new ApiException<any>(401, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'any',
        ''
      ) as any;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
