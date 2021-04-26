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
export class PromiseAccountApi {
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
   */
  public accountAvailablePost(
    options?: Configuration
  ): Promise<InlineResponse2015> {
    const result = this.api.accountAvailablePost(options);
    return result.toPromise();
  }

  /**
   * You can delete your account. An invited user cannot be accessed this API.
   */
  public accountDelete(options?: Configuration): Promise<void> {
    const result = this.api.accountDelete(options);
    return result.toPromise();
  }

  /**
   * Update address which will be written it to the invoice
   * @param request
   */
  public accountInvoiceAddressPost(
    request?: InlineObject27,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.accountInvoiceAddressPost(request, options);
    return result.toPromise();
  }

  /**
   * Get events of user authentication
   * @param maxResults number of authentication results. maximum 60.
   */
  public accountLogAuthEventsGet(
    maxResults?: number,
    options?: Configuration
  ): Promise<Array<InlineResponse20012>> {
    const result = this.api.accountLogAuthEventsGet(maxResults, options);
    return result.toPromise();
  }

  /**
   * Synchronize your email to stripe
   */
  public accountNotificationEmailSynchronizationPost(
    options?: Configuration
  ): Promise<void> {
    const result = this.api.accountNotificationEmailSynchronizationPost(
      options
    );
    return result.toPromise();
  }

