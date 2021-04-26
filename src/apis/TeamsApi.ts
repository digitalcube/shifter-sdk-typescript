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
import { InlineObject } from '../models/InlineObject';
import { InlineObject15 } from '../models/InlineObject15';
import { InlineObject16 } from '../models/InlineObject16';
import { InlineObject17 } from '../models/InlineObject17';
import { InlineObject18 } from '../models/InlineObject18';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2012 } from '../models/InlineResponse2012';
import { SiteResponse } from '../models/SiteResponse';
import { TeamsResponseWithId } from '../models/TeamsResponseWithId';
import { TeamsResponseWithoutId } from '../models/TeamsResponseWithoutId';

/**
 * no description
 */
export class TeamsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * List teams
   */
  public async teamsGet(options?: Configuration): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = '/teams';

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
   * List teams which member belongs into
   * @param memberName Member&#39;s name
   */
  public async teamsMembersMemberNameTeamsGet(
    memberName: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'memberName' is not null or undefined
    if (memberName === null || memberName === undefined) {
      throw new RequiredError(
        'Required parameter memberName was null or undefined when calling teamsMembersMemberNameTeamsGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/members/{member_name}/teams'.replace(
      '{' + 'member_name' + '}',
      encodeURIComponent(String(memberName))
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
   * Create a team
   * @param request
   */
  public async teamsPost(
    request: TeamsResponseWithoutId,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling teamsPost.'
      );
    }

    // Path Params
    const localVarPath = '/teams';

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
      ObjectSerializer.serialize(request, 'TeamsResponseWithoutId', ''),
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
   * Activate user who is invited the team
   * @param teamId Team ID
   * @param key Activation key which is sent when owner invites other user to the team
   */
  public async teamsTeamIdActivationKeyPost(
    teamId: string,
    key: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdActivationKeyPost.'
      );
    }

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError(
        'Required parameter key was null or undefined when calling teamsTeamIdActivationKeyPost.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/activation/{key}'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

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
   * Delete a team
   * @param teamId Team ID
   */
  public async teamsTeamIdDelete(
    teamId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdDelete.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
   * Get a details of team
   * @param teamId Team ID
   */
  public async teamsTeamIdGet(
    teamId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
   * List users specified team
   * @param teamId Team ID
   */
  public async teamsTeamIdMembersGet(
    teamId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
   * Get member information specified team and name
   * @param teamId Team ID
   * @param name Name of a member
   */
  public async teamsTeamIdMembersNameGet(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersNameGet.'
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling teamsTeamIdMembersNameGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members/{name}'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
   * Delete role of specific team member
   * @param teamId Team ID
   * @param name name of member
   */
  public async teamsTeamIdMembersNameRoleDelete(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersNameRoleDelete.'
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling teamsTeamIdMembersNameRoleDelete.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members/{name}/role'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
   * Get role of specific team member
   * @param teamId Team ID
   * @param name Name of member
   */
  public async teamsTeamIdMembersNameRoleGet(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersNameRoleGet.'
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling teamsTeamIdMembersNameRoleGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members/{name}/role'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
   * Add role of specific team member
   * @param teamId Team ID
   * @param name Name of member
   * @param request
   */
  public async teamsTeamIdMembersNameRolePost(
    teamId: string,
    name: string,
    request: InlineObject18,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersNameRolePost.'
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling teamsTeamIdMembersNameRolePost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling teamsTeamIdMembersNameRolePost.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members/{name}/role'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
      ObjectSerializer.serialize(request, 'InlineObject18', ''),
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
   * Update role of specific team member
   * @param teamId Team ID
   * @param name name of member
   * @param request
   */
  public async teamsTeamIdMembersNameRolePut(
    teamId: string,
    name: string,
    request: InlineObject17,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersNameRolePut.'
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        'Required parameter name was null or undefined when calling teamsTeamIdMembersNameRolePut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling teamsTeamIdMembersNameRolePut.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members/{name}/role'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
      ObjectSerializer.serialize(request, 'InlineObject17', ''),
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
   * Add members to the team by email. If new member already has Shifter Account, This API sends invitation to the the user who matched with email. If new member does not have Shifter account yet, API sends invitation to that email with Sign Up link.
   * @param teamId Team ID
   * @param request
   */
  public async teamsTeamIdMembersPost(
    teamId: string,
    request?: Array<InlineObject>,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdMembersPost.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/members'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
      ObjectSerializer.serialize(request, 'Array<InlineObject>', ''),
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
   * Update a team
   * @param teamId Team ID
   * @param request New team information
   */
  public async teamsTeamIdPut(
    teamId: string,
    request: TeamsResponseWithoutId,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdPut.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling teamsTeamIdPut.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
      ObjectSerializer.serialize(request, 'TeamsResponseWithoutId', ''),
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
   * Detach sites from specified team
   * @param teamId Team ID
   * @param request
   */
  public async teamsTeamIdSitesDelete(
    teamId: string,
    request?: InlineObject16,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdSitesDelete.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/sites'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
      ObjectSerializer.serialize(request, 'InlineObject16', ''),
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
   * List sites in specified team
   * @param teamId Team ID
   */
  public async teamsTeamIdSitesGet(
    teamId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdSitesGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/sites'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
   * Add sites to the team
   * @param teamId Team ID
   * @param request
   */
  public async teamsTeamIdSitesPost(
    teamId: string,
    request: InlineObject15,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdSitesPost.'
      );
    }

    // verify required parameter 'request' is not null or undefined
    if (request === null || request === undefined) {
      throw new RequiredError(
        'Required parameter request was null or undefined when calling teamsTeamIdSitesPost.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/sites'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId))
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
      ObjectSerializer.serialize(request, 'InlineObject15', ''),
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
   * Get site details which specified team
   * @param teamId Team ID
   * @param siteId Site ID
   */
  public async teamsTeamIdSitesSiteIdGet(
    teamId: string,
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdSitesSiteIdGet.'
      );
    }

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling teamsTeamIdSitesSiteIdGet.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/sites/{site_id}'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)));

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
   * Add a site to specific team
   * @param teamId Team ID
   * @param siteId Site ID
   */
  public async teamsTeamIdSitesSiteIdPost(
    teamId: string,
    siteId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError(
        'Required parameter teamId was null or undefined when calling teamsTeamIdSitesSiteIdPost.'
      );
    }

    // verify required parameter 'siteId' is not null or undefined
    if (siteId === null || siteId === undefined) {
      throw new RequiredError(
        'Required parameter siteId was null or undefined when calling teamsTeamIdSitesSiteIdPost.'
      );
    }

    // Path Params
    const localVarPath = '/teams/{team_id}/sites/{site_id}'
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'site_id' + '}', encodeURIComponent(String(siteId)));

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

export class TeamsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to teamsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsGet(
    response: ResponseContext
  ): Promise<InlineResponse2001> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2001 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2001',
        ''
      ) as InlineResponse2001;
      return body;
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
      const body: InlineResponse2001 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2001',
        ''
      ) as InlineResponse2001;
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
   * @params response Response returned by the server for a request to teamsMembersMemberNameTeamsGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsMembersMemberNameTeamsGet(
    response: ResponseContext
  ): Promise<InlineResponse2002> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2002 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2002',
        ''
      ) as InlineResponse2002;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: InlineResponse2002 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2002',
        ''
      ) as InlineResponse2002;
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
   * @params response Response returned by the server for a request to teamsPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsPost(
    response: ResponseContext
  ): Promise<InlineResponse2012> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: InlineResponse2012 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2012',
        ''
      ) as InlineResponse2012;
      return body;
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
      const body: InlineResponse2012 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2012',
        ''
      ) as InlineResponse2012;
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
   * @params response Response returned by the server for a request to teamsTeamIdActivationKeyPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdActivationKeyPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to teamsTeamIdDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdDelete(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to teamsTeamIdGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdGet(
    response: ResponseContext
  ): Promise<TeamsResponseWithId> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: TeamsResponseWithId = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TeamsResponseWithId',
        ''
      ) as TeamsResponseWithId;
      return body;
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
      const body: TeamsResponseWithId = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TeamsResponseWithId',
        ''
      ) as TeamsResponseWithId;
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersGet(
    response: ResponseContext
  ): Promise<Array<InlineResponse2003>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<InlineResponse2003> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2003>',
        ''
      ) as Array<InlineResponse2003>;
      return body;
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
      const body: Array<InlineResponse2003> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<InlineResponse2003>',
        ''
      ) as Array<InlineResponse2003>;
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersNameGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersNameGet(
    response: ResponseContext
  ): Promise<InlineResponse2004> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2004 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2004',
        ''
      ) as InlineResponse2004;
      return body;
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
      const body: InlineResponse2004 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2004',
        ''
      ) as InlineResponse2004;
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersNameRoleDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersNameRoleDelete(
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersNameRoleGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersNameRoleGet(
    response: ResponseContext
  ): Promise<InlineResponse2005> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2005 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2005',
        ''
      ) as InlineResponse2005;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: InlineResponse2005 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2005',
        ''
      ) as InlineResponse2005;
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersNameRolePost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersNameRolePost(
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersNameRolePut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersNameRolePut(
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
   * @params response Response returned by the server for a request to teamsTeamIdMembersPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdMembersPost(
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
   * @params response Response returned by the server for a request to teamsTeamIdPut
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdPut(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to teamsTeamIdSitesDelete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdSitesDelete(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('204', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to teamsTeamIdSitesGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdSitesGet(
    response: ResponseContext
  ): Promise<Array<SiteResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Array<SiteResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<SiteResponse>',
        ''
      ) as Array<SiteResponse>;
      return body;
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
      const body: Array<SiteResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<SiteResponse>',
        ''
      ) as Array<SiteResponse>;
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
   * @params response Response returned by the server for a request to teamsTeamIdSitesPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdSitesPost(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to teamsTeamIdSitesSiteIdGet
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdSitesSiteIdGet(
    response: ResponseContext
  ): Promise<SiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: SiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SiteResponse',
        ''
      ) as SiteResponse;
      return body;
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
      const body: SiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SiteResponse',
        ''
      ) as SiteResponse;
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
   * @params response Response returned by the server for a request to teamsTeamIdSitesSiteIdPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async teamsTeamIdSitesSiteIdPost(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('201', response.httpStatusCode)) {
      return;
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
}
