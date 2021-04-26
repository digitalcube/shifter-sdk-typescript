import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration } from '../configuration';

import { AccountLogAuthEventsEventContextData } from '../models/AccountLogAuthEventsEventContextData';
import { AccountLogAuthEventsEventFeedback } from '../models/AccountLogAuthEventsEventFeedback';
import { AccountLogAuthEventsEventRisk } from '../models/AccountLogAuthEventsEventRisk';
import { ArtifactDownloadResponse } from '../models/ArtifactDownloadResponse';
import { ArtifactGetResponse } from '../models/ArtifactGetResponse';
import { CdnStatusGetResponse } from '../models/CdnStatusGetResponse';
import { CommonErrorResponse } from '../models/CommonErrorResponse';
import { CouponGetResponse } from '../models/CouponGetResponse';
import { CouponGetResponseCoupon } from '../models/CouponGetResponseCoupon';
import { DomainGetResponse } from '../models/DomainGetResponse';
import { DomainValidationGetResponse } from '../models/DomainValidationGetResponse';
import { DomainValidationGetResponseCnames } from '../models/DomainValidationGetResponseCnames';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject10 } from '../models/InlineObject10';
import { InlineObject11 } from '../models/InlineObject11';
import { InlineObject12 } from '../models/InlineObject12';
import { InlineObject13 } from '../models/InlineObject13';
import { InlineObject14 } from '../models/InlineObject14';
import { InlineObject15 } from '../models/InlineObject15';
import { InlineObject16 } from '../models/InlineObject16';
import { InlineObject17 } from '../models/InlineObject17';
import { InlineObject18 } from '../models/InlineObject18';
import { InlineObject19 } from '../models/InlineObject19';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject20 } from '../models/InlineObject20';
import { InlineObject21 } from '../models/InlineObject21';
import { InlineObject22 } from '../models/InlineObject22';
import { InlineObject23 } from '../models/InlineObject23';
import { InlineObject24 } from '../models/InlineObject24';
import { InlineObject25 } from '../models/InlineObject25';
import { InlineObject26 } from '../models/InlineObject26';
import { InlineObject27 } from '../models/InlineObject27';
import { InlineObject28 } from '../models/InlineObject28';
import { InlineObject29 } from '../models/InlineObject29';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject30 } from '../models/InlineObject30';
import { InlineObject31 } from '../models/InlineObject31';
import { InlineObject32 } from '../models/InlineObject32';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineObject6 } from '../models/InlineObject6';
import { InlineObject7 } from '../models/InlineObject7';
import { InlineObject8 } from '../models/InlineObject8';
import { InlineObject9 } from '../models/InlineObject9';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { InlineResponse200Errors } from '../models/InlineResponse200Errors';
import { InlineResponse201 } from '../models/InlineResponse201';
import { InlineResponse2011 } from '../models/InlineResponse2011';
import { InlineResponse2012 } from '../models/InlineResponse2012';
import { InlineResponse2013 } from '../models/InlineResponse2013';
import { InlineResponse2014 } from '../models/InlineResponse2014';
import { InlineResponse2015 } from '../models/InlineResponse2015';
import { LoginErrorResponse } from '../models/LoginErrorResponse';
import { LoginPostRequest } from '../models/LoginPostRequest';
import { LoginPostResponse } from '../models/LoginPostResponse';
import { PlanGetResponse } from '../models/PlanGetResponse';
import { PlanGetResponseMetadata } from '../models/PlanGetResponseMetadata';
import { PlanResponse } from '../models/PlanResponse';
import { PlanResponseMetadata } from '../models/PlanResponseMetadata';
import { PreviousPlanResponse } from '../models/PreviousPlanResponse';
import { RoleGetResponse } from '../models/RoleGetResponse';
import { SiteCreateResponse } from '../models/SiteCreateResponse';
import { SiteResponse } from '../models/SiteResponse';
import { StatusGetResponse } from '../models/StatusGetResponse';
import { StatusGetResponseMaintenance } from '../models/StatusGetResponseMaintenance';
import { StatusGetResponseUser } from '../models/StatusGetResponseUser';
import { StatusGetResponseUserGroup } from '../models/StatusGetResponseUserGroup';
import { StatusGetResponseUserNotification } from '../models/StatusGetResponseUserNotification';
import { StatusGetResponseUserNotificationEmail } from '../models/StatusGetResponseUserNotificationEmail';
import { SubscriptionCreateResponse } from '../models/SubscriptionCreateResponse';
import { SubscriptionGetResponse } from '../models/SubscriptionGetResponse';
import { SubscriptionGetResponseBillingThresholds } from '../models/SubscriptionGetResponseBillingThresholds';
import { SubscriptionGetResponseDefaultTaxRates } from '../models/SubscriptionGetResponseDefaultTaxRates';
import { SubscriptionGetResponseInvoiceCustomerBalanceSettings } from '../models/SubscriptionGetResponseInvoiceCustomerBalanceSettings';
import { SubscriptionGetResponseItems } from '../models/SubscriptionGetResponseItems';
import { SubscriptionGetResponseItemsData } from '../models/SubscriptionGetResponseItemsData';
import { SubscriptionGetResponseItemsPlan } from '../models/SubscriptionGetResponseItemsPlan';
import { SubscriptionGetResponseItemsPlanMetadata } from '../models/SubscriptionGetResponseItemsPlanMetadata';
import { SubscriptionGetResponseItemsPlanTiers } from '../models/SubscriptionGetResponseItemsPlanTiers';
import { SubscriptionGetResponseItemsPlanTransformUsage } from '../models/SubscriptionGetResponseItemsPlanTransformUsage';
import { SubscriptionGetResponseItemsPrice } from '../models/SubscriptionGetResponseItemsPrice';
import { SubscriptionGetResponseItemsPriceRecurring } from '../models/SubscriptionGetResponseItemsPriceRecurring';
import { SubscriptionGetResponsePauseCollection } from '../models/SubscriptionGetResponsePauseCollection';
import { SubscriptionGetResponsePendingInvoiceItemInterval } from '../models/SubscriptionGetResponsePendingInvoiceItemInterval';
import { SubscriptionGetResponsePendingUpdate } from '../models/SubscriptionGetResponsePendingUpdate';
import { SubscriptionGetResponseTransferData } from '../models/SubscriptionGetResponseTransferData';
import { SubscriptionUpdateResponse } from '../models/SubscriptionUpdateResponse';
import { TeamsResponseWithId } from '../models/TeamsResponseWithId';
import { TeamsResponseWithoutId } from '../models/TeamsResponseWithoutId';
import { UsageSummaryGetResponse } from '../models/UsageSummaryGetResponse';

import { ObservableAccountApi } from './ObservableAPI';
import {
  AccountApiRequestFactory,
  AccountApiResponseProcessor,
} from '../apis/AccountApi';

import { ObservableArtifactsApi } from './ObservableAPI';
import {
  ArtifactsApiRequestFactory,
  ArtifactsApiResponseProcessor,
} from '../apis/ArtifactsApi';

import { ObservableBillingApi } from './ObservableAPI';
import {
  BillingApiRequestFactory,
  BillingApiResponseProcessor,
} from '../apis/BillingApi';

import { ObservableCouponApi } from './ObservableAPI';
import {
  CouponApiRequestFactory,
  CouponApiResponseProcessor,
} from '../apis/CouponApi';

import { ObservableDomainsReplacedToTheSiteDomainsApi } from './ObservableAPI';
import {
  DomainsReplacedToTheSiteDomainsApiRequestFactory,
  DomainsReplacedToTheSiteDomainsApiResponseProcessor,
} from '../apis/DomainsReplacedToTheSiteDomainsApi';

import { ObservableIntercomApi } from './ObservableAPI';
import {
  IntercomApiRequestFactory,
  IntercomApiResponseProcessor,
} from '../apis/IntercomApi';

import { ObservableLoginApi } from './ObservableAPI';
import {
  LoginApiRequestFactory,
  LoginApiResponseProcessor,
} from '../apis/LoginApi';

import { ObservablePlansApi } from './ObservableAPI';
import {
  PlansApiRequestFactory,
  PlansApiResponseProcessor,
} from '../apis/PlansApi';

import { ObservableRolesApi } from './ObservableAPI';
import {
  RolesApiRequestFactory,
  RolesApiResponseProcessor,
} from '../apis/RolesApi';