  /**
   * Adding your email destination when sending some notifications
   * @param target
   * @param request
   */
  public accountNotificationTargetPost(
    target: 'email',
    request?: InlineObject26,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.accountNotificationTargetPost(
      target,
      request,
      options
    );
    return result.toPromise();
  }
}
export class PromiseArtifactsApi {
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
   * @param projectId Site ID
   * @param artifactId Artifact ID
   */
  public projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
    projectId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<ArtifactDownloadResponse> {
    const result = this.api.projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
      projectId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Update your artifact name.
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param request
   */
  public sitesSiteIdArtifactsArtifactIdArtifactNamePut(
    siteId: string,
    artifactId: string,
    request: InlineObject24,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdArtifactNamePut(
      siteId,
      artifactId,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Retrieve path of WordPress from backup archive
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public sitesSiteIdArtifactsArtifactIdBackupUrlGet(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<InlineResponse2008> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdBackupUrlGet(
      siteId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Delete artifacts
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public sitesSiteIdArtifactsArtifactIdDelete(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdDelete(
      siteId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Set the artifact to public on the CDN
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param deployType Deployment Type (only shifter_cdn)
   */
  public sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
    siteId: string,
    artifactId: string,
    deployType: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
      siteId,
      artifactId,
      deployType,
      options
    );
    return result.toPromise();
  }

  /**
   * Get the URL of the artifact. All published assets of the site is included.
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<ArtifactDownloadResponse> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
      siteId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Stop generating process
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public sitesSiteIdArtifactsArtifactIdGeneratorDelete(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdGeneratorDelete(
      siteId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Enable artifact previews
   * @param siteId Site ID
   * @param artifactId Artifact ID
   */
  public sitesSiteIdArtifactsArtifactIdPreviewPost(
    siteId: string,
    artifactId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdPreviewPost(
      siteId,
      artifactId,
      options
    );
    return result.toPromise();
  }

  /**
   * Delete scheduled publish
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param jobId Schedule Job ID
   */
  public sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
    siteId: string,
    artifactId: string,
    jobId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
      siteId,
      artifactId,
      jobId,
      options
    );
    return result.toPromise();
  }

  /**
   * Update publish schedule
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param jobId Schedule Job ID
   * @param request
   */
  public sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
    siteId: string,
    artifactId: string,
    jobId: string,
    request: InlineObject23,
    options?: Configuration
  ): Promise<InlineResponse2014> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
      siteId,
      artifactId,
      jobId,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Set the artifact to public on the Shifter CDN. OR Set the publish date of the artifact
   * @param siteId Site ID
   * @param artifactId Artifact ID
   * @param request
   */
  public sitesSiteIdArtifactsArtifactIdPublishPost(
    siteId: string,
    artifactId: string,
    request?: InlineObject22,
    options?: Configuration
  ): Promise<InlineResponse2013> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdPublishPost(
      siteId,
      artifactId,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * execute webhook of specific artifact
   * @param siteId
   * @param artifactId
   * @param request
   */
  public sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
    siteId: string,
    artifactId: string,
    request?: InlineObject25,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
      siteId,
      artifactId,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * List all artifacts.
   * @param siteId Site ID
   */
  public sitesSiteIdArtifactsGet(
    siteId: string,
    options?: Configuration
  ): Promise<Array<ArtifactGetResponse>> {
    const result = this.api.sitesSiteIdArtifactsGet(siteId, options);
    return result.toPromise();
  }

  /**
   * Generate artifact.
   * @param siteId Site ID
   */
  public sitesSiteIdArtifactsPost(
    siteId: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.sitesSiteIdArtifactsPost(siteId, options);
    return result.toPromise();
  }

  /**
   * You can get the process of generating
   * @param siteId
   */
  public sitesSiteIdCheckGeneratorProcessGet(
    siteId: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.sitesSiteIdCheckGeneratorProcessGet(
      siteId,
      options
    );
    return result.toPromise();
  }
}
export class PromiseBillingApi {
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
   * @param request
   */
  public billingPost(
    request: InlineObject14,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.billingPost(request, options);
    return result.toPromise();
  }

  /**
   * Get available plans
   * @param interval
   */
  public billingsPlansGet(
    interval?: 'all' | 'month' | 'year',
    options?: Configuration
  ): Promise<Array<PlanGetResponse>> {
    const result = this.api.billingsPlansGet(interval, options);
    return result.toPromise();
  }

  /**
   * List all subscriptions in the current shifter account
   */
  public billingsSubscriptionsGet(
    options?: Configuration
  ): Promise<Array<SubscriptionGetResponse>> {
    const result = this.api.billingsSubscriptionsGet(options);
    return result.toPromise();
  }

  /**
   * Create a subscription.
   * @param plan
   */
  public billingsSubscriptionsPost(
    plan: InlineObject12,
    options?: Configuration
  ): Promise<SubscriptionCreateResponse> {
    const result = this.api.billingsSubscriptionsPost(plan, options);
    return result.toPromise();
  }

  /**
   * Getting subscription status
   */
  public billingsSubscriptionsStatusGet(options?: Configuration): Promise<any> {
    const result = this.api.billingsSubscriptionsStatusGet(options);
    return result.toPromise();
  }

  /**
   * Delete a subscription
   * @param subscriptionId
   */
  public billingsSubscriptionsSubscriptionIdDelete(
    subscriptionId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.billingsSubscriptionsSubscriptionIdDelete(
      subscriptionId,
      options
    );
    return result.toPromise();
  }

  /**
   * Update a subscription. Calling this API is allowed to site owner or Administrator members
   * @param subscriptionId Subscription id which update
   * @param plan
   */
  public billingsSubscriptionsSubscriptionIdPost(
    subscriptionId: string,
    plan: InlineObject13,
    options?: Configuration
  ): Promise<SubscriptionUpdateResponse> {
    const result = this.api.billingsSubscriptionsSubscriptionIdPost(
      subscriptionId,
      plan,
      options
    );
    return result.toPromise();
  }
}
export class PromiseCouponApi {
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
   */
  public couponGet(options?: Configuration): Promise<CouponGetResponse> {
    const result = this.api.couponGet(options);
    return result.toPromise();
  }

  /**
   * Register coupon code.
   * @param code Code of coupon
   */
  public couponsCodePost(code: string, options?: Configuration): Promise<void> {
    const result = this.api.couponsCodePost(code, options);
    return result.toPromise();
  }
}
export class PromiseDomainsReplacedToTheSiteDomainsApi {
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
   * @param domain
   * @param request
   */
  public domainsDomainAttachDomainToShifterCdnPost(
    domain: string,
    request: InlineObject30,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainAttachDomainToShifterCdnPost(
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Delete the added domain
   * @param domain
   */
  public domainsDomainDelete(
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainDelete(domain, options);
    return result.toPromise();
  }

  /**
   * Detach your domain from Shifter CDN
   * @param domain
   */
  public domainsDomainDetachDomainFromShifterCdnPost(
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainDetachDomainFromShifterCdnPost(
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * You can get the authentication information of the domain registered by the user
   * @param domain
   */
  public domainsDomainGet(
    domain: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.domainsDomainGet(domain, options);
    return result.toPromise();
  }

  /**
   * Add your domain
   * @param domain
   * @param request
   */
  public domainsDomainPost(
    domain: string,
    request?: InlineObject28,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainPost(domain, request, options);
    return result.toPromise();
  }

  /**
   * Resend the approval mail of the SSL certificate
   * @param domain
   */
  public domainsDomainResendValidationEmailPost(
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainResendValidationEmailPost(
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * Select publishing Subject Alternative Name
   * @param domain
   * @param request
   */
  public domainsDomainSelectionPost(
    domain: string,
    request: InlineObject29,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainSelectionPost(
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Validating domain by CNAME
   * @param domain
   * @param request
   */
  public domainsDomainValidateOperationDnsPost(
    domain: string,
    request?: InlineObject31,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainValidateOperationDnsPost(
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Get validation status of specified domain
   * @param domain
   */
  public domainsDomainValidateOperationDnsValidationGet(
    domain: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.domainsDomainValidateOperationDnsValidationGet(
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * Re validating domain by dns
   * @param domain
   */
  public domainsDomainValidateOperationDnsValidationPost(
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainValidateOperationDnsValidationPost(
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * Validating domain by email
   * @param domain
   * @param request
   */
  public domainsDomainValidateOperationEmailPost(
    domain: string,
    request?: InlineObject32,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.domainsDomainValidateOperationEmailPost(
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * You can get information of your domains registered in shifter
   * @param filter If it is &#x60;sslValid&#x60;, you can only get certified domains
   */
  public domainsGet(
    filter?: string,
    options?: Configuration
  ): Promise<Array<InlineResponse20013>> {
    const result = this.api.domainsGet(filter, options);
    return result.toPromise();
  }
}
export class PromiseIntercomApi {
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
   */
  public intercomHmacGet(options?: Configuration): Promise<string> {
    const result = this.api.intercomHmacGet(options);
    return result.toPromise();
  }
}
export class PromiseLoginApi {
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
   * @param request
   */
  public loginPost(
    request: LoginPostRequest,
    options?: Configuration
  ): Promise<LoginPostResponse> {
    const result = this.api.loginPost(request, options);
    return result.toPromise();
  }

  /**
   * Refresh AccessToken by RefreshToken. Return new AccessToken when request succeeded.
   * @param request
   */
  public loginPut(
    request: InlineObject,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.loginPut(request, options);
    return result.toPromise();
  }
}
export class PromisePlansApi {
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
   */
  public plansGet(options?: Configuration): Promise<any> {
    const result = this.api.plansGet(options);
    return result.toPromise();
  }

  /**
   * (Previous plan) Get details of plan.
   * @param planName Name of play. Specify free or personal or business or agency or agency plus
   * @param planType Team of plan. Specify annual or monthly
   */
  public plansPlanNamePlanTypeGet(
    planName: 'free' | 'personal' | 'business' | 'agency' | 'agency plus',
    planType: 'annual' | 'monthly',
    options?: Configuration
  ): Promise<PreviousPlanResponse> {
    const result = this.api.plansPlanNamePlanTypeGet(
      planName,
      planType,
      options
    );
    return result.toPromise();
  }
}
export class PromiseRolesApi {
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
   */
  public rolesGet(options?: Configuration): Promise<Array<RoleGetResponse>> {
    const result = this.api.rolesGet(options);
    return result.toPromise();
  }

  /**
   * Get a shifter roles
   * @param name Name of role
   */
  public rolesNameGet(
    name: string,
    options?: Configuration
  ): Promise<RoleGetResponse> {
    const result = this.api.rolesNameGet(name, options);
    return result.toPromise();
  }
}
export class PromiseSiteDomainsApi {
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
   * @param siteId Site ID
   * @param domain Name of domain which is attached
   * @param request
   */
  public sitesSiteIdDomainsDomainAttachPost(
    siteId: string,
    domain: string,
    request?: InlineObject9,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainAttachPost(
      siteId,
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Remove domain
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public sitesSiteIdDomainsDomainDelete(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainDelete(
      siteId,
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * detach the domain from Shifter Site.
   * @param siteId Site ID
   * @param domain Name of domain
   * @param request
   */
  public sitesSiteIdDomainsDomainDetachPost(
    siteId: string,
    domain: string,
    request?: InlineObject10,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainDetachPost(
      siteId,
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Get a domain under specific site
   * @param siteId Site ID
   * @param domain
   */
  public sitesSiteIdDomainsDomainGet(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<DomainGetResponse> {
    const result = this.api.sitesSiteIdDomainsDomainGet(
      siteId,
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * add domain of Site
   * @param siteId Site ID
   * @param domain Name of domain
   * @param request
   */
  public sitesSiteIdDomainsDomainPost(
    siteId: string,
    domain: string,
    request?: InlineObject8,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainPost(
      siteId,
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * reset deployment domain
   * @param siteId
   * @param domain
   */
  public sitesSiteIdDomainsDomainSelectionDelete(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainSelectionDelete(
      siteId,
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * choose deployment domain
   * @param siteId
   * @param domain
   * @param request
   */
  public sitesSiteIdDomainsDomainSelectionPost(
    siteId: string,
    domain: string,
    request?: InlineObject11,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainSelectionPost(
      siteId,
      domain,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Get validation status of domain
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public sitesSiteIdDomainsDomainValidationGet(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<DomainValidationGetResponse> {
    const result = this.api.sitesSiteIdDomainsDomainValidationGet(
      siteId,
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * request(again) domain validation
   * @param siteId Site ID
   * @param domain Name of domain
   */
  public sitesSiteIdDomainsDomainValidationPost(
    siteId: string,
    domain: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDomainsDomainValidationPost(
      siteId,
      domain,
      options
    );
    return result.toPromise();
  }

  /**
   * list domains
   * @param siteId Site ID
   * @param request
   */
  public sitesSiteIdDomainsGet(
    siteId: string,
    request?: InlineObject7,
    options?: Configuration
  ): Promise<Array<DomainGetResponse>> {
    const result = this.api.sitesSiteIdDomainsGet(siteId, request, options);
    return result.toPromise();
  }
}
export class PromiseSiteSettingsApi {
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
   * @param siteId Site ID
   */
  public sitesSiteIdBackupDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdBackupDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * Enabling WordPress backups
   * @param siteId Site ID
   */
  public sitesSiteIdBackupPost(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdBackupPost(siteId, options);
    return result.toPromise();
  }

  /**
   * Disabling basic authentication
   * @param siteId Site ID
   */
  public sitesSiteIdBasicAuthDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdBasicAuthDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * Enabling basic authentication
   * @param siteId Site ID
   */
  public sitesSiteIdBasicAuthPost(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdBasicAuthPost(siteId, options);
    return result.toPromise();
  }

  /**
   * Get the Shifter CDN status
   * @param siteId Site ID
   */
  public sitesSiteIdCdnStatusGet(
    siteId: string,
    options?: Configuration
  ): Promise<CdnStatusGetResponse> {
    const result = this.api.sitesSiteIdCdnStatusGet(siteId, options);
    return result.toPromise();
  }

  /**
   * delete destination of access logs
   * @param siteId Site ID
   */
  public sitesSiteIdLogsPathDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdLogsPathDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * set or update destination of access logs
   * @param siteId Site ID
   * @param s3BucketName
   */
  public sitesSiteIdLogsPathPut(
    siteId: string,
    s3BucketName: InlineObject6,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdLogsPathPut(
      siteId,
      s3BucketName,
      options
    );
    return result.toPromise();
  }

  /**
   * Disabling media CDN
   * @param siteId Site ID
   */
  public sitesSiteIdMediaCdnDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdMediaCdnDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * Enabling media CDN
   * @param siteId Site ID
   */
  public sitesSiteIdMediaCdnPost(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdMediaCdnPost(siteId, options);
    return result.toPromise();
  }

  /**
   * remove protection of delete
   * @param siteId
   */
  public sitesSiteIdProtectionDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdProtectionDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * add protection of delete
   * @param siteId
   */
  public sitesSiteIdProtectionPost(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdProtectionPost(siteId, options);
    return result.toPromise();
  }

  /**
   * update site settings. Updatable attributes are site_name, All in one WP migration configuration, Shifter media cdn configuration, and automatic publish configuration.
   * @param siteId Site ID
   * @param request
   */
  public sitesSiteIdPut(
    siteId: string,
    request: InlineObject2,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdPut(siteId, request, options);
    return result.toPromise();
  }

  /**
   * Update your site name
   * @param siteId Site ID
   * @param request
   */
  public sitesSiteIdSiteNamePut(
    siteId: string,
    request: InlineObject3,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdSiteNamePut(siteId, request, options);
    return result.toPromise();
  }

  /**
   * Remove subdirectory name for publishing
   * @param siteId Site ID
   */
  public sitesSiteIdSiteSubdirDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdSiteSubdirDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * Set subdirectory name for publishing
   * @param siteId Site ID
   * @param dirName
   */
  public sitesSiteIdSiteSubdirPut(
    siteId: string,
    dirName: InlineObject5,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdSiteSubdirPut(siteId, dirName, options);
    return result.toPromise();
  }
}
export class PromiseSitesApi {
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
   */
  public sitesGet(options?: Configuration): Promise<Array<SiteResponse>> {
    const result = this.api.sitesGet(options);
    return result.toPromise();
  }

  /**
   * List the information of your sites
   */
  public sitesMysitesGet(
    options?: Configuration
  ): Promise<Array<SiteResponse>> {
    const result = this.api.sitesMysitesGet(options);
    return result.toPromise();
  }

  /**
   * Create a new site. The body parameter site_name or project_name is required. To associate subscription set plan_id and subscription_id.
   * @param request
   */
  public sitesPost(
    request: InlineObject1,
    options?: Configuration
  ): Promise<SiteCreateResponse> {
    const result = this.api.sitesPost(request, options);
    return result.toPromise();
  }

  /**
   * Disable the Pay as you go of Data Transfer Usage
   * @param siteId Site ID
   */
  public sitesSiteIdCdnPaygDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdCdnPaygDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * Enable the Pay as you go of Data Transfer Usage
   * @param siteId Site ID
   */
  public sitesSiteIdCdnPaygPost(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdCdnPaygPost(siteId, options);
    return result.toPromise();
  }

  /**
   * Delete your site
   * @param siteId Site ID
   */
  public sitesSiteIdDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * You can get the history of generating in the site
   * @param siteId
   */
  public sitesSiteIdGenerateHistoryGet(
    siteId: string,
    options?: Configuration
  ): Promise<Array<InlineResponse20010>> {
    const result = this.api.sitesSiteIdGenerateHistoryGet(siteId, options);
    return result.toPromise();
  }

  /**
   * Get your site information
   * @param siteId Site ID
   */
  public sitesSiteIdGet(
    siteId: string,
    options?: Configuration
  ): Promise<SiteResponse> {
    const result = this.api.sitesSiteIdGet(siteId, options);
    return result.toPromise();
  }

  /**
   * delete notification email for the site event
   * @param siteId
   * @param addresses
   */
  public sitesSiteIdNotificationEmailDelete(
    siteId: string,
    addresses?: Array<string>,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdNotificationEmailDelete(
      siteId,
      addresses,
      options
    );
    return result.toPromise();
  }

  /**
   * get notification email for the site event
   * @param siteId
   */
  public sitesSiteIdNotificationEmailGet(
    siteId: string,
    options?: Configuration
  ): Promise<Array<string>> {
    const result = this.api.sitesSiteIdNotificationEmailGet(siteId, options);
    return result.toPromise();
  }

  /**
   * update notification email for the site event
   * @param siteId
   * @param addresses
   */
  public sitesSiteIdNotificationEmailPut(
    siteId: string,
    addresses?: Array<string>,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdNotificationEmailPut(
      siteId,
      addresses,
      options
    );
    return result.toPromise();
  }

  /**
   * clear public content
   * @param siteId
   */
  public sitesSiteIdPublicContentDelete(
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.sitesSiteIdPublicContentDelete(siteId, options);
    return result.toPromise();
  }

  /**
   * You can get the transfer amount for Shifter CDN
   * @param siteId
   * @param startMonth Start month of the period you want to acquire the transfer amount ex: 201605
   * @param range Period for acquiring it (the month) ex: 12
   */
  public sitesSiteIdShifterCdnTransferAmountGet(
    siteId: string,
    startMonth?: number,
    range?: number,
    options?: Configuration
  ): Promise<Array<InlineResponse20011>> {
    const result = this.api.sitesSiteIdShifterCdnTransferAmountGet(
      siteId,
      startMonth,
      range,
      options
    );
    return result.toPromise();
  }

  /**
   * Migrate from previous plan to Shifter current plan
   * @param siteId Site ID
   */
  public sitesSiteIdSubscriptionMigratePost(
    siteId: string,
    options?: Configuration
  ): Promise<string> {
    const result = this.api.sitesSiteIdSubscriptionMigratePost(siteId, options);
    return result.toPromise();
  }

  /**
   * list team Id which the site belongs to
   * @param siteId Site ID
   */
  public sitesSiteIdTeamsGet(
    siteId: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.sitesSiteIdTeamsGet(siteId, options);
    return result.toPromise();
  }
}
export class PromiseStatisticsApi {
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
   */
  public statisticsUsageSummaryGet(
    options?: Configuration
  ): Promise<UsageSummaryGetResponse> {
    const result = this.api.statisticsUsageSummaryGet(options);
    return result.toPromise();
  }
}
export class PromiseStatusApi {
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
   */
  public statusGet(options?: Configuration): Promise<StatusGetResponse> {
    const result = this.api.statusGet(options);
    return result.toPromise();
  }

  /**
   * Get role specific team of logged in user
   * @param teamId Team ID
   */
  public statusTeamsTeamIdRoleGet(
    teamId: string,
    options?: Configuration
  ): Promise<InlineResponse2009> {
    const result = this.api.statusTeamsTeamIdRoleGet(teamId, options);
    return result.toPromise();
  }
}
export class PromiseTeamsApi {
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
   */
  public teamsGet(options?: Configuration): Promise<InlineResponse2001> {
    const result = this.api.teamsGet(options);
    return result.toPromise();
  }

  /**
   * List teams which member belongs into
   * @param memberName Member&#39;s name
   */
  public teamsMembersMemberNameTeamsGet(
    memberName: string,
    options?: Configuration
  ): Promise<InlineResponse2002> {
    const result = this.api.teamsMembersMemberNameTeamsGet(memberName, options);
    return result.toPromise();
  }

  /**
   * Create a team
   * @param request
   */
  public teamsPost(
    request: TeamsResponseWithoutId,
    options?: Configuration
  ): Promise<InlineResponse2012> {
    const result = this.api.teamsPost(request, options);
    return result.toPromise();
  }

  /**
   * Activate user who is invited the team
   * @param teamId Team ID
   * @param key Activation key which is sent when owner invites other user to the team
   */
  public teamsTeamIdActivationKeyPost(
    teamId: string,
    key: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdActivationKeyPost(teamId, key, options);
    return result.toPromise();
  }

  /**
   * Delete a team
   * @param teamId Team ID
   */
  public teamsTeamIdDelete(
    teamId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdDelete(teamId, options);
    return result.toPromise();
  }

  /**
   * Get a details of team
   * @param teamId Team ID
   */
  public teamsTeamIdGet(
    teamId: string,
    options?: Configuration
  ): Promise<TeamsResponseWithId> {
    const result = this.api.teamsTeamIdGet(teamId, options);
    return result.toPromise();
  }

  /**
   * List users specified team
   * @param teamId Team ID
   */
  public teamsTeamIdMembersGet(
    teamId: string,
    options?: Configuration
  ): Promise<Array<InlineResponse2003>> {
    const result = this.api.teamsTeamIdMembersGet(teamId, options);
    return result.toPromise();
  }

  /**
   * Get member information specified team and name
   * @param teamId Team ID
   * @param name Name of a member
   */
  public teamsTeamIdMembersNameGet(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<InlineResponse2004> {
    const result = this.api.teamsTeamIdMembersNameGet(teamId, name, options);
    return result.toPromise();
  }

  /**
   * Delete role of specific team member
   * @param teamId Team ID
   * @param name name of member
   */
  public teamsTeamIdMembersNameRoleDelete(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdMembersNameRoleDelete(
      teamId,
      name,
      options
    );
    return result.toPromise();
  }

  /**
   * Get role of specific team member
   * @param teamId Team ID
   * @param name Name of member
   */
  public teamsTeamIdMembersNameRoleGet(
    teamId: string,
    name: string,
    options?: Configuration
  ): Promise<InlineResponse2005> {
    const result = this.api.teamsTeamIdMembersNameRoleGet(
      teamId,
      name,
      options
    );
    return result.toPromise();
  }

  /**
   * Add role of specific team member
   * @param teamId Team ID
   * @param name Name of member
   * @param request
   */
  public teamsTeamIdMembersNameRolePost(
    teamId: string,
    name: string,
    request: InlineObject18,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdMembersNameRolePost(
      teamId,
      name,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Update role of specific team member
   * @param teamId Team ID
   * @param name name of member
   * @param request
   */
  public teamsTeamIdMembersNameRolePut(
    teamId: string,
    name: string,
    request: InlineObject17,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdMembersNameRolePut(
      teamId,
      name,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Add members to the team by email. If new member already has Shifter Account, This API sends invitation to the the user who matched with email. If new member does not have Shifter account yet, API sends invitation to that email with Sign Up link.
   * @param teamId Team ID
   * @param request
   */
  public teamsTeamIdMembersPost(
    teamId: string,
    request?: Array<InlineObject>,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdMembersPost(teamId, request, options);
    return result.toPromise();
  }

  /**
   * Update a team
   * @param teamId Team ID
   * @param request New team information
   */
  public teamsTeamIdPut(
    teamId: string,
    request: TeamsResponseWithoutId,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdPut(teamId, request, options);
    return result.toPromise();
  }

  /**
   * Detach sites from specified team
   * @param teamId Team ID
   * @param request
   */
  public teamsTeamIdSitesDelete(
    teamId: string,
    request?: InlineObject16,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdSitesDelete(teamId, request, options);
    return result.toPromise();
  }

  /**
   * List sites in specified team
   * @param teamId Team ID
   */
  public teamsTeamIdSitesGet(
    teamId: string,
    options?: Configuration
  ): Promise<Array<SiteResponse>> {
    const result = this.api.teamsTeamIdSitesGet(teamId, options);
    return result.toPromise();
  }

  /**
   * Add sites to the team
   * @param teamId Team ID
   * @param request
   */
  public teamsTeamIdSitesPost(
    teamId: string,
    request: InlineObject15,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdSitesPost(teamId, request, options);
    return result.toPromise();
  }

  /**
   * Get site details which specified team
   * @param teamId Team ID
   * @param siteId Site ID
   */
  public teamsTeamIdSitesSiteIdGet(
    teamId: string,
    siteId: string,
    options?: Configuration
  ): Promise<SiteResponse> {
    const result = this.api.teamsTeamIdSitesSiteIdGet(teamId, siteId, options);
    return result.toPromise();
  }

  /**
   * Add a site to specific team
   * @param teamId Team ID
   * @param siteId Site ID
   */
  public teamsTeamIdSitesSiteIdPost(
    teamId: string,
    siteId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.teamsTeamIdSitesSiteIdPost(teamId, siteId, options);
    return result.toPromise();
  }
}
export class PromiseWebhooksApi {
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
   * @param siteId Site ID
   * @param request
   */
  public webhooksSiteSiteIdDelete(
    siteId: string,
    request: InlineObject21,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    const result = this.api.webhooksSiteSiteIdDelete(siteId, request, options);
    return result.toPromise();
  }

  /**
   * Get webhooks
   * @param siteId Site ID
   */
  public webhooksSiteSiteIdGet(
    siteId: string,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    const result = this.api.webhooksSiteSiteIdGet(siteId, options);
    return result.toPromise();
  }

  /**
   * List webhook history
   * @param siteId Site ID
   */
  public webhooksSiteSiteIdHistoryGet(
    siteId: string,
    options?: Configuration
  ): Promise<Array<InlineResponse2007>> {
    const result = this.api.webhooksSiteSiteIdHistoryGet(siteId, options);
    return result.toPromise();
  }

  /**
   * Create webhooks
   * @param siteId Site ID
   * @param request
   */
  public webhooksSiteSiteIdPost(
    siteId: string,
    request: InlineObject20,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    const result = this.api.webhooksSiteSiteIdPost(siteId, request, options);
    return result.toPromise();
  }

  /**
   * Update webhooks
   * @param siteId Site ID
   * @param request
   */
  public webhooksSiteSiteIdPut(
    siteId: string,
    request: InlineObject19,
    options?: Configuration
  ): Promise<Array<InlineResponse2006>> {
    const result = this.api.webhooksSiteSiteIdPut(siteId, request, options);
    return result.toPromise();
  }
}
export class PromiseWordPressApi {
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
   * @param siteId Site ID
   * @param notificationId Notification ID
   */
  public sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
    siteId: string,
    notificationId: string,
    options?: Configuration
  ): Promise<string> {
    const result = this.api.sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
      siteId,
      notificationId,
      options
    );
    return result.toPromise();
  }

  /**
   * Get errors of WordPress container
   * @param siteId Site ID
   */
  public sitesSiteIdWordpressSiteErrorsGet(
    siteId: string,
    options?: Configuration
  ): Promise<InlineResponse200> {
    const result = this.api.sitesSiteIdWordpressSiteErrorsGet(siteId, options);
    return result.toPromise();
  }

  /**
   * Start WordPress
   * @param siteId Site ID
   * @param request
   */
  public sitesSiteIdWordpressSiteStartPost(
    siteId: string,
    request?: InlineObject4,
    options?: Configuration
  ): Promise<InlineResponse201> {
    const result = this.api.sitesSiteIdWordpressSiteStartPost(
      siteId,
      request,
      options
    );
    return result.toPromise();
  }

  /**
   * Stop WordPress
   * @param siteId Site ID
   */
  public sitesSiteIdWordpressSiteStopPost(
    siteId: string,
    options?: Configuration
  ): Promise<InlineResponse2011> {
    const result = this.api.sitesSiteIdWordpressSiteStopPost(siteId, options);
    return result.toPromise();
  }
}
