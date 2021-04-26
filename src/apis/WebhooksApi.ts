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
import { InlineObject19 } from '../models/InlineObject19';
import { InlineObject20 } from '../models/InlineObject20';
import { InlineObject21 } from '../models/InlineObject21';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';

/**
 * no description
 */
export class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Delete webhooks
   * @param siteId Site ID
   * @param request
   */
  public async webhooksSiteSiteIdDelete(
    siteId: string,
    request: InlineObject21,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling webhooksSiteSiteIdDelete.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling webhooksSiteSiteIdDelete.'
      );
    }

    // Path Params
    const localVarPath = '/webhooks/site/{site_id}'.replace(
      '{' + 'site_id' + '}',
      encodeURIComponent(String(siteId))
    );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'InlineObject21', ''),
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
   * Get webhooks
   * @param siteId Site ID
   */
  public async webhooksSiteSiteIdGet(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling webhooksSiteSiteIdGet.'
      );
    }

    // Path Params
    const localVarPath = '/webhooks/site/{site_id}'.replace(
      '{' + 'site_id' + '}',
      encodeURIComponent(String(siteId))
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

  /**
   * List webhook history
   * @param siteId Site ID
   */
  public async webhooksSiteSiteIdHistoryGet(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling webhooksSiteSiteIdHistoryGet.'
      );
    }

    // Path Params
    const localVarPath = '/webhooks/site/{site_id}/history'.replace(
      '{' + 'site_id' + '}',
      encodeURIComponent(String(siteId))
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

  /**
   * Create webhooks
   * @param siteId Site ID
   * @param request
   */
  public async webhooksSiteSiteIdPost(
    siteId: string,
    request: InlineObject20,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling webhooksSiteSiteIdPost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling webhooksSiteSiteIdPost.'
      );
    }

    // Path Params
    const localVarPath = '/webhooks/site/{site_id}'.replace(
      '{' + 'site_id' + '}',
      encodeURIComponent(String(siteId))
    );

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
      ObjectSerializer.serialize(request, 'InlineObject20', ''),
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
   * Update webhooks
   * @param siteId Site ID
   * @param request
   */
  public async webhooksSiteSiteIdPut(
    siteId: string,
    request: InlineObject19,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling webhooksSiteSiteIdPut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling webhooksSiteSiteIdPut.'
      );
    }

    // Path Params
    const localVarPath = '/webhooks/site/{site_id}'.replace(
      '{' + 'site_id' + '}',
      encodeURIComponent(String(siteId))
    );

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
      ObjectSerializer.serialize(request, 'InlineObject19', ''),
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

export class WebhooksApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to webhooksSiteSiteIdDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async webhooksSiteSiteIdDelete(
    response: ResponseContext
  ): Promise<Array<InlineResponse2006>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(400, body);
    }
    if (isCodeInRange('403', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
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
   * @params response Response returned by the server for a request to webhooksSiteSiteIdGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async webhooksSiteSiteIdGet(
    response: ResponseContext
  ): Promise<Array<InlineResponse2006>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
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
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
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
   * @params response Response returned by the server for a request to webhooksSiteSiteIdHistoryGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async webhooksSiteSiteIdHistoryGet(
    response: ResponseContext
  ): Promise<Array<InlineResponse2007>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<InlineResponse2007> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2007>',
        ''
      ) as Array<InlineResponse2007>;
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
      const body: Array<InlineResponse2007> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2007>',
        ''
      ) as Array<InlineResponse2007>;
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
   * @params response Response returned by the server for a request to webhooksSiteSiteIdPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async webhooksSiteSiteIdPost(
    response: ResponseContext
  ): Promise<Array<InlineResponse2006>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(400, body);
    }
    if (isCodeInRange('403', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
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
   * @params response Response returned by the server for a request to webhooksSiteSiteIdPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async webhooksSiteSiteIdPut(
    response: ResponseContext
  ): Promise<Array<InlineResponse2006>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(400, body);
    }
    if (isCodeInRange('403', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<InlineResponse2006> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2006>',
        ''
      ) as Array<InlineResponse2006>;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