import { ObservableSiteDomainsApi } from './ObservableAPI';
import {
  SiteDomainsApiRequestFactory,
  SiteDomainsApiResponseProcessor,
} from '../apis/SiteDomainsApi';

import { ObservableSiteSettingsApi } from './ObservableAPI';
import {
  SiteSettingsApiRequestFactory,
  SiteSettingsApiResponseProcessor,
} from '../apis/SiteSettingsApi';

import { ObservableSitesApi } from './ObservableAPI';
import {
  SitesApiRequestFactory,
  SitesApiResponseProcessor,
} from '../apis/SitesApi';

import { ObservableStatisticsApi } from './ObservableAPI';
import {
  StatisticsApiRequestFactory,
  StatisticsApiResponseProcessor,
} from '../apis/StatisticsApi';

import { ObservableStatusApi } from './ObservableAPI';
import {
  StatusApiRequestFactory,
  StatusApiResponseProcessor,
} from '../apis/StatusApi';

import { ObservableTeamsApi } from './ObservableAPI';
import {
  TeamsApiRequestFactory,
  TeamsApiResponseProcessor,
} from '../apis/TeamsApi';

import { ObservableWebhooksApi } from './ObservableAPI';
import {
  WebhooksApiRequestFactory,
  WebhooksApiResponseProcessor,
} from '../apis/WebhooksApi';

import { ObservableWordPressApi } from './ObservableAPI';
import {
  WordPressApiRequestFactory,
  WordPressApiResponseProcessor,
} from '../apis/WordPressApi';

export interface AccountApiAccountAvailablePostRequest {}

export interface AccountApiAccountDeleteRequest {}

export interface AccountApiAccountInvoiceAddressPostRequest {
  /**
   *
   * @type InlineObject27
   * @memberof AccountApiaccountInvoiceAddressPost
   */
  request?: InlineObject27;
}

export interface AccountApiAccountLogAuthEventsGetRequest {
  /**
   * number of authentication results. maximum 60.
   * @type number
   * @memberof AccountApiaccountLogAuthEventsGet
   */
  maxResults?: number;
}

export interface AccountApiAccountNotificationEmailSynchronizationPostRequest {}

export interface AccountApiAccountNotificationTargetPostRequest {
  /**
   *
   * @type &#39;email&#39;
   * @memberof AccountApiaccountNotificationTargetPost
   */
  target: 'email';
  /**
   *
   * @type InlineObject26
   * @memberof AccountApiaccountNotificationTargetPost
   */
  request?: InlineObject26;
}

export class ObjectAccountApi {
  private api: ObservableAccountApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AccountApiRequestFactory,
    responseProcessor?: AccountApiResponseProcessor
  ) {
    this.api = new ObservableAccountApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Check user is valid
   * @param param the request object
   */
  public accountAvailablePost(
    param: AccountApiAccountAvailablePostRequest,
    options?: Configuration
  ): Promise<InlineResponse2015> {
    return this.api.accountAvailablePost(options).toPromise();
  }

  /**
   * You can delete your account. An invited user cannot be accessed this API.
   * @param param the request object
   */
  public accountDelete(
    param: AccountApiAccountDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.accountDelete(options).toPromise();
  }

  /**
   * Update address which will be written it to the invoice
   * @param param the request object
   */
  public accountInvoiceAddressPost(
    param: AccountApiAccountInvoiceAddressPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .accountInvoiceAddressPost(param.request, options)
      .toPromise();
  }

  /**
   * Get events of user authentication
   * @param param the request object
   */
  public accountLogAuthEventsGet(
    param: AccountApiAccountLogAuthEventsGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse20012>> {
    return this.api
      .accountLogAuthEventsGet(param.maxResults, options)
      .toPromise();
  }

  /**
   * Synchronize your email to stripe
   * @param param the request object
   */
  public accountNotificationEmailSynchronizationPost(
    param: AccountApiAccountNotificationEmailSynchronizationPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .accountNotificationEmailSynchronizationPost(options)
      .toPromise();
  }

  /**
   * Adding your email destination when sending some notifications
   * @param param the request object
   */
  public accountNotificationTargetPost(
    param: AccountApiAccountNotificationTargetPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .accountNotificationTargetPost(param.target, param.request, options)
      .toPromise();
  }
}

export interface ArtifactsApiProjectsProjectIdArtifactsArtifactIdDownloadUrlGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApiprojectsProjectIdArtifactsArtifactIdDownloadUrlGet
   */
  projectId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApiprojectsProjectIdArtifactsArtifactIdDownloadUrlGet
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdArtifactNamePutRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdArtifactNamePut
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdArtifactNamePut
   */
  artifactId: string;
  /**
   *
   * @type InlineObject24
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdArtifactNamePut
   */
  request: InlineObject24;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdBackupUrlGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdBackupUrlGet
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdBackupUrlGet
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDelete
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDelete
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdDeployDeployTypePostRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDeployDeployTypePost
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDeployDeployTypePost
   */
  artifactId: string;
  /**
   * Deployment Type (only shifter_cdn)
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDeployDeployTypePost
   */
  deployType: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdDownloadUrlGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDownloadUrlGet
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdDownloadUrlGet
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdGeneratorDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdGeneratorDelete
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdGeneratorDelete
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdPreviewPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPreviewPost
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPreviewPost
   */
  artifactId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishJobIdDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdDelete
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdDelete
   */
  artifactId: string;
  /**
   * Schedule Job ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdDelete
   */
  jobId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishJobIdPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdPost
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdPost
   */
  artifactId: string;
  /**
   * Schedule Job ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdPost
   */
  jobId: string;
  /**
   *
   * @type InlineObject23
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishJobIdPost
   */
  request: InlineObject23;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishPost
   */
  siteId: string;
  /**
   * Artifact ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishPost
   */
  artifactId: string;
  /**
   *
   * @type InlineObject22
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdPublishPost
   */
  request?: InlineObject22;
}

export interface ArtifactsApiSitesSiteIdArtifactsArtifactIdWebhookRunnerPostRequest {
  /**
   *
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdWebhookRunnerPost
   */
  siteId: string;
  /**
   *
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdWebhookRunnerPost
   */
  artifactId: string;
  /**
   *
   * @type InlineObject25
   * @memberof ArtifactsApisitesSiteIdArtifactsArtifactIdWebhookRunnerPost
   */
  request?: InlineObject25;
}

export interface ArtifactsApiSitesSiteIdArtifactsGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsGet
   */
  siteId: string;
}

export interface ArtifactsApiSitesSiteIdArtifactsPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof ArtifactsApisitesSiteIdArtifactsPost
   */
  siteId: string;
}

export interface ArtifactsApiSitesSiteIdCheckGeneratorProcessGetRequest {
  /**
   *
   * @type string
   * @memberof ArtifactsApisitesSiteIdCheckGeneratorProcessGet
   */
  siteId: string;
}

