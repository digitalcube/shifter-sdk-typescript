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
import { DomainGetResponse } from '../models/DomainGetResponse';
import { DomainValidationGetResponse } from '../models/DomainValidationGetResponse';
import { InlineObject10 } from '../models/InlineObject10';
import { InlineObject11 } from '../models/InlineObject11';
import { InlineObject7 } from '../models/InlineObject7';
import { InlineObject8 } from '../models/InlineObject8';
import { InlineObject9 } from '../models/InlineObject9';

/**
 * no description
 */
export class SiteDomainsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * attach domain to the Shifter Site
   * @param siteId Site ID
   * @param domain Name of domain which is attached
   * @param request
   */
  public async sitesSiteIdDomainsDomainAttachPost(
    siteId: string,
    domain: string,
    request?: InlineObject9,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainAttachPost.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainAttachPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/attach'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
      ObjectSerializer.serialize(request, 'InlineObject9', ''),
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
   * Remove domain
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public async sitesSiteIdDomainsDomainDelete(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainDelete.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
   * detach the domain from Shifter Site.
   * @param siteId Site ID
   * @param domain Name of domain
   * @param request
   */
  public async sitesSiteIdDomainsDomainDetachPost(
    siteId: string,
    domain: string,
    request?: InlineObject10,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainDetachPost.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainDetachPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/detach'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
      ObjectSerializer.serialize(request, 'InlineObject10', ''),
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
   * Get a domain under specific site
   * @param siteId Site ID
   * @param domain
   */
  public async sitesSiteIdDomainsDomainGet(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainGet.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
   * add domain of Site
   * @param siteId Site ID
   * @param domain Name of domain
   * @param request
   */
  public async sitesSiteIdDomainsDomainPost(
    siteId: string,
    domain: string,
    request?: InlineObject8,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainPost.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
      ObjectSerializer.serialize(request, 'InlineObject8', ''),
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
   * reset deployment domain
   * @param siteId
   * @param domain
   */
  public async sitesSiteIdDomainsDomainSelectionDelete(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainSelectionDelete.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainSelectionDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/selection'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
   * choose deployment domain
   * @param siteId
   * @param domain
   * @param request
   */
  public async sitesSiteIdDomainsDomainSelectionPost(
    siteId: string,
    domain: string,
    request?: InlineObject11,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainSelectionPost.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainSelectionPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/selection'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
      ObjectSerializer.serialize(request, 'InlineObject11', ''),
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
   * Get validation status of domain
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public async sitesSiteIdDomainsDomainValidationGet(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainValidationGet.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainValidationGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/validation'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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
   * request(again) domain validation
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public async sitesSiteIdDomainsDomainValidationPost(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsDomainValidationPost.'
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling sitesSiteIdDomainsDomainValidationPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains/{domain}/validation'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

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

  /**
   * list domains
   * @param siteId Site ID
   * @param request
   */
  public async sitesSiteIdDomainsGet(
    siteId: string,
    request?: InlineObject7,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdDomainsGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/domains'.replace(
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
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'InlineObject7', ''),
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

export class SiteDomainsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainAttachPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainAttachPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainDelete(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainDetachPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainDetachPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainGet(
    response: ResponseContext
  ): Promise<DomainGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: DomainGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'DomainGetResponse',
        ''
      ) as DomainGetResponse;
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
      const body: DomainGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'DomainGetResponse',
        ''
      ) as DomainGetResponse;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainPost(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainSelectionDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainSelectionDelete(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainSelectionPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainSelectionPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainValidationGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainValidationGet(
    response: ResponseContext
  ): Promise<DomainValidationGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: DomainValidationGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'DomainValidationGetResponse',
        ''
      ) as DomainValidationGetResponse;
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
      const body: DomainValidationGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'DomainValidationGetResponse',
        ''
      ) as DomainValidationGetResponse;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsDomainValidationPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsDomainValidationPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to sitesSiteIdDomainsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdDomainsGet(
    response: ResponseContext
  ): Promise<Array<DomainGetResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<DomainGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<DomainGetResponse>',
        ''
      ) as Array<DomainGetResponse>;
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
      const body: Array<DomainGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<DomainGetResponse>',
        ''
      ) as Array<DomainGetResponse>;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
