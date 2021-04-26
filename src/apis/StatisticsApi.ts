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

import { UsageSummaryGetResponse } from '../models/UsageSummaryGetResponse';

/**
 * no description
 */
export class StatisticsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * (Previous Plan) Monthly Statistics of Site usage
   */
  public async statisticsUsageSummaryGet(
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/statistics/usage_summary';

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

export class StatisticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to statisticsUsageSummaryGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async statisticsUsageSummaryGet(
    response: ResponseContext
  ): Promise<UsageSummaryGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: UsageSummaryGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'UsageSummaryGetResponse',
        ''
      ) as UsageSummaryGetResponse;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSummaryGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'UsageSummaryGetResponse',
        ''
      ) as UsageSummaryGetResponse;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