export class ObjectArtifactsApi {
  private api: ObservableArtifactsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ArtifactsApiRequestFactory,
    responseProcessor?: ArtifactsApiResponseProcessor
  ) {
    this.api = new ObservableArtifactsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get the URL of the artifact. All published assets of the site is included.
   * @param param the request object
   */
  public projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
    param: ArtifactsApiProjectsProjectIdArtifactsArtifactIdDownloadUrlGetRequest,
    options?: Configuration
  ): Promise<ArtifactDownloadResponse> {
    return this.api
      .projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
        param.projectId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Update your artifact name.
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdArtifactNamePut(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdArtifactNamePutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdArtifactNamePut(
        param.siteId,
        param.artifactId,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Retrieve path of WordPress from backup archive
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdBackupUrlGet(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdBackupUrlGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2008> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdBackupUrlGet(
        param.siteId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Delete artifacts
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdDelete(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdDelete(
        param.siteId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Set the artifact to public on the CDN
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdDeployDeployTypePostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
        param.siteId,
        param.artifactId,
        param.deployType,
        options
      )
      .toPromise();
  }

  /**
   * Get the URL of the artifact. All published assets of the site is included.
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdDownloadUrlGetRequest,
    options?: Configuration
  ): Promise<ArtifactDownloadResponse> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
        param.siteId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Stop generating process
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdGeneratorDelete(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdGeneratorDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdGeneratorDelete(
        param.siteId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Enable artifact previews
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdPreviewPost(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdPreviewPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdPreviewPost(
        param.siteId,
        param.artifactId,
        options
      )
      .toPromise();
  }

  /**
   * Delete scheduled publish
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishJobIdDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
        param.siteId,
        param.artifactId,
        param.jobId,
        options
      )
      .toPromise();
  }

  /**
   * Update publish schedule
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishJobIdPostRequest,
    options?: Configuration
  ): Promise<InlineResponse2014> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
        param.siteId,
        param.artifactId,
        param.jobId,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Set the artifact to public on the Shifter CDN. OR Set the publish date of the artifact
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdPublishPost(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdPublishPostRequest,
    options?: Configuration
  ): Promise<InlineResponse2013> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdPublishPost(
        param.siteId,
        param.artifactId,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * execute webhook of specific artifact
   * @param param the request object
   */
  public sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
    param: ArtifactsApiSitesSiteIdArtifactsArtifactIdWebhookRunnerPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
        param.siteId,
        param.artifactId,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * List all artifacts.
   * @param param the request object
   */
  public sitesSiteIdArtifactsGet(
    param: ArtifactsApiSitesSiteIdArtifactsGetRequest,
    options?: Configuration
  ): Promise<Array<ArtifactGetResponse>> {
    return this.api.sitesSiteIdArtifactsGet(param.siteId, options).toPromise();
  }

  /**
   * Generate artifact.
   * @param param the request object
   */
  public sitesSiteIdArtifactsPost(
    param: ArtifactsApiSitesSiteIdArtifactsPostRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.sitesSiteIdArtifactsPost(param.siteId, options).toPromise();
  }

  /**
   * You can get the process of generating
   * @param param the request object
   */
  public sitesSiteIdCheckGeneratorProcessGet(
    param: ArtifactsApiSitesSiteIdCheckGeneratorProcessGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api
      .sitesSiteIdCheckGeneratorProcessGet(param.siteId, options)
      .toPromise();
  }
}

export interface BillingApiBillingPostRequest {
  /**
   *
   * @type InlineObject14
   * @memberof BillingApibillingPost
   */
  request: InlineObject14;
}

export interface BillingApiBillingsPlansGetRequest {
  /**
   *
   * @type &#39;all&#39; | &#39;month&#39; | &#39;year&#39;
   * @memberof BillingApibillingsPlansGet
   */
  interval?: 'all' | 'month' | 'year';
}

export interface BillingApiBillingsSubscriptionsGetRequest {}

export interface BillingApiBillingsSubscriptionsPostRequest {
  /**
   *
   * @type InlineObject12
   * @memberof BillingApibillingsSubscriptionsPost
   */
  plan: InlineObject12;
}

export interface BillingApiBillingsSubscriptionsStatusGetRequest {}

export interface BillingApiBillingsSubscriptionsSubscriptionIdDeleteRequest {
  /**
   *
   * @type string
   * @memberof BillingApibillingsSubscriptionsSubscriptionIdDelete
   */
  subscriptionId: string;
}

export interface BillingApiBillingsSubscriptionsSubscriptionIdPostRequest {
  /**
   * Subscription id which update
   * @type string
   * @memberof BillingApibillingsSubscriptionsSubscriptionIdPost
   */
  subscriptionId: string;
  /**
   *
   * @type InlineObject13
   * @memberof BillingApibillingsSubscriptionsSubscriptionIdPost
   */
  plan: InlineObject13;
}

export class ObjectBillingApi {
  private api: ObservableBillingApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: BillingApiRequestFactory,
    responseProcessor?: BillingApiResponseProcessor
  ) {
    this.api = new ObservableBillingApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Update payment method
   * @param param the request object
   */
  public billingPost(
    param: BillingApiBillingPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.billingPost(param.request, options).toPromise();
  }

  /**
   * Get available plans
   * @param param the request object
   */
  public billingsPlansGet(
    param: BillingApiBillingsPlansGetRequest,
    options?: Configuration
  ): Promise<Array<PlanGetResponse>> {
    return this.api.billingsPlansGet(param.interval, options).toPromise();
  }

  /**
   * List all subscriptions in the current shifter account
   * @param param the request object
   */
  public billingsSubscriptionsGet(
    param: BillingApiBillingsSubscriptionsGetRequest,
    options?: Configuration
  ): Promise<Array<SubscriptionGetResponse>> {
    return this.api.billingsSubscriptionsGet(options).toPromise();
  }

  /**
   * Create a subscription.
   * @param param the request object
   */
  public billingsSubscriptionsPost(
    param: BillingApiBillingsSubscriptionsPostRequest,
    options?: Configuration
  ): Promise<SubscriptionCreateResponse> {
    return this.api.billingsSubscriptionsPost(param.plan, options).toPromise();
  }

  /**
   * Getting subscription status
   * @param param the request object
   */
  public billingsSubscriptionsStatusGet(
    param: BillingApiBillingsSubscriptionsStatusGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.billingsSubscriptionsStatusGet(options).toPromise();
  }

  /**
   * Delete a subscription
   * @param param the request object
   */
  public billingsSubscriptionsSubscriptionIdDelete(
    param: BillingApiBillingsSubscriptionsSubscriptionIdDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .billingsSubscriptionsSubscriptionIdDelete(param.subscriptionId, options)
      .toPromise();
  }

  /**
   * Update a subscription. Calling this API is allowed to site owner or Administrator members
   * @param param the request object
   */
  public billingsSubscriptionsSubscriptionIdPost(
    param: BillingApiBillingsSubscriptionsSubscriptionIdPostRequest,
    options?: Configuration
  ): Promise<SubscriptionUpdateResponse> {
    return this.api
      .billingsSubscriptionsSubscriptionIdPost(
        param.subscriptionId,
        param.plan,
        options
      )
      .toPromise();
  }
}

export interface CouponApiCouponGetRequest {}

export interface CouponApiCouponsCodePostRequest {
  /**
   * Code of coupon
   * @type string
   * @memberof CouponApicouponsCodePost
   */
  code: string;
}

export class ObjectCouponApi {
  private api: ObservableCouponApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: CouponApiRequestFactory,
    responseProcessor?: CouponApiResponseProcessor
  ) {
    this.api = new ObservableCouponApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get coupon
   * @param param the request object
   */
  public couponGet(
    param: CouponApiCouponGetRequest,
    options?: Configuration
  ): Promise<CouponGetResponse> {
    return this.api.couponGet(options).toPromise();
  }

  /**
   * Register coupon code.
   * @param param the request object
   */
  public couponsCodePost(
    param: CouponApiCouponsCodePostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.couponsCodePost(param.code, options).toPromise();
  }
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainAttachDomainToShifterCdnPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainAttachDomainToShifterCdnPost
   */
  domain: string;
  /**
   *
   * @type InlineObject30
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainAttachDomainToShifterCdnPost
   */
  request: InlineObject30;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainDeleteRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainDelete
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainDetachDomainFromShifterCdnPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainDetachDomainFromShifterCdnPost
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainGetRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainGet
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainPost
   */
  domain: string;
  /**
   *
   * @type InlineObject28
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainPost
   */
  request?: InlineObject28;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainResendValidationEmailPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainResendValidationEmailPost
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainSelectionPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainSelectionPost
   */
  domain: string;
  /**
   *
   * @type InlineObject29
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainSelectionPost
   */
  request: InlineObject29;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationDnsPost
   */
  domain: string;
  /**
   *
   * @type InlineObject31
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationDnsPost
   */
  request?: InlineObject31;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsValidationGetRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationDnsValidationGet
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsValidationPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationDnsValidationPost
   */
  domain: string;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationEmailPostRequest {
  /**
   *
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationEmailPost
   */
  domain: string;
  /**
   *
   * @type InlineObject32
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsDomainValidateOperationEmailPost
   */
  request?: InlineObject32;
}

export interface DomainsReplacedToTheSiteDomainsApiDomainsGetRequest {
  /**
   * If it is &#x60;sslValid&#x60;, you can only get certified domains
   * @type string
   * @memberof DomainsReplacedToTheSiteDomainsApidomainsGet
   */
  filter?: string;
}

export class ObjectDomainsReplacedToTheSiteDomainsApi {
  private api: ObservableDomainsReplacedToTheSiteDomainsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DomainsReplacedToTheSiteDomainsApiRequestFactory,
    responseProcessor?: DomainsReplacedToTheSiteDomainsApiResponseProcessor
  ) {
    this.api = new ObservableDomainsReplacedToTheSiteDomainsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Attache your domain to Shifter CDN
   * @param param the request object
   */
  public domainsDomainAttachDomainToShifterCdnPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainAttachDomainToShifterCdnPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainAttachDomainToShifterCdnPost(
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Delete the added domain
   * @param param the request object
   */
  public domainsDomainDelete(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.domainsDomainDelete(param.domain, options).toPromise();
  }

  /**
   * Detach your domain from Shifter CDN
   * @param param the request object
   */
  public domainsDomainDetachDomainFromShifterCdnPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainDetachDomainFromShifterCdnPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainDetachDomainFromShifterCdnPost(param.domain, options)
      .toPromise();
  }

  /**
   * You can get the authentication information of the domain registered by the user
   * @param param the request object
   */
  public domainsDomainGet(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.domainsDomainGet(param.domain, options).toPromise();
  }

  /**
   * Add your domain
   * @param param the request object
   */
  public domainsDomainPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainPost(param.domain, param.request, options)
      .toPromise();
  }

  /**
   * Resend the approval mail of the SSL certificate
   * @param param the request object
   */
  public domainsDomainResendValidationEmailPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainResendValidationEmailPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainResendValidationEmailPost(param.domain, options)
      .toPromise();
  }

  /**
   * Select publishing Subject Alternative Name
   * @param param the request object
   */
  public domainsDomainSelectionPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainSelectionPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainSelectionPost(param.domain, param.request, options)
      .toPromise();
  }

  /**
   * Validating domain by CNAME
   * @param param the request object
   */
  public domainsDomainValidateOperationDnsPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainValidateOperationDnsPost(
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Get validation status of specified domain
   * @param param the request object
   */
  public domainsDomainValidateOperationDnsValidationGet(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsValidationGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api
      .domainsDomainValidateOperationDnsValidationGet(param.domain, options)
      .toPromise();
  }

  /**
   * Re validating domain by dns
   * @param param the request object
   */
  public domainsDomainValidateOperationDnsValidationPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationDnsValidationPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainValidateOperationDnsValidationPost(param.domain, options)
      .toPromise();
  }

  /**
   * Validating domain by email
   * @param param the request object
   */
  public domainsDomainValidateOperationEmailPost(
    param: DomainsReplacedToTheSiteDomainsApiDomainsDomainValidateOperationEmailPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .domainsDomainValidateOperationEmailPost(
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * You can get information of your domains registered in shifter
   * @param param the request object
   */
  public domainsGet(
    param: DomainsReplacedToTheSiteDomainsApiDomainsGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse20013>> {
    return this.api.domainsGet(param.filter, options).toPromise();
  }
}

export interface IntercomApiIntercomHmacGetRequest {}

export class ObjectIntercomApi {
  private api: ObservableIntercomApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: IntercomApiRequestFactory,
    responseProcessor?: IntercomApiResponseProcessor
  ) {
    this.api = new ObservableIntercomApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get intercom hmac
   * @param param the request object
   */
  public intercomHmacGet(
    param: IntercomApiIntercomHmacGetRequest,
    options?: Configuration
  ): Promise<string> {
    return this.api.intercomHmacGet(options).toPromise();
  }
}

export interface LoginApiLoginPostRequest {
  /**
   *
   * @type LoginPostRequest
   * @memberof LoginApiloginPost
   */
  request: LoginPostRequest;
}

export interface LoginApiLoginPutRequest {
  /**
   *
   * @type InlineObject
   * @memberof LoginApiloginPut
   */
  request: InlineObject;
}

export class ObjectLoginApi {
  private api: ObservableLoginApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LoginApiRequestFactory,
    responseProcessor?: LoginApiResponseProcessor
  ) {
    this.api = new ObservableLoginApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Login to the Shifter. username and password are required. Return AccessToken and RefreshToken when the request succeeded.
   * @param param the request object
   */
  public loginPost(
    param: LoginApiLoginPostRequest,
    options?: Configuration
  ): Promise<LoginPostResponse> {
    return this.api.loginPost(param.request, options).toPromise();
  }

  /**
   * Refresh AccessToken by RefreshToken. Return new AccessToken when request succeeded.
   * @param param the request object
   */
  public loginPut(
    param: LoginApiLoginPutRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.loginPut(param.request, options).toPromise();
  }
}

export interface PlansApiPlansGetRequest {}

export interface PlansApiPlansPlanNamePlanTypeGetRequest {
  /**
   * Name of play. Specify free or personal or business or agency or agency plus
   * @type &#39;free&#39; | &#39;personal&#39; | &#39;business&#39; | &#39;agency&#39; | &#39;agency plus&#39;
   * @memberof PlansApiplansPlanNamePlanTypeGet
   */
  planName: 'free' | 'personal' | 'business' | 'agency' | 'agency plus';
  /**
   * Team of plan. Specify annual or monthly
   * @type &#39;annual&#39; | &#39;monthly&#39;
   * @memberof PlansApiplansPlanNamePlanTypeGet
   */
  planType: 'annual' | 'monthly';
}

export class ObjectPlansApi {
  private api: ObservablePlansApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PlansApiRequestFactory,
    responseProcessor?: PlansApiResponseProcessor
  ) {
    this.api = new ObservablePlansApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * (Previous Plan) Get all plans. An invited user cannot be accessed this API.
   * @param param the request object
   */
  public plansGet(
    param: PlansApiPlansGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.plansGet(options).toPromise();
  }

  /**
   * (Previous plan) Get details of plan.
   * @param param the request object
   */
  public plansPlanNamePlanTypeGet(
    param: PlansApiPlansPlanNamePlanTypeGetRequest,
    options?: Configuration
  ): Promise<PreviousPlanResponse> {
    return this.api
      .plansPlanNamePlanTypeGet(param.planName, param.planType, options)
      .toPromise();
  }
}

export interface RolesApiRolesGetRequest {}

export interface RolesApiRolesNameGetRequest {
  /**
   * Name of role
   * @type string
   * @memberof RolesApirolesNameGet
   */
  name: string;
}

export class ObjectRolesApi {
  private api: ObservableRolesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolesApiRequestFactory,
    responseProcessor?: RolesApiResponseProcessor
  ) {
    this.api = new ObservableRolesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * List team member roles
   * @param param the request object
   */
  public rolesGet(
    param: RolesApiRolesGetRequest,
    options?: Configuration
  ): Promise<Array<RoleGetResponse>> {
    return this.api.rolesGet(options).toPromise();
  }

  /**
   * Get a shifter roles
   * @param param the request object
   */
  public rolesNameGet(
    param: RolesApiRolesNameGetRequest,
    options?: Configuration
  ): Promise<RoleGetResponse> {
    return this.api.rolesNameGet(param.name, options).toPromise();
  }
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainAttachPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainAttachPost
   */
  siteId: string;
  /**
   * Name of domain which is attached
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainAttachPost
   */
  domain: string;
  /**
   *
   * @type InlineObject9
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainAttachPost
   */
  request?: InlineObject9;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainDelete
   */
  siteId: string;
  /**
   * Name of domain
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainDelete
   */
  domain: string;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainDetachPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainDetachPost
   */
  siteId: string;
  /**
   * Name of domain
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainDetachPost
   */
  domain: string;
  /**
   *
   * @type InlineObject10
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainDetachPost
   */
  request?: InlineObject10;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainGet
   */
  siteId: string;
  /**
   *
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainGet
   */
  domain: string;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainPost
   */
  siteId: string;
  /**
   * Name of domain
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainPost
   */
  domain: string;
  /**
   *
   * @type InlineObject8
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainPost
   */
  request?: InlineObject8;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainSelectionDeleteRequest {
  /**
   *
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainSelectionDelete
   */
  siteId: string;
  /**
   *
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainSelectionDelete
   */
  domain: string;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainSelectionPostRequest {
  /**
   *
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainSelectionPost
   */
  siteId: string;
  /**
   *
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainSelectionPost
   */
  domain: string;
  /**
   *
   * @type InlineObject11
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainSelectionPost
   */
  request?: InlineObject11;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainValidationGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainValidationGet
   */
  siteId: string;
  /**
   * Name of domain
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainValidationGet
   */
  domain: string;
}

export interface SiteDomainsApiSitesSiteIdDomainsDomainValidationPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainValidationPost
   */
  siteId: string;
  /**
   * Name of domain
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsDomainValidationPost
   */
  domain: string;
}

export interface SiteDomainsApiSitesSiteIdDomainsGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteDomainsApisitesSiteIdDomainsGet
   */
  siteId: string;
  /**
   *
   * @type InlineObject7
   * @memberof SiteDomainsApisitesSiteIdDomainsGet
   */
  request?: InlineObject7;
}

export class ObjectSiteDomainsApi {
  private api: ObservableSiteDomainsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SiteDomainsApiRequestFactory,
    responseProcessor?: SiteDomainsApiResponseProcessor
  ) {
    this.api = new ObservableSiteDomainsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * attach domain to the Shifter Site
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainAttachPost(
    param: SiteDomainsApiSitesSiteIdDomainsDomainAttachPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainAttachPost(
        param.siteId,
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Remove domain
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainDelete(
    param: SiteDomainsApiSitesSiteIdDomainsDomainDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainDelete(param.siteId, param.domain, options)
      .toPromise();
  }

  /**
   * detach the domain from Shifter Site.
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainDetachPost(
    param: SiteDomainsApiSitesSiteIdDomainsDomainDetachPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainDetachPost(
        param.siteId,
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Get a domain under specific site
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainGet(
    param: SiteDomainsApiSitesSiteIdDomainsDomainGetRequest,
    options?: Configuration
  ): Promise<DomainGetResponse> {
    return this.api
      .sitesSiteIdDomainsDomainGet(param.siteId, param.domain, options)
      .toPromise();
  }

  /**
   * add domain of Site
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainPost(
    param: SiteDomainsApiSitesSiteIdDomainsDomainPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainPost(
        param.siteId,
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * reset deployment domain
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainSelectionDelete(
    param: SiteDomainsApiSitesSiteIdDomainsDomainSelectionDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainSelectionDelete(
        param.siteId,
        param.domain,
        options
      )
      .toPromise();
  }

  /**
   * choose deployment domain
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainSelectionPost(
    param: SiteDomainsApiSitesSiteIdDomainsDomainSelectionPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainSelectionPost(
        param.siteId,
        param.domain,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Get validation status of domain
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainValidationGet(
    param: SiteDomainsApiSitesSiteIdDomainsDomainValidationGetRequest,
    options?: Configuration
  ): Promise<DomainValidationGetResponse> {
    return this.api
      .sitesSiteIdDomainsDomainValidationGet(
        param.siteId,
        param.domain,
        options
      )
      .toPromise();
  }

  /**
   * request(again) domain validation
   * @param param the request object
   */
  public sitesSiteIdDomainsDomainValidationPost(
    param: SiteDomainsApiSitesSiteIdDomainsDomainValidationPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdDomainsDomainValidationPost(
        param.siteId,
        param.domain,
        options
      )
      .toPromise();
  }

  /**
   * list domains
   * @param param the request object
   */
  public sitesSiteIdDomainsGet(
    param: SiteDomainsApiSitesSiteIdDomainsGetRequest,
    options?: Configuration
  ): Promise<Array<DomainGetResponse>> {
    return this.api
      .sitesSiteIdDomainsGet(param.siteId, param.request, options)
      .toPromise();
  }
}

export interface SiteSettingsApiSitesSiteIdBackupDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdBackupDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdBackupPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdBackupPost
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdBasicAuthDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdBasicAuthDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdBasicAuthPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdBasicAuthPost
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdCdnStatusGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdCdnStatusGet
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdLogsPathDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdLogsPathDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdLogsPathPutRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdLogsPathPut
   */
  siteId: string;
  /**
   *
   * @type InlineObject6
   * @memberof SiteSettingsApisitesSiteIdLogsPathPut
   */
  s3BucketName: InlineObject6;
}

export interface SiteSettingsApiSitesSiteIdMediaCdnDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdMediaCdnDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdMediaCdnPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdMediaCdnPost
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdProtectionDeleteRequest {
  /**
   *
   * @type string
   * @memberof SiteSettingsApisitesSiteIdProtectionDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdProtectionPostRequest {
  /**
   *
   * @type string
   * @memberof SiteSettingsApisitesSiteIdProtectionPost
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdPutRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdPut
   */
  siteId: string;
  /**
   *
   * @type InlineObject2
   * @memberof SiteSettingsApisitesSiteIdPut
   */
  request: InlineObject2;
}

export interface SiteSettingsApiSitesSiteIdSiteNamePutRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdSiteNamePut
   */
  siteId: string;
  /**
   *
   * @type InlineObject3
   * @memberof SiteSettingsApisitesSiteIdSiteNamePut
   */
  request: InlineObject3;
}

export interface SiteSettingsApiSitesSiteIdSiteSubdirDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdSiteSubdirDelete
   */
  siteId: string;
}

export interface SiteSettingsApiSitesSiteIdSiteSubdirPutRequest {
  /**
   * Site ID
   * @type string
   * @memberof SiteSettingsApisitesSiteIdSiteSubdirPut
   */
  siteId: string;
  /**
   *
   * @type InlineObject5
   * @memberof SiteSettingsApisitesSiteIdSiteSubdirPut
   */
  dirName: InlineObject5;
}

export class ObjectSiteSettingsApi {
  private api: ObservableSiteSettingsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SiteSettingsApiRequestFactory,
    responseProcessor?: SiteSettingsApiResponseProcessor
  ) {
    this.api = new ObservableSiteSettingsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Disabling WordPress backups
   * @param param the request object
   */
  public sitesSiteIdBackupDelete(
    param: SiteSettingsApiSitesSiteIdBackupDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdBackupDelete(param.siteId, options).toPromise();
  }

  /**
   * Enabling WordPress backups
   * @param param the request object
   */
  public sitesSiteIdBackupPost(
    param: SiteSettingsApiSitesSiteIdBackupPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdBackupPost(param.siteId, options).toPromise();
  }

  /**
   * Disabling basic authentication
   * @param param the request object
   */
  public sitesSiteIdBasicAuthDelete(
    param: SiteSettingsApiSitesSiteIdBasicAuthDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdBasicAuthDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * Enabling basic authentication
   * @param param the request object
   */
  public sitesSiteIdBasicAuthPost(
    param: SiteSettingsApiSitesSiteIdBasicAuthPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdBasicAuthPost(param.siteId, options).toPromise();
  }

  /**
   * Get the Shifter CDN status
   * @param param the request object
   */
  public sitesSiteIdCdnStatusGet(
    param: SiteSettingsApiSitesSiteIdCdnStatusGetRequest,
    options?: Configuration
  ): Promise<CdnStatusGetResponse> {
    return this.api.sitesSiteIdCdnStatusGet(param.siteId, options).toPromise();
  }

  /**
   * delete destination of access logs
   * @param param the request object
   */
  public sitesSiteIdLogsPathDelete(
    param: SiteSettingsApiSitesSiteIdLogsPathDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdLogsPathDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * set or update destination of access logs
   * @param param the request object
   */
  public sitesSiteIdLogsPathPut(
    param: SiteSettingsApiSitesSiteIdLogsPathPutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdLogsPathPut(param.siteId, param.s3BucketName, options)
      .toPromise();
  }

  /**
   * Disabling media CDN
   * @param param the request object
   */
  public sitesSiteIdMediaCdnDelete(
    param: SiteSettingsApiSitesSiteIdMediaCdnDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdMediaCdnDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * Enabling media CDN
   * @param param the request object
   */
  public sitesSiteIdMediaCdnPost(
    param: SiteSettingsApiSitesSiteIdMediaCdnPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdMediaCdnPost(param.siteId, options).toPromise();
  }

  /**
   * remove protection of delete
   * @param param the request object
   */
  public sitesSiteIdProtectionDelete(
    param: SiteSettingsApiSitesSiteIdProtectionDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdProtectionDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * add protection of delete
   * @param param the request object
   */
  public sitesSiteIdProtectionPost(
    param: SiteSettingsApiSitesSiteIdProtectionPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdProtectionPost(param.siteId, options)
      .toPromise();
  }

  /**
   * update site settings. Updatable attributes are site_name, All in one WP migration configuration, Shifter media cdn configuration, and automatic publish configuration.
   * @param param the request object
   */
  public sitesSiteIdPut(
    param: SiteSettingsApiSitesSiteIdPutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdPut(param.siteId, param.request, options)
      .toPromise();
  }

  /**
   * Update your site name
   * @param param the request object
   */
  public sitesSiteIdSiteNamePut(
    param: SiteSettingsApiSitesSiteIdSiteNamePutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdSiteNamePut(param.siteId, param.request, options)
      .toPromise();
  }

  /**
   * Remove subdirectory name for publishing
   * @param param the request object
   */
  public sitesSiteIdSiteSubdirDelete(
    param: SiteSettingsApiSitesSiteIdSiteSubdirDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdSiteSubdirDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * Set subdirectory name for publishing
   * @param param the request object
   */
  public sitesSiteIdSiteSubdirPut(
    param: SiteSettingsApiSitesSiteIdSiteSubdirPutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdSiteSubdirPut(param.siteId, param.dirName, options)
      .toPromise();
  }
}

export interface SitesApiSitesGetRequest {}

export interface SitesApiSitesMysitesGetRequest {}

export interface SitesApiSitesPostRequest {
  /**
   *
   * @type InlineObject1
   * @memberof SitesApisitesPost
   */
  request: InlineObject1;
}

export interface SitesApiSitesSiteIdCdnPaygDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdCdnPaygDelete
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdCdnPaygPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdCdnPaygPost
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdDelete
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdGenerateHistoryGetRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdGenerateHistoryGet
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdGet
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdNotificationEmailDeleteRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdNotificationEmailDelete
   */
  siteId: string;
  /**
   *
   * @type Array&lt;string&gt;
   * @memberof SitesApisitesSiteIdNotificationEmailDelete
   */
  addresses?: Array<string>;
}

export interface SitesApiSitesSiteIdNotificationEmailGetRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdNotificationEmailGet
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdNotificationEmailPutRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdNotificationEmailPut
   */
  siteId: string;
  /**
   *
   * @type Array&lt;string&gt;
   * @memberof SitesApisitesSiteIdNotificationEmailPut
   */
  addresses?: Array<string>;
}

export interface SitesApiSitesSiteIdPublicContentDeleteRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdPublicContentDelete
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdShifterCdnTransferAmountGetRequest {
  /**
   *
   * @type string
   * @memberof SitesApisitesSiteIdShifterCdnTransferAmountGet
   */
  siteId: string;
  /**
   * Start month of the period you want to acquire the transfer amount ex: 201605
   * @type number
   * @memberof SitesApisitesSiteIdShifterCdnTransferAmountGet
   */
  startMonth?: number;
  /**
   * Period for acquiring it (the month) ex: 12
   * @type number
   * @memberof SitesApisitesSiteIdShifterCdnTransferAmountGet
   */
  range?: number;
}

export interface SitesApiSitesSiteIdSubscriptionMigratePostRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdSubscriptionMigratePost
   */
  siteId: string;
}

export interface SitesApiSitesSiteIdTeamsGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof SitesApisitesSiteIdTeamsGet
   */
  siteId: string;
}

export class ObjectSitesApi {
  private api: ObservableSitesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SitesApiRequestFactory,
    responseProcessor?: SitesApiResponseProcessor
  ) {
    this.api = new ObservableSitesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * List sites user can reach. In these sites, the sites that includes in the list are owner's one and member's one.
   * @param param the request object
   */
  public sitesGet(
    param: SitesApiSitesGetRequest,
    options?: Configuration
  ): Promise<Array<SiteResponse>> {
    return this.api.sitesGet(options).toPromise();
  }

  /**
   * List the information of your sites
   * @param param the request object
   */
  public sitesMysitesGet(
    param: SitesApiSitesMysitesGetRequest,
    options?: Configuration
  ): Promise<Array<SiteResponse>> {
    return this.api.sitesMysitesGet(options).toPromise();
  }

  /**
   * Create a new site. The body parameter site_name or project_name is required. To associate subscription set plan_id and subscription_id.
   * @param param the request object
   */
  public sitesPost(
    param: SitesApiSitesPostRequest,
    options?: Configuration
  ): Promise<SiteCreateResponse> {
    return this.api.sitesPost(param.request, options).toPromise();
  }

  /**
   * Disable the Pay as you go of Data Transfer Usage
   * @param param the request object
   */
  public sitesSiteIdCdnPaygDelete(
    param: SitesApiSitesSiteIdCdnPaygDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdCdnPaygDelete(param.siteId, options).toPromise();
  }

  /**
   * Enable the Pay as you go of Data Transfer Usage
   * @param param the request object
   */
  public sitesSiteIdCdnPaygPost(
    param: SitesApiSitesSiteIdCdnPaygPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdCdnPaygPost(param.siteId, options).toPromise();
  }

  /**
   * Delete your site
   * @param param the request object
   */
  public sitesSiteIdDelete(
    param: SitesApiSitesSiteIdDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.sitesSiteIdDelete(param.siteId, options).toPromise();
  }

  /**
   * You can get the history of generating in the site
   * @param param the request object
   */
  public sitesSiteIdGenerateHistoryGet(
    param: SitesApiSitesSiteIdGenerateHistoryGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse20010>> {
    return this.api
      .sitesSiteIdGenerateHistoryGet(param.siteId, options)
      .toPromise();
  }

  /**
   * Get your site information
   * @param param the request object
   */
  public sitesSiteIdGet(
    param: SitesApiSitesSiteIdGetRequest,
    options?: Configuration
  ): Promise<SiteResponse> {
    return this.api.sitesSiteIdGet(param.siteId, options).toPromise();
  }

  /**
   * delete notification email for the site event
   * @param param the request object
   */
  public sitesSiteIdNotificationEmailDelete(
    param: SitesApiSitesSiteIdNotificationEmailDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdNotificationEmailDelete(
        param.siteId,
        param.addresses,
        options
      )
      .toPromise();
  }

  /**
   * get notification email for the site event
   * @param param the request object
   */
  public sitesSiteIdNotificationEmailGet(
    param: SitesApiSitesSiteIdNotificationEmailGetRequest,
    options?: Configuration
  ): Promise<Array<string>> {
    return this.api
      .sitesSiteIdNotificationEmailGet(param.siteId, options)
      .toPromise();
  }

  /**
   * update notification email for the site event
   * @param param the request object
   */
  public sitesSiteIdNotificationEmailPut(
    param: SitesApiSitesSiteIdNotificationEmailPutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdNotificationEmailPut(param.siteId, param.addresses, options)
      .toPromise();
  }

  /**
   * clear public content
   * @param param the request object
   */
  public sitesSiteIdPublicContentDelete(
    param: SitesApiSitesSiteIdPublicContentDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .sitesSiteIdPublicContentDelete(param.siteId, options)
      .toPromise();
  }

  /**
   * You can get the transfer amount for Shifter CDN
   * @param param the request object
   */
  public sitesSiteIdShifterCdnTransferAmountGet(
    param: SitesApiSitesSiteIdShifterCdnTransferAmountGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse20011>> {
    return this.api
      .sitesSiteIdShifterCdnTransferAmountGet(
        param.siteId,
        param.startMonth,
        param.range,
        options
      )
      .toPromise();
  }

  /**
   * Migrate from previous plan to Shifter current plan
   * @param param the request object
   */
  public sitesSiteIdSubscriptionMigratePost(
    param: SitesApiSitesSiteIdSubscriptionMigratePostRequest,
    options?: Configuration
  ): Promise<string> {
    return this.api
      .sitesSiteIdSubscriptionMigratePost(param.siteId, options)
      .toPromise();
  }

  /**
   * list team Id which the site belongs to
   * @param param the request object
   */
  public sitesSiteIdTeamsGet(
    param: SitesApiSitesSiteIdTeamsGetRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.sitesSiteIdTeamsGet(param.siteId, options).toPromise();
  }
}

export interface StatisticsApiStatisticsUsageSummaryGetRequest {}

export class ObjectStatisticsApi {
  private api: ObservableStatisticsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatisticsApiRequestFactory,
    responseProcessor?: StatisticsApiResponseProcessor
  ) {
    this.api = new ObservableStatisticsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * (Previous Plan) Monthly Statistics of Site usage
   * @param param the request object
   */
  public statisticsUsageSummaryGet(
    param: StatisticsApiStatisticsUsageSummaryGetRequest,
    options?: Configuration
  ): Promise<UsageSummaryGetResponse> {
    return this.api.statisticsUsageSummaryGet(options).toPromise();
  }
}

export interface StatusApiStatusGetRequest {}

export interface StatusApiStatusTeamsTeamIdRoleGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof StatusApistatusTeamsTeamIdRoleGet
   */
  teamId: string;
}

export class ObjectStatusApi {
  private api: ObservableStatusApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusApiRequestFactory,
    responseProcessor?: StatusApiResponseProcessor
  ) {
    this.api = new ObservableStatusApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get the status of your account and Shifter
   * @param param the request object
   */
  public statusGet(
    param: StatusApiStatusGetRequest,
    options?: Configuration
  ): Promise<StatusGetResponse> {
    return this.api.statusGet(options).toPromise();
  }

  /**
   * Get role specific team of logged in user
   * @param param the request object
   */
  public statusTeamsTeamIdRoleGet(
    param: StatusApiStatusTeamsTeamIdRoleGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2009> {
    return this.api.statusTeamsTeamIdRoleGet(param.teamId, options).toPromise();
  }
}

export interface TeamsApiTeamsGetRequest {}

export interface TeamsApiTeamsMembersMemberNameTeamsGetRequest {
  /**
   * Member&#39;s name
   * @type string
   * @memberof TeamsApiteamsMembersMemberNameTeamsGet
   */
  memberName: string;
}

export interface TeamsApiTeamsPostRequest {
  /**
   *
   * @type TeamsResponseWithoutId
   * @memberof TeamsApiteamsPost
   */
  request: TeamsResponseWithoutId;
}

export interface TeamsApiTeamsTeamIdActivationKeyPostRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdActivationKeyPost
   */
  teamId: string;
  /**
   * Activation key which is sent when owner invites other user to the team
   * @type string
   * @memberof TeamsApiteamsTeamIdActivationKeyPost
   */
  key: string;
}

export interface TeamsApiTeamsTeamIdDeleteRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdDelete
   */
  teamId: string;
}

export interface TeamsApiTeamsTeamIdGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdGet
   */
  teamId: string;
}

export interface TeamsApiTeamsTeamIdMembersGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersGet
   */
  teamId: string;
}

export interface TeamsApiTeamsTeamIdMembersNameGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameGet
   */
  teamId: string;
  /**
   * Name of a member
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameGet
   */
  name: string;
}

export interface TeamsApiTeamsTeamIdMembersNameRoleDeleteRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRoleDelete
   */
  teamId: string;
  /**
   * name of member
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRoleDelete
   */
  name: string;
}

export interface TeamsApiTeamsTeamIdMembersNameRoleGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRoleGet
   */
  teamId: string;
  /**
   * Name of member
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRoleGet
   */
  name: string;
}

