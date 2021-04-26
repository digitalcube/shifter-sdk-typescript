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

import { ArtifactDownloadResponse } from '../models/ArtifactDownloadResponse';
import { ArtifactGetResponse } from '../models/ArtifactGetResponse';
import { CommonErrorResponse } from '../models/CommonErrorResponse';
import { InlineObject22 } from '../models/InlineObject22';
import { InlineObject23 } from '../models/InlineObject23';
import { InlineObject24 } from '../models/InlineObject24';
import { InlineObject25 } from '../models/InlineObject25';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2013 } from '../models/InlineResponse2013';
import { InlineResponse2014 } from '../models/InlineResponse2014';

/**
 * no description
 */
export class ArtifactsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Get the URL of the artifact. All published assets of the site is included.
   * @param projectId Site ID
   * @param artifactId Artifact ID
   */
  public async projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
    projectId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError(
        'Required parameter projectId was null or undefined when calling projectsProjectIdArtifactsArtifactIdDownloadUrlGet.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling projectsProjectIdArtifactsArtifactIdDownloadUrlGet.'
      );
    }

    // Path Params
    const localVarPath = '/projects/{project_id}/artifacts/{artifact_id}/download_url'
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Update your artifact name.
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param request
   */
  public async sitesSiteIdArtifactsArtifactIdArtifactNamePut(
    siteId: string,
    artifactId: string,
    request: InlineObject24,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdArtifactNamePut.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdArtifactNamePut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling sitesSiteIdArtifactsArtifactIdArtifactNamePut.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/artifact_name'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
      ObjectSerializer.serialize(request, 'InlineObject24', ''),
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
   * Retrieve path of WordPress from backup archive
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public async sitesSiteIdArtifactsArtifactIdBackupUrlGet(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdBackupUrlGet.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdBackupUrlGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/backup_url'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Delete artifacts
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public async sitesSiteIdArtifactsArtifactIdDelete(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDelete.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Set the artifact to public on the CDN
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param deployType Deployment Type (only shifter_cdn)
   */
  public async sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
    siteId: string,
    artifactId: string,
    deployType: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDeployDeployTypePost.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDeployDeployTypePost.'
      );
    }

    // verify required parameter 'deployType' is not null or undefined
    if (deployType === null || deployType === undefined) {
      throw new RequiredError(
        'Required parameter deployType was null or undefined when calling sitesSiteIdArtifactsArtifactIdDeployDeployTypePost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/deploy/{deploy_type}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
      )
      .replace(
        '{' + 'deploy_type' + '}',
        encodeURIComponent(String(deployType))
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
   * Get the URL of the artifact. All published assets of the site is included.
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public async sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDownloadUrlGet.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdDownloadUrlGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/download_url'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Stop generating process
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public async sitesSiteIdArtifactsArtifactIdGeneratorDelete(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdGeneratorDelete.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdGeneratorDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/generator'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Enable artifact previews
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public async sitesSiteIdArtifactsArtifactIdPreviewPost(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPreviewPost.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPreviewPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/preview'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
   * Delete scheduled publish
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param jobId Schedule Job ID
   */
  public async sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
    siteId: string,
    artifactId: string,
    jobId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdDelete.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdDelete.'
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError(
        'Required parameter jobId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdDelete.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/publish/{job_id}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
      )
      .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

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
   * Update publish schedule
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param jobId Schedule Job ID
   * @param request
   */
  public async sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
    siteId: string,
    artifactId: string,
    jobId: string,
    request: InlineObject23,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdPost.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdPost.'
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError(
        'Required parameter jobId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdPost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishJobIdPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/publish/{job_id}'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
      )
      .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

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
      ObjectSerializer.serialize(request, 'InlineObject23', ''),
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
   * Set the artifact to public on the Shifter CDN. OR Set the publish date of the artifact
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param request
   */
  public async sitesSiteIdArtifactsArtifactIdPublishPost(
    siteId: string,
    artifactId: string,
    request?: InlineObject22,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishPost.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdPublishPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/publish'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
      ObjectSerializer.serialize(request, 'InlineObject22', ''),
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
   * execute webhook of specific artifact
   * @param siteId
   * @param artifactId
   * @param request
   */
  public async sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
    siteId: string,
    artifactId: string,
    request?: InlineObject25,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsArtifactIdWebhookRunnerPost.'
      );
    }

    // verify required parameter 'artifactId' is not null or undefined
    if (artifactId === null || artifactId === undefined) {
      throw new RequiredError(
        'Required parameter artifactId was null or undefined when calling sitesSiteIdArtifactsArtifactIdWebhookRunnerPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts/{artifact_id}/webhook_runner'
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)))
      .replace(
        '{' + 'artifact_id' + '}',
        encodeURIComponent(String(artifactId))
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
      ObjectSerializer.serialize(request, 'InlineObject25', ''),
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
   * List all artifacts.
   * @param siteId Site ID
   */
  public async sitesSiteIdArtifactsGet(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts'.replace(
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
   * Generate artifact.
   * @param siteId Site ID
   */
  public async sitesSiteIdArtifactsPost(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdArtifactsPost.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/artifacts'.replace(
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
   * You can get the process of generating
   * @param siteId
   */
  public async sitesSiteIdCheckGeneratorProcessGet(
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling sitesSiteIdCheckGeneratorProcessGet.'
      );
    }

    // Path Params
    const localVarPath = '/sites/{site_id}/check_generator_process'.replace(
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
}

export class ArtifactsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to projectsProjectIdArtifactsArtifactIdDownloadUrlGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
    response: ResponseContext
  ): Promise<ArtifactDownloadResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: ArtifactDownloadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ArtifactDownloadResponse',
        ''
      ) as ArtifactDownloadResponse;
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
      const body: ArtifactDownloadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ArtifactDownloadResponse',
        ''
      ) as ArtifactDownloadResponse;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdArtifactNamePut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdArtifactNamePut(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdBackupUrlGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdBackupUrlGet(
    response: ResponseContext
  ): Promise<InlineResponse2008> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2008 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2008',
        ''
      ) as InlineResponse2008;
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
      const body: InlineResponse2008 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2008',
        ''
      ) as InlineResponse2008;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdDeployDeployTypePost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdDownloadUrlGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
    response: ResponseContext
  ): Promise<ArtifactDownloadResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: ArtifactDownloadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ArtifactDownloadResponse',
        ''
      ) as ArtifactDownloadResponse;
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
      const body: ArtifactDownloadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ArtifactDownloadResponse',
        ''
      ) as ArtifactDownloadResponse;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdGeneratorDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdGeneratorDelete(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdPreviewPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdPreviewPost(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdPublishJobIdDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
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
    if (isCodeInRange('403', response.httpStatusCode)) {
      const body: CommonErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'CommonErrorResponse',
        ''
      ) as CommonErrorResponse;
      throw new ApiException<CommonErrorResponse>(403, body);
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdPublishJobIdPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
    response: ResponseContext
  ): Promise<InlineResponse2014> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: InlineResponse2014 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2014',
        ''
      ) as InlineResponse2014;
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
      const body: InlineResponse2014 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2014',
        ''
      ) as InlineResponse2014;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdPublishPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdPublishPost(
    response: ResponseContext
  ): Promise<InlineResponse2013> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: InlineResponse2013 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2013',
        ''
      ) as InlineResponse2013;
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
      const body: InlineResponse2013 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2013',
        ''
      ) as InlineResponse2013;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsArtifactIdWebhookRunnerPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsGet(
    response: ResponseContext
  ): Promise<Array<ArtifactGetResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<ArtifactGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<ArtifactGetResponse>',
        ''
      ) as Array<ArtifactGetResponse>;
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
      const body: Array<ArtifactGetResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<ArtifactGetResponse>',
        ''
      ) as Array<ArtifactGetResponse>;
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
   * @params response Response returned by the server for a request to sitesSiteIdArtifactsPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdArtifactsPost(
    response: ResponseContext
  ): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
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
   * @params response Response returned by the server for a request to sitesSiteIdCheckGeneratorProcessGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sitesSiteIdCheckGeneratorProcessGet(
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
}
