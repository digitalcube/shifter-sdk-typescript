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

import { CommonErrorResponse } from '../models/CommonErrorResponse';
import { RoleGetResponse } from '../models/RoleGetResponse';

/**
 * no description
 */
export class RolesApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * List team member roles
   */
  public async rolesGet(options?: Configuration): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/roles';

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a shifter roles
   * @param name Name of role
   */
  public async rolesNameGet(
    name: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling rolesNameGet.'
      );
    }

    // Path Params
    const localVarPath = '/roles/{name}'.replace(
      '{' + 'name' + '}',
      encodeURIComponent(String(name))
    );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class RolesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to rolesGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async rolesGet(
    response: ResponseContext
  ): Promise<Array<RoleGetResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<RoleGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<RoleGetResponse>',
        ''
      ) as Array<RoleGetResponse>;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<RoleGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<RoleGetResponse>',
        ''
      ) as Array<RoleGetResponse>;
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
   * @params response Response returned by the server for a request to rolesNameGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async rolesNameGet(
    response: ResponseContext
  ): Promise<RoleGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: RoleGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'RoleGetResponse',
        ''
      ) as RoleGetResponse;
      return body;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RoleGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'RoleGetResponse',
        ''
      ) as RoleGetResponse;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