export interface TeamsApiTeamsTeamIdMembersNameRolePostRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRolePost
   */
  teamId: string;
  /**
   * Name of member
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRolePost
   */
  name: string;
  /**
   *
   * @type InlineObject18
   * @memberof TeamsApiteamsTeamIdMembersNameRolePost
   */
  request: InlineObject18;
}

export interface TeamsApiTeamsTeamIdMembersNameRolePutRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRolePut
   */
  teamId: string;
  /**
   * name of member
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersNameRolePut
   */
  name: string;
  /**
   *
   * @type InlineObject17
   * @memberof TeamsApiteamsTeamIdMembersNameRolePut
   */
  request: InlineObject17;
}

export interface TeamsApiTeamsTeamIdMembersPostRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdMembersPost
   */
  teamId: string;
  /**
   *
   * @type Array&lt;InlineObject&gt;
   * @memberof TeamsApiteamsTeamIdMembersPost
   */
  request?: Array<InlineObject>;
}

export interface TeamsApiTeamsTeamIdPutRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdPut
   */
  teamId: string;
  /**
   * New team information
   * @type TeamsResponseWithoutId
   * @memberof TeamsApiteamsTeamIdPut
   */
  request: TeamsResponseWithoutId;
}

export interface TeamsApiTeamsTeamIdSitesDeleteRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesDelete
   */
  teamId: string;
  /**
   *
   * @type InlineObject16
   * @memberof TeamsApiteamsTeamIdSitesDelete
   */
  request?: InlineObject16;
}

