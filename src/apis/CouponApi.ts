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
import { CouponGetResponse } from '../models/CouponGetResponse';

/**
 * no description
 */
export class CouponApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Get coupon
   */
  public async couponGet(options?: Configuration): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/coupon';

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
   * Register coupon code.
   * @param code Code of coupon
   */
  public async couponsCodePost(
    code: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'code' is not null or undefined
    if (code === null || code === undefined) {
      throw new RequiredError(
        'Required parameter code was null or undefined when calling couponsCodePost.'
      );
    }

    // Path Params
    const localVarPath = '/coupons/{code}'.replace(
      '{' + 'code' + '}',
      encodeURIComponent(String(code))
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class CouponApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to couponGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async couponGet(
    response: ResponseContext
  ): Promise<CouponGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: CouponGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CouponGetResponse',
        ''
      ) as CouponGetResponse;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CouponGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CouponGetResponse',
        ''
      ) as CouponGetResponse;
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
   * @params response Response returned by the server for a request to couponsCodePost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async couponsCodePost(response: ResponseContext): Promise<void> {
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
}
