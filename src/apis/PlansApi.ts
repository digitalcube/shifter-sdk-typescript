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
import { PreviousPlanResponse } from '../models/PreviousPlanResponse';

/**
 * no description
 */
export class PlansApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * (Previous Plan) Get all plans. An invited user cannot be accessed this API.
   */
  public async plansGet(options?: Configuration): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/plans';

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
   * (Previous plan) Get details of plan.
   * @param planName Name of play. Specify free or personal or business or agency or agency plus
   * @param planType Team of plan. Specify annual or monthly
   */
  public async plansPlanNamePlanTypeGet(
    planName: 'free' | 'personal' | 'business' | 'agency' | 'agency plus',
    planType: 'annual' | 'monthly',
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'planName' is not null or undefined
    if (planName === null || planName === undefined) {
      throw new RequiredError(
        'Required parameter planName was null or undefined when calling plansPlanNamePlanTypeGet.'
      );
    }

    // verify required parameter 'planType' is not null or undefined
    if (planType === null || planType === undefined) {
      throw new RequiredError(
        'Required parameter planType was null or undefined when calling plansPlanNamePlanTypeGet.'
      );
    }

    // Path Params
    const localVarPath = '/plans/{plan_name}/{plan_type}'
      .replace('{' + 'plan_name' + '}', encodeURIComponent(String(planName)))
      .replace('{' + 'plan_type' + '}', encodeURIComponent(String(planType)));

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

export class PlansApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to plansGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async plansGet(response: ResponseContext): Promise<any> {
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
   * @params response Response returned by the server for a request to plansPlanNamePlanTypeGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async plansPlanNamePlanTypeGet(
    response: ResponseContext
  ): Promise<PreviousPlanResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PreviousPlanResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PreviousPlanResponse',
        ''
      ) as PreviousPlanResponse;
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
      const body: PreviousPlanResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PreviousPlanResponse',
        ''
      ) as PreviousPlanResponse;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