export interface TeamsApiTeamsTeamIdSitesGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesGet
   */
  teamId: string;
}

export interface TeamsApiTeamsTeamIdSitesPostRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesPost
   */
  teamId: string;
  /**
   *
   * @type InlineObject15
   * @memberof TeamsApiteamsTeamIdSitesPost
   */
  request: InlineObject15;
}

export interface TeamsApiTeamsTeamIdSitesSiteIdGetRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesSiteIdGet
   */
  teamId: string;
  /**
   * Site ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesSiteIdGet
   */
  siteId: string;
}

export interface TeamsApiTeamsTeamIdSitesSiteIdPostRequest {
  /**
   * Team ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesSiteIdPost
   */
  teamId: string;
  /**
   * Site ID
   * @type string
   * @memberof TeamsApiteamsTeamIdSitesSiteIdPost
   */
  siteId: string;
}

export class ObjectTeamsApi {
  private api: ObservableTeamsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: TeamsApiRequestFactory,
    responseProcessor?: TeamsApiResponseProcessor
  ) {
    this.api = new ObservableTeamsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * List teams
   * @param param the request object
   */
  public teamsGet(
    param: TeamsApiTeamsGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2001> {
    return this.api.teamsGet(options).toPromise();
  }

  /**
   * List teams which member belongs into
   * @param param the request object
   */
  public teamsMembersMemberNameTeamsGet(
    param: TeamsApiTeamsMembersMemberNameTeamsGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2002> {
    return this.api
      .teamsMembersMemberNameTeamsGet(param.memberName, options)
      .toPromise();
  }

  /**
   * Create a team
   * @param param the request object
   */
  public teamsPost(
    param: TeamsApiTeamsPostRequest,
    options?: Configuration
  ): Promise<InlineResponse2012> {
    return this.api.teamsPost(param.request, options).toPromise();
  }

  /**
   * Activate user who is invited the team
   * @param param the request object
   */
  public teamsTeamIdActivationKeyPost(
    param: TeamsApiTeamsTeamIdActivationKeyPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdActivationKeyPost(param.teamId, param.key, options)
      .toPromise();
  }

  /**
   * Delete a team
   * @param param the request object
   */
  public teamsTeamIdDelete(
    param: TeamsApiTeamsTeamIdDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.teamsTeamIdDelete(param.teamId, options).toPromise();
  }

  /**
   * Get a details of team
   * @param param the request object
   */
  public teamsTeamIdGet(
    param: TeamsApiTeamsTeamIdGetRequest,
    options?: Configuration
  ): Promise<TeamsResponseWithId> {
    return this.api.teamsTeamIdGet(param.teamId, options).toPromise();
  }

  /**
   * List users specified team
   * @param param the request object
   */
  public teamsTeamIdMembersGet(
    param: TeamsApiTeamsTeamIdMembersGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2003>> {
    return this.api.teamsTeamIdMembersGet(param.teamId, options).toPromise();
  }

  /**
   * Get member information specified team and name
   * @param param the request object
   */
  public teamsTeamIdMembersNameGet(
    param: TeamsApiTeamsTeamIdMembersNameGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2004> {
    return this.api
      .teamsTeamIdMembersNameGet(param.teamId, param.name, options)
      .toPromise();
  }

  /**
   * Delete role of specific team member
   * @param param the request object
   */
  public teamsTeamIdMembersNameRoleDelete(
    param: TeamsApiTeamsTeamIdMembersNameRoleDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdMembersNameRoleDelete(param.teamId, param.name, options)
      .toPromise();
  }

  /**
   * Get role of specific team member
   * @param param the request object
   */
  public teamsTeamIdMembersNameRoleGet(
    param: TeamsApiTeamsTeamIdMembersNameRoleGetRequest,
    options?: Configuration
  ): Promise<InlineResponse2005> {
    return this.api
      .teamsTeamIdMembersNameRoleGet(param.teamId, param.name, options)
      .toPromise();
  }

  /**
   * Add role of specific team member
   * @param param the request object
   */
  public teamsTeamIdMembersNameRolePost(
    param: TeamsApiTeamsTeamIdMembersNameRolePostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdMembersNameRolePost(
        param.teamId,
        param.name,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Update role of specific team member
   * @param param the request object
   */
  public teamsTeamIdMembersNameRolePut(
    param: TeamsApiTeamsTeamIdMembersNameRolePutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdMembersNameRolePut(
        param.teamId,
        param.name,
        param.request,
        options
      )
      .toPromise();
  }

  /**
   * Add members to the team by email. If new member already has Shifter Account, This API sends invitation to the the user who matched with email. If new member does not have Shifter account yet, API sends invitation to that email with Sign Up link.
   * @param param the request object
   */
  public teamsTeamIdMembersPost(
    param: TeamsApiTeamsTeamIdMembersPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdMembersPost(param.teamId, param.request, options)
      .toPromise();
  }

  /**
   * Update a team
   * @param param the request object
   */
  public teamsTeamIdPut(
    param: TeamsApiTeamsTeamIdPutRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdPut(param.teamId, param.request, options)
      .toPromise();
  }

  /**
   * Detach sites from specified team
   * @param param the request object
   */
  public teamsTeamIdSitesDelete(
    param: TeamsApiTeamsTeamIdSitesDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdSitesDelete(param.teamId, param.request, options)
      .toPromise();
  }

  /**
   * List sites in specified team
   * @param param the request object
   */
  public teamsTeamIdSitesGet(
    param: TeamsApiTeamsTeamIdSitesGetRequest,
    options?: Configuration
  ): Promise<Array<SiteResponse>> {
    return this.api.teamsTeamIdSitesGet(param.teamId, options).toPromise();
  }

  /**
   * Add sites to the team
   * @param param the request object
   */
  public teamsTeamIdSitesPost(
    param: TeamsApiTeamsTeamIdSitesPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdSitesPost(param.teamId, param.request, options)
      .toPromise();
  }

  /**
   * Get site details which specified team
   * @param param the request object
   */
  public teamsTeamIdSitesSiteIdGet(
    param: TeamsApiTeamsTeamIdSitesSiteIdGetRequest,
    options?: Configuration
  ): Promise<SiteResponse> {
    return this.api
      .teamsTeamIdSitesSiteIdGet(param.teamId, param.siteId, options)
      .toPromise();
  }

  /**
   * Add a site to specific team
   * @param param the request object
   */
  public teamsTeamIdSitesSiteIdPost(
    param: TeamsApiTeamsTeamIdSitesSiteIdPostRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .teamsTeamIdSitesSiteIdPost(param.teamId, param.siteId, options)
      .toPromise();
  }
}

export interface WebhooksApiWebhooksSiteSiteIdDeleteRequest {
  /**
   * Site ID
   * @type string
   * @memberof WebhooksApiwebhooksSiteSiteIdDelete
   */
  siteId: string;
  /**
   *
   * @type InlineObject21
   * @memberof WebhooksApiwebhooksSiteSiteIdDelete
   */
  request: InlineObject21;
}

export interface WebhooksApiWebhooksSiteSiteIdGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof WebhooksApiwebhooksSiteSiteIdGet
   */
  siteId: string;
}

export interface WebhooksApiWebhooksSiteSiteIdHistoryGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof WebhooksApiwebhooksSiteSiteIdHistoryGet
   */
  siteId: string;
}

export interface WebhooksApiWebhooksSiteSiteIdPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof WebhooksApiwebhooksSiteSiteIdPost
   */
  siteId: string;
  /**
   *
   * @type InlineObject20
   * @memberof WebhooksApiwebhooksSiteSiteIdPost
   */
  request: InlineObject20;
}

export interface WebhooksApiWebhooksSiteSiteIdPutRequest {
  /**
   * Site ID
   * @type string
   * @memberof WebhooksApiwebhooksSiteSiteIdPut
   */
  siteId: string;
  /**
   *
   * @type InlineObject19
   * @memberof WebhooksApiwebhooksSiteSiteIdPut
   */
  request: InlineObject19;
}

export class ObjectWebhooksApi {
  private api: ObservableWebhooksApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhooksApiRequestFactory,
    responseProcessor?: WebhooksApiResponseProcessor
  ) {
    this.api = new ObservableWebhooksApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Delete webhooks
   * @param param the request object
   */
  public webhooksSiteSiteIdDelete(
    param: WebhooksApiWebhooksSiteSiteIdDeleteRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    return this.api
      .webhooksSiteSiteIdDelete(param.siteId, param.request, options)
      .toPromise();
  }

  /**
   * Get webhooks
   * @param param the request object
   */
  public webhooksSiteSiteIdGet(
    param: WebhooksApiWebhooksSiteSiteIdGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    return this.api.webhooksSiteSiteIdGet(param.siteId, options).toPromise();
  }

  /**
   * List webhook history
   * @param param the request object
   */
  public webhooksSiteSiteIdHistoryGet(
    param: WebhooksApiWebhooksSiteSiteIdHistoryGetRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2007>> {
    return this.api
      .webhooksSiteSiteIdHistoryGet(param.siteId, options)
      .toPromise();
  }

  /**
   * Create webhooks
   * @param param the request object
   */
  public webhooksSiteSiteIdPost(
    param: WebhooksApiWebhooksSiteSiteIdPostRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    return this.api
      .webhooksSiteSiteIdPost(param.siteId, param.request, options)
      .toPromise();
  }

  /**
   * Update webhooks
   * @param param the request object
   */
  public webhooksSiteSiteIdPut(
    param: WebhooksApiWebhooksSiteSiteIdPutRequest,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    return this.api
      .webhooksSiteSiteIdPut(param.siteId, param.request, options)
      .toPromise();
  }
}

export interface WordPressApiSitesSiteIdWordpressSiteCheckWpSetupNotificationIdGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof WordPressApisitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet
   */
  siteId: string;
  /**
   * Notification ID
   * @type string
   * @memberof WordPressApisitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet
   */
  notificationId: string;
}

export interface WordPressApiSitesSiteIdWordpressSiteErrorsGetRequest {
  /**
   * Site ID
   * @type string
   * @memberof WordPressApisitesSiteIdWordpressSiteErrorsGet
   */
  siteId: string;
}

export interface WordPressApiSitesSiteIdWordpressSiteStartPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof WordPressApisitesSiteIdWordpressSiteStartPost
   */
  siteId: string;
  /**
   *
   * @type InlineObject4
   * @memberof WordPressApisitesSiteIdWordpressSiteStartPost
   */
  request?: InlineObject4;
}

export interface WordPressApiSitesSiteIdWordpressSiteStopPostRequest {
  /**
   * Site ID
   * @type string
   * @memberof WordPressApisitesSiteIdWordpressSiteStopPost
   */
  siteId: string;
}

export class ObjectWordPressApi {
  private api: ObservableWordPressApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: WordPressApiRequestFactory,
    responseProcessor?: WordPressApiResponseProcessor
  ) {
    this.api = new ObservableWordPressApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Start WordPress
   * @param param the request object
   */
  public sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
    param: WordPressApiSitesSiteIdWordpressSiteCheckWpSetupNotificationIdGetRequest,
    options?: Configuration
  ): Promise<string> {
    return this.api
      .sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
        param.siteId,
        param.notificationId,
        options
      )
      .toPromise();
  }

  /**
   * Get errors of WordPress container
   * @param param the request object
   */
  public sitesSiteIdWordpressSiteErrorsGet(
    param: WordPressApiSitesSiteIdWordpressSiteErrorsGetRequest,
    options?: Configuration
  ): Promise<InlineResponse200> {
    return this.api
      .sitesSiteIdWordpressSiteErrorsGet(param.siteId, options)
      .toPromise();
  }

  /**
   * Start WordPress
   * @param param the request object
   */
  public sitesSiteIdWordpressSiteStartPost(
    param: WordPressApiSitesSiteIdWordpressSiteStartPostRequest,
    options?: Configuration
  ): Promise<InlineResponse201> {
    return this.api
      .sitesSiteIdWordpressSiteStartPost(param.siteId, param.request, options)
      .toPromise();
  }

  /**
   * Stop WordPress
   * @param param the request object
   */
  public sitesSiteIdWordpressSiteStopPost(
    param: WordPressApiSitesSiteIdWordpressSiteStopPostRequest,
    options?: Configuration
  ): Promise<InlineResponse2011> {
    return this.api
      .sitesSiteIdWordpressSiteStopPost(param.siteId, options)
      .toPromise();
  }
}
