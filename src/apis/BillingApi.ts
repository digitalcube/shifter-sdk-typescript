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
import { InlineObject12 } from '../models/InlineObject12';
import { InlineObject13 } from '../models/InlineObject13';
import { InlineObject14 } from '../models/InlineObject14';
import { PlanGetResponse } from '../models/PlanGetResponse';
import { SubscriptionCreateResponse } from '../models/SubscriptionCreateResponse';
import { SubscriptionGetResponse } from '../models/SubscriptionGetResponse';
import { SubscriptionUpdateResponse } from '../models/SubscriptionUpdateResponse';

/**
 * no description
 */
export class BillingApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Update payment method
   * @param request
   */
  public async billingPost(
    request: InlineObject14,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling billingPost.'
      );
    }

    // Path Params
    const localVarPath = '/billing';

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
      ObjectSerializer.serialize(request, 'InlineObject14', ''),
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
   * Get available plans
   * @param interval
   */
  public async billingsPlansGet(
    interval?: 'all' | 'month' | 'year',
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/billings/plans';

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (interval !== undefined) {
      requestContext.setQueryParam(
        'interval',
        ObjectSerializer.serialize(interval, "'all' | 'month' | 'year'", '')
      );
    }

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
   * List all subscriptions in the current shifter account
   */
  public async billingsSubscriptionsGet(
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/billings/subscriptions';

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
   * Create a subscription.
   * @param plan
   */
  public async billingsSubscriptionsPost(
    plan: InlineObject12,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'plan' is not null or undefined
    if (plan === null || plan === undefined) {
      throw new RequiredError(
        'Required parameter plan was null or undefined when calling billingsSubscriptionsPost.'
      );
    }

    // Path Params
    const localVarPath = '/billings/subscriptions';

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
      ObjectSerializer.serialize(plan, 'InlineObject12', ''),
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
   * Getting subscription status
   */
  public async billingsSubscriptionsStatusGet(
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/billings/subscriptions/status';

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
   * Delete a subscription
   * @param subscriptionId
   */
  public async billingsSubscriptionsSubscriptionIdDelete(
    subscriptionId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new RequiredError(
        'Required parameter subscriptionId was null or undefined when calling billingsSubscriptionsSubscriptionIdDelete.'
      );
    }

    // Path Params
    const localVarPath = '/billings/subscriptions/{subscription_id}'.replace(
      '{' + 'subscription_id' + '}',
      encodeURIComponent(String(subscriptionId))
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update a subscription. Calling this API is allowed to site owner or Administrator members
   * @param subscriptionId Subscription id which update
   * @param plan
   */
  public async billingsSubscriptionsSubscriptionIdPost(
    subscriptionId: string,
    plan: InlineObject13,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new RequiredError(
        'Required parameter subscriptionId was null or undefined when calling billingsSubscriptionsSubscriptionIdPost.'
      );
    }

    // verify required parameter 'plan' is not null or undefined
    if (plan === null || plan === undefined) {
      throw new RequiredError(
        'Required parameter plan was null or undefined when calling billingsSubscriptionsSubscriptionIdPost.'
      );
    }

    // Path Params
    const localVarPath = '/billings/subscriptions/{subscription_id}'.replace(
      '{' + 'subscription_id' + '}',
      encodeURIComponent(String(subscriptionId))
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
      ObjectSerializer.serialize(plan, 'InlineObject13', ''),
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

export class BillingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to billingPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingPost(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(400, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        ''
      ) as void;
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
   * @params response Response returned by the server for a request to billingsPlansGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsPlansGet(
    response: ResponseContext
  ): Promise<Array<PlanGetResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<PlanGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<PlanGetResponse>',
        ''
      ) as Array<PlanGetResponse>;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<string>(
        response.httpStatusCode,
        'Interval parameter is wrong'
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<PlanGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<PlanGetResponse>',
        ''
      ) as Array<PlanGetResponse>;
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
   * @params response Response returned by the server for a request to billingsSubscriptionsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsSubscriptionsGet(
    response: ResponseContext
  ): Promise<Array<SubscriptionGetResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<SubscriptionGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<SubscriptionGetResponse>',
        ''
      ) as Array<SubscriptionGetResponse>;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<SubscriptionGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<SubscriptionGetResponse>',
        ''
      ) as Array<SubscriptionGetResponse>;
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
   * @params response Response returned by the server for a request to billingsSubscriptionsPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsSubscriptionsPost(
    response: ResponseContext
  ): Promise<SubscriptionCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: SubscriptionCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SubscriptionCreateResponse',
        ''
      ) as SubscriptionCreateResponse;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<string>(
        response.httpStatusCode,
        'Invalid request'
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SubscriptionCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SubscriptionCreateResponse',
        ''
      ) as SubscriptionCreateResponse;
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
   * @params response Response returned by the server for a request to billingsSubscriptionsStatusGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsSubscriptionsStatusGet(
    response: ResponseContext
  ): Promise<any> {
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
    if (isCodeInRange('400', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(400, body);
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to billingsSubscriptionsSubscriptionIdDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsSubscriptionsSubscriptionIdDelete(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<string>(
        response.httpStatusCode,
        'Invalid Parameter'
      );
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<string>(
        response.httpStatusCode,
        'Subscription did not find'
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        ''
      ) as void;
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
   * @params response Response returned by the server for a request to billingsSubscriptionsSubscriptionIdPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async billingsSubscriptionsSubscriptionIdPost(
    response: ResponseContext
  ): Promise<SubscriptionUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      const body: SubscriptionUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SubscriptionUpdateResponse',
        ''
      ) as SubscriptionUpdateResponse;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SubscriptionUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SubscriptionUpdateResponse',
        ''
      ) as SubscriptionUpdateResponse;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
