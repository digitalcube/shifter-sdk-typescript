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

import { CdnStatusGetResponse } from '../models/CdnStatusGetResponse';
import { CommonErrorResponse } from '../models/CommonErrorResponse';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineObject6 } from '../models/InlineObject6';

/**
 * no description
 */
export class SiteSettingsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Disabling WordPress backups
   * @param siteId Site ID
   */
  public async sitesSiteIdBackupDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdBackupDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/backup'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Enabling WordPress backups
   * @param siteId Site ID
   */
  public async sitesSiteIdBackupPost(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdBackupPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/backup'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Disabling basic authentication
   * @param siteId Site ID
   */
  public async sitesSiteIdBasicAuthDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdBasicAuthDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/basic_auth'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Enabling basic authentication
   * @param siteId Site ID
   */
  public async sitesSiteIdBasicAuthPost(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdBasicAuthPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/basic_auth'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get the Shifter CDN status
   * @param siteId Site ID
   */
  public async sitesSiteIdCdnStatusGet(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdCdnStatusGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/cdn_status'.replace(
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
   * delete destination of access logs
   * @param siteId Site ID
   */
  public async sitesSiteIdLogsPathDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdLogsPathDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/logs/path'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * set or update destination of access logs
   * @param siteId Site ID
   * @param s3BucketName
   */
  public async sitesSiteIdLogsPathPut(
    siteId: string,
    s3BucketName: InlineObject6,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdLogsPathPut.'
      );
    }

    // verify required parameter 's3BucketName' is not null or undefined
    if (s3BucketName === null || s3BucketName === undefined) {
      throw new RequiredError(
        'Required parameter s3BucketName was null or undefined when calling sitesSiteIdLogsPathPut.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/logs/path'.replace(
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
      ObjectSerializer.serialize(s3BucketName, 'InlineObject6', ''),
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
   * Disabling media CDN
   * @param siteId Site ID
   */
  public async sitesSiteIdMediaCdnDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdMediaCdnDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/media_cdn'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Enabling media CDN
   * @param siteId Site ID
   */
  public async sitesSiteIdMediaCdnPost(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdMediaCdnPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/media_cdn'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * remove protection of delete
   * @param siteId
   */
  public async sitesSiteIdProtectionDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdProtectionDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/protection'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * add protection of delete
   * @param siteId
   */
  public async sitesSiteIdProtectionPost(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdProtectionPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/protection'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * update site settings. Updatable attributes are site_name, All in one WP migration configuration, Shifter media cdn configuration, and automatic publish configuration.
   * @param siteId Site ID
   * @param request
   */
  public async sitesSiteIdPut(
    siteId: string,
    request: InlineObject2,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdPut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling sitesSiteIdPut.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}'.replace(
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
      ObjectSerializer.serialize(request, 'InlineObject2', ''),
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
   * Update your site name
   * @param siteId Site ID
   * @param request
   */
  public async sitesSiteIdSiteNamePut(
    siteId: string,
    request: InlineObject3,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdSiteNamePut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling sitesSiteIdSiteNamePut.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/site_name'.replace(
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
      ObjectSerializer.serialize(request, 'InlineObject3', ''),
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
   * Remove subdirectory name for publishing
   * @param siteId Site ID
   */
  public async sitesSiteIdSiteSubdirDelete(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdSiteSubdirDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/site_subdir'.replace(
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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods['Authorization'];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Set subdirectory name for publishing
   * @param siteId Site ID
   * @param dirName
   */
  public async sitesSiteIdSiteSubdirPut(
    siteId: string,
    dirName: InlineObject5,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdSiteSubdirPut.'
      );
    }

    // verify required parameter 'dirName' is not null or undefined
    if (dirName === null || dirName === undefined) {
      throw new RequiredError(
        'Required parameter dirName was null or undefined when calling sitesSiteIdSiteSubdirPut.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/site_subdir'.replace(
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
      ObjectSerializer.serialize(dirName, 'InlineObject5', ''),
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

export class SiteSettingsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to sitesSiteIdBackupDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdBackupDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdBackupPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdBackupPost(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to sitesSiteIdBasicAuthDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdBasicAuthDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdBasicAuthPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdBasicAuthPost(
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
   * @params response Response returned by the server for a request to sitesSiteIdCdnStatusGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdCdnStatusGet(
    response: ResponseContext
  ): Promise<CdnStatusGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: CdnStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CdnStatusGetResponse',
        ''
      ) as CdnStatusGetResponse;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CdnStatusGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CdnStatusGetResponse',
        ''
      ) as CdnStatusGetResponse;
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
   * @params response Response returned by the server for a request to sitesSiteIdLogsPathDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdLogsPathDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdLogsPathPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdLogsPathPut(
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
   * @params response Response returned by the server for a request to sitesSiteIdMediaCdnDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdMediaCdnDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdMediaCdnPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdMediaCdnPost(
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
   * @params response Response returned by the server for a request to sitesSiteIdProtectionDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdProtectionDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdProtectionPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdProtectionPost(
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
   * @params response Response returned by the server for a request to sitesSiteIdPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdPut(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to sitesSiteIdSiteNamePut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdSiteNamePut(
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
   * @params response Response returned by the server for a request to sitesSiteIdSiteSubdirDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdSiteSubdirDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdSiteSubdirPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdSiteSubdirPut(
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
}
