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
import { InlineObject28 } from '../models/InlineObject28';
import { InlineObject29 } from '../models/InlineObject29';
import { InlineObject30 } from '../models/InlineObject30';
import { InlineObject31 } from '../models/InlineObject31';
import { InlineObject32 } from '../models/InlineObject32';
import { InlineResponse20013 } from '../models/InlineResponse20013';

/**
 * no description
 */
export class DomainsReplacedToTheSiteDomainsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Attache your domain to Shifter CDN
   * @param domain
   * @param request
   */
  public async domainsDomainAttachDomainToShifterCdnPost(
    domain: string,
    request: InlineObject30,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainAttachDomainToShifterCdnPost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling domainsDomainAttachDomainToShifterCdnPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/attach_domain_to_shifter_cdn'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
      ObjectSerializer.serialize(request, 'InlineObject30', ''),
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
   * Delete the added domain
   * @param domain
   */
  public async domainsDomainDelete(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainDelete.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
   * Detach your domain from Shifter CDN
   * @param domain
   */
  public async domainsDomainDetachDomainFromShifterCdnPost(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainDetachDomainFromShifterCdnPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/detach_domain_from_shifter_cdn'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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

  /**
   * You can get the authentication information of the domain registered by the user
   * @param domain
   */
  public async domainsDomainGet(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainGet.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
   * Add your domain
   * @param domain
   * @param request
   */
  public async domainsDomainPost(
    domain: string,
    request?: InlineObject28,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
      ObjectSerializer.serialize(request, 'InlineObject28', ''),
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
   * Resend the approval mail of the SSL certificate
   * @param domain
   */
  public async domainsDomainResendValidationEmailPost(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainResendValidationEmailPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/resend_validation_email'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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

  /**
   * Select publishing Subject Alternative Name
   * @param domain
   * @param request
   */
  public async domainsDomainSelectionPost(
    domain: string,
    request: InlineObject29,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainSelectionPost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling domainsDomainSelectionPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/selection'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
      ObjectSerializer.serialize(request, 'InlineObject29', ''),
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
   * Validating domain by CNAME
   * @param domain
   * @param request
   */
  public async domainsDomainValidateOperationDnsPost(
    domain: string,
    request?: InlineObject31,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainValidateOperationDnsPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/validate_operation/dns'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
      ObjectSerializer.serialize(request, 'InlineObject31', ''),
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
   * Get validation status of specified domain
   * @param domain
   */
  public async domainsDomainValidateOperationDnsValidationGet(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainValidateOperationDnsValidationGet.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/validate_operation/dns/validation'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
   * Re validating domain by dns
   * @param domain
   */
  public async domainsDomainValidateOperationDnsValidationPost(
    domain: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainValidateOperationDnsValidationPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/validate_operation/dns/validation'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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

  /**
   * Validating domain by email
   * @param domain
   * @param request
   */
  public async domainsDomainValidateOperationEmailPost(
    domain: string,
    request?: InlineObject32,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        'Required parameter domain was null or undefined when calling domainsDomainValidateOperationEmailPost.'
      );
    }

    // Path Params
    const localVarPath = '/domains/{domain}/validate_operation/email'.replace(
      '{' + 'domain' + '}',
      encodeURIComponent(String(domain))
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
      ObjectSerializer.serialize(request, 'InlineObject32', ''),
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
   * You can get information of your domains registered in shifter
   * @param filter If it is &#x60;sslValid&#x60;, you can only get certified domains
   */
  public async domainsGet(
    filter?: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/domains';

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam(
        'filter',
        ObjectSerializer.serialize(filter, 'string', '')
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
}

export class DomainsReplacedToTheSiteDomainsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to domainsDomainAttachDomainToShifterCdnPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainAttachDomainToShifterCdnPost(
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
    if (isCodeInRange('409', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(409, body);
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
   * @params response Response returned by the server for a request to domainsDomainDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainDelete(response: ResponseContext): Promise<void> {
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
    if (isCodeInRange('420', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(420, body);
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
   * @params response Response returned by the server for a request to domainsDomainDetachDomainFromShifterCdnPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainDetachDomainFromShifterCdnPost(
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
   * @params response Response returned by the server for a request to domainsDomainGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainGet(response: ResponseContext): Promise<any> {
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
   * @params response Response returned by the server for a request to domainsDomainPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainPost(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to domainsDomainResendValidationEmailPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainResendValidationEmailPost(
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
   * @params response Response returned by the server for a request to domainsDomainSelectionPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainSelectionPost(
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
   * @params response Response returned by the server for a request to domainsDomainValidateOperationDnsPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainValidateOperationDnsPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to domainsDomainValidateOperationDnsValidationGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainValidateOperationDnsValidationGet(
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
   * @params response Response returned by the server for a request to domainsDomainValidateOperationDnsValidationPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainValidateOperationDnsValidationPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to domainsDomainValidateOperationEmailPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsDomainValidateOperationEmailPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to domainsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async domainsGet(
    response: ResponseContext
  ): Promise<Array<InlineResponse20013>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<InlineResponse20013> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse20013>',
        ''
      ) as Array<InlineResponse20013>;
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
      const body: Array<InlineResponse20013> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse20013>',
        ''
      ) as Array<InlineResponse20013>;
      return body;
    }

    let body = response.body || '';
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
