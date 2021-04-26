import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration } from '../configuration';
import { Observable, of, from } from '../rxjsStub';
import { mergeMap, map } from '../rxjsStub';
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

import {
  AccountApiRequestFactory,
  AccountApiResponseProcessor,
} from '../apis/AccountApi';

import {
  ArtifactsApiRequestFactory,
  ArtifactsApiResponseProcessor,
} from '../apis/ArtifactsApi';

import {
  BillingApiRequestFactory,
  BillingApiResponseProcessor,
} from '../apis/BillingApi';

import {
  CouponApiRequestFactory,
  CouponApiResponseProcessor,
} from '../apis/CouponApi';

import {
  DomainsReplacedToTheSiteDomainsApiRequestFactory,
  DomainsReplacedToTheSiteDomainsApiResponseProcessor,
} from '../apis/DomainsReplacedToTheSiteDomainsApi';

import {
  IntercomApiRequestFactory,
  IntercomApiResponseProcessor,
} from '../apis/IntercomApi';

import {
  LoginApiRequestFactory,
  LoginApiResponseProcessor,
} from '../apis/LoginApi';

import {
  PlansApiRequestFactory,
  PlansApiResponseProcessor,
} from '../apis/PlansApi';

import {
  RolesApiRequestFactory,
  RolesApiResponseProcessor,
} from '../apis/RolesApi';

import {
  SiteDomainsApiRequestFactory,
  SiteDomainsApiResponseProcessor,
} from '../apis/SiteDomainsApi';

import {
  SiteSettingsApiRequestFactory,
  SiteSettingsApiResponseProcessor,
} from '../apis/SiteSettingsApi';

import {
  SitesApiRequestFactory,
  SitesApiResponseProcessor,
} from '../apis/SitesApi';

import {
  StatisticsApiRequestFactory,
  StatisticsApiResponseProcessor,
} from '../apis/StatisticsApi';

import {
  StatusApiRequestFactory,
  StatusApiResponseProcessor,
} from '../apis/StatusApi';

import {
  TeamsApiRequestFactory,
  TeamsApiResponseProcessor,
} from '../apis/TeamsApi';

import {
  WebhooksApiRequestFactory,
  WebhooksApiResponseProcessor,
} from '../apis/WebhooksApi';

import {
  WordPressApiRequestFactory,
  WordPressApiResponseProcessor,
} from '../apis/WordPressApi';
export class ObservableAccountApi {
  private requestFactory: AccountApiRequestFactory;
  private responseProcessor: AccountApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AccountApiRequestFactory,
    responseProcessor?: AccountApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AccountApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AccountApiResponseProcessor();
  }

  /**
   * Check user is valid
   */
  public accountAvailablePost(
    options?: Configuration
  ): Observable<InlineResponse2015> {
    const requestContextPromise = this.requestFactory.accountAvailablePost(
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountAvailablePost(rsp)
            )
          );
        })
      );
  }

  /**
   * You can delete your account. An invited user cannot be accessed this API.
   */
  public accountDelete(options?: Configuration): Observable<void> {
    const requestContextPromise = this.requestFactory.accountDelete(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Update address which will be written it to the invoice
   * @param request
   */
  public accountInvoiceAddressPost(
    request?: InlineObject27,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.accountInvoiceAddressPost(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountInvoiceAddressPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Get events of user authentication
   * @param maxResults number of authentication results. maximum 60.
   */
  public accountLogAuthEventsGet(
    maxResults?: number,
    options?: Configuration
  ): Observable<Array<InlineResponse20012>> {
    const requestContextPromise = this.requestFactory.accountLogAuthEventsGet(
      maxResults,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountLogAuthEventsGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Synchronize your email to stripe
   */
  public accountNotificationEmailSynchronizationPost(
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.accountNotificationEmailSynchronizationPost(
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountNotificationEmailSynchronizationPost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.accountNotificationTargetPost(
      target,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.accountNotificationTargetPost(rsp)
            )
          );
        })
      );
  }
}
export class ObservableArtifactsApi {
  private requestFactory: ArtifactsApiRequestFactory;
  private responseProcessor: ArtifactsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ArtifactsApiRequestFactory,
    responseProcessor?: ArtifactsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ArtifactsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ArtifactsApiResponseProcessor();
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
  ): Observable<ArtifactDownloadResponse> {
    const requestContextPromise = this.requestFactory.projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
      projectId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.projectsProjectIdArtifactsArtifactIdDownloadUrlGet(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdArtifactNamePut(
      siteId,
      artifactId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdArtifactNamePut(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<InlineResponse2008> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdBackupUrlGet(
      siteId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdBackupUrlGet(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdDelete(
      siteId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
      siteId,
      artifactId,
      deployType,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdDeployDeployTypePost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<ArtifactDownloadResponse> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
      siteId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdDownloadUrlGet(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdGeneratorDelete(
      siteId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdGeneratorDelete(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdPreviewPost(
      siteId,
      artifactId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdPreviewPost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
      siteId,
      artifactId,
      jobId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdPublishJobIdDelete(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<InlineResponse2014> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
      siteId,
      artifactId,
      jobId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdPublishJobIdPost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<InlineResponse2013> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdPublishPost(
      siteId,
      artifactId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdPublishPost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
      siteId,
      artifactId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsArtifactIdWebhookRunnerPost(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * List all artifacts.
   * @param siteId Site ID
   */
  public sitesSiteIdArtifactsGet(
    siteId: string,
    options?: Configuration
  ): Observable<Array<ArtifactGetResponse>> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Generate artifact.
   * @param siteId Site ID
   */
  public sitesSiteIdArtifactsPost(
    siteId: string,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.sitesSiteIdArtifactsPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdArtifactsPost(rsp)
            )
          );
        })
      );
  }

  /**
   * You can get the process of generating
   * @param siteId
   */
  public sitesSiteIdCheckGeneratorProcessGet(
    siteId: string,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.sitesSiteIdCheckGeneratorProcessGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdCheckGeneratorProcessGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableBillingApi {
  private requestFactory: BillingApiRequestFactory;
  private responseProcessor: BillingApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: BillingApiRequestFactory,
    responseProcessor?: BillingApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new BillingApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new BillingApiResponseProcessor();
  }

  /**
   * Update payment method
   * @param request
   */
  public billingPost(
    request: InlineObject14,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.billingPost(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Get available plans
   * @param interval
   */
  public billingsPlansGet(
    interval?: 'all' | 'month' | 'year',
    options?: Configuration
  ): Observable<Array<PlanGetResponse>> {
    const requestContextPromise = this.requestFactory.billingsPlansGet(
      interval,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsPlansGet(rsp)
            )
          );
        })
      );
  }

  /**
   * List all subscriptions in the current shifter account
   */
  public billingsSubscriptionsGet(
    options?: Configuration
  ): Observable<Array<SubscriptionGetResponse>> {
    const requestContextPromise = this.requestFactory.billingsSubscriptionsGet(
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsSubscriptionsGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Create a subscription.
   * @param plan
   */
  public billingsSubscriptionsPost(
    plan: InlineObject12,
    options?: Configuration
  ): Observable<SubscriptionCreateResponse> {
    const requestContextPromise = this.requestFactory.billingsSubscriptionsPost(
      plan,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsSubscriptionsPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Getting subscription status
   */
  public billingsSubscriptionsStatusGet(
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.billingsSubscriptionsStatusGet(
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsSubscriptionsStatusGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Delete a subscription
   * @param subscriptionId
   */
  public billingsSubscriptionsSubscriptionIdDelete(
    subscriptionId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.billingsSubscriptionsSubscriptionIdDelete(
      subscriptionId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsSubscriptionsSubscriptionIdDelete(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<SubscriptionUpdateResponse> {
    const requestContextPromise = this.requestFactory.billingsSubscriptionsSubscriptionIdPost(
      subscriptionId,
      plan,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.billingsSubscriptionsSubscriptionIdPost(
                rsp
              )
            )
          );
        })
      );
  }
}
export class ObservableCouponApi {
  private requestFactory: CouponApiRequestFactory;
  private responseProcessor: CouponApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CouponApiRequestFactory,
    responseProcessor?: CouponApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CouponApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CouponApiResponseProcessor();
  }

  /**
   * Get coupon
   */
  public couponGet(options?: Configuration): Observable<CouponGetResponse> {
    const requestContextPromise = this.requestFactory.couponGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.couponGet(rsp))
          );
        })
      );
  }

  /**
   * Register coupon code.
   * @param code Code of coupon
   */
  public couponsCodePost(
    code: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.couponsCodePost(
      code,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.couponsCodePost(rsp)
            )
          );
        })
      );
  }
}
export class ObservableDomainsReplacedToTheSiteDomainsApi {
  private requestFactory: DomainsReplacedToTheSiteDomainsApiRequestFactory;
  private responseProcessor: DomainsReplacedToTheSiteDomainsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DomainsReplacedToTheSiteDomainsApiRequestFactory,
    responseProcessor?: DomainsReplacedToTheSiteDomainsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new DomainsReplacedToTheSiteDomainsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new DomainsReplacedToTheSiteDomainsApiResponseProcessor();
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainAttachDomainToShifterCdnPost(
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainAttachDomainToShifterCdnPost(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * Delete the added domain
   * @param domain
   */
  public domainsDomainDelete(
    domain: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainDelete(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Detach your domain from Shifter CDN
   * @param domain
   */
  public domainsDomainDetachDomainFromShifterCdnPost(
    domain: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainDetachDomainFromShifterCdnPost(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainDetachDomainFromShifterCdnPost(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * You can get the authentication information of the domain registered by the user
   * @param domain
   */
  public domainsDomainGet(
    domain: string,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.domainsDomainGet(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainPost(
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Resend the approval mail of the SSL certificate
   * @param domain
   */
  public domainsDomainResendValidationEmailPost(
    domain: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainResendValidationEmailPost(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainResendValidationEmailPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainSelectionPost(
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainSelectionPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainValidateOperationDnsPost(
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainValidateOperationDnsPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Get validation status of specified domain
   * @param domain
   */
  public domainsDomainValidateOperationDnsValidationGet(
    domain: string,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.domainsDomainValidateOperationDnsValidationGet(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainValidateOperationDnsValidationGet(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * Re validating domain by dns
   * @param domain
   */
  public domainsDomainValidateOperationDnsValidationPost(
    domain: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainValidateOperationDnsValidationPost(
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainValidateOperationDnsValidationPost(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.domainsDomainValidateOperationEmailPost(
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsDomainValidateOperationEmailPost(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * You can get information of your domains registered in shifter
   * @param filter If it is &#x60;sslValid&#x60;, you can only get certified domains
   */
  public domainsGet(
    filter?: string,
    options?: Configuration
  ): Observable<Array<InlineResponse20013>> {
    const requestContextPromise = this.requestFactory.domainsGet(
      filter,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.domainsGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableIntercomApi {
  private requestFactory: IntercomApiRequestFactory;
  private responseProcessor: IntercomApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IntercomApiRequestFactory,
    responseProcessor?: IntercomApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IntercomApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IntercomApiResponseProcessor();
  }

  /**
   * Get intercom hmac
   */
  public intercomHmacGet(options?: Configuration): Observable<string> {
    const requestContextPromise = this.requestFactory.intercomHmacGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.intercomHmacGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableLoginApi {
  private requestFactory: LoginApiRequestFactory;
  private responseProcessor: LoginApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LoginApiRequestFactory,
    responseProcessor?: LoginApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LoginApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LoginApiResponseProcessor();
  }

  /**
   * Login to the Shifter. username and password are required. Return AccessToken and RefreshToken when the request succeeded.
   * @param request
   */
  public loginPost(
    request: LoginPostRequest,
    options?: Configuration
  ): Observable<LoginPostResponse> {
    const requestContextPromise = this.requestFactory.loginPost(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.loginPost(rsp))
          );
        })
      );
  }

  /**
   * Refresh AccessToken by RefreshToken. Return new AccessToken when request succeeded.
   * @param request
   */
  public loginPut(
    request: InlineObject,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.loginPut(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.loginPut(rsp))
          );
        })
      );
  }
}
export class ObservablePlansApi {
  private requestFactory: PlansApiRequestFactory;
  private responseProcessor: PlansApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PlansApiRequestFactory,
    responseProcessor?: PlansApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PlansApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PlansApiResponseProcessor();
  }

  /**
   * (Previous Plan) Get all plans. An invited user cannot be accessed this API.
   */
  public plansGet(options?: Configuration): Observable<any> {
    const requestContextPromise = this.requestFactory.plansGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.plansGet(rsp))
          );
        })
      );
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
  ): Observable<PreviousPlanResponse> {
    const requestContextPromise = this.requestFactory.plansPlanNamePlanTypeGet(
      planName,
      planType,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.plansPlanNamePlanTypeGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableRolesApi {
  private requestFactory: RolesApiRequestFactory;
  private responseProcessor: RolesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolesApiRequestFactory,
    responseProcessor?: RolesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RolesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RolesApiResponseProcessor();
  }

  /**
   * List team member roles
   */
  public rolesGet(options?: Configuration): Observable<Array<RoleGetResponse>> {
    const requestContextPromise = this.requestFactory.rolesGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.rolesGet(rsp))
          );
        })
      );
  }

  /**
   * Get a shifter roles
   * @param name Name of role
   */
  public rolesNameGet(
    name: string,
    options?: Configuration
  ): Observable<RoleGetResponse> {
    const requestContextPromise = this.requestFactory.rolesNameGet(
      name,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolesNameGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableSiteDomainsApi {
  private requestFactory: SiteDomainsApiRequestFactory;
  private responseProcessor: SiteDomainsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SiteDomainsApiRequestFactory,
    responseProcessor?: SiteDomainsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SiteDomainsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SiteDomainsApiResponseProcessor();
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainAttachPost(
      siteId,
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainAttachPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainDelete(
      siteId,
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainDetachPost(
      siteId,
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainDetachPost(rsp)
            )
          );
        })
      );
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
  ): Observable<DomainGetResponse> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainGet(
      siteId,
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainPost(
      siteId,
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainSelectionDelete(
      siteId,
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainSelectionDelete(
                rsp
              )
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainSelectionPost(
      siteId,
      domain,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainSelectionPost(rsp)
            )
          );
        })
      );
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
  ): Observable<DomainValidationGetResponse> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainValidationGet(
      siteId,
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainValidationGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsDomainValidationPost(
      siteId,
      domain,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsDomainValidationPost(rsp)
            )
          );
        })
      );
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
  ): Observable<Array<DomainGetResponse>> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDomainsGet(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDomainsGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableSiteSettingsApi {
  private requestFactory: SiteSettingsApiRequestFactory;
  private responseProcessor: SiteSettingsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SiteSettingsApiRequestFactory,
    responseProcessor?: SiteSettingsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SiteSettingsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SiteSettingsApiResponseProcessor();
  }

  /**
   * Disabling WordPress backups
   * @param siteId Site ID
   */
  public sitesSiteIdBackupDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdBackupDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdBackupDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Enabling WordPress backups
   * @param siteId Site ID
   */
  public sitesSiteIdBackupPost(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdBackupPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdBackupPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Disabling basic authentication
   * @param siteId Site ID
   */
  public sitesSiteIdBasicAuthDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdBasicAuthDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdBasicAuthDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Enabling basic authentication
   * @param siteId Site ID
   */
  public sitesSiteIdBasicAuthPost(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdBasicAuthPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdBasicAuthPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Get the Shifter CDN status
   * @param siteId Site ID
   */
  public sitesSiteIdCdnStatusGet(
    siteId: string,
    options?: Configuration
  ): Observable<CdnStatusGetResponse> {
    const requestContextPromise = this.requestFactory.sitesSiteIdCdnStatusGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdCdnStatusGet(rsp)
            )
          );
        })
      );
  }

  /**
   * delete destination of access logs
   * @param siteId Site ID
   */
  public sitesSiteIdLogsPathDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdLogsPathDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdLogsPathDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdLogsPathPut(
      siteId,
      s3BucketName,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdLogsPathPut(rsp)
            )
          );
        })
      );
  }

  /**
   * Disabling media CDN
   * @param siteId Site ID
   */
  public sitesSiteIdMediaCdnDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdMediaCdnDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdMediaCdnDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Enabling media CDN
   * @param siteId Site ID
   */
  public sitesSiteIdMediaCdnPost(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdMediaCdnPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdMediaCdnPost(rsp)
            )
          );
        })
      );
  }

  /**
   * remove protection of delete
   * @param siteId
   */
  public sitesSiteIdProtectionDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdProtectionDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdProtectionDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * add protection of delete
   * @param siteId
   */
  public sitesSiteIdProtectionPost(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdProtectionPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdProtectionPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdPut(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdPut(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdSiteNamePut(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdSiteNamePut(rsp)
            )
          );
        })
      );
  }

  /**
   * Remove subdirectory name for publishing
   * @param siteId Site ID
   */
  public sitesSiteIdSiteSubdirDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdSiteSubdirDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdSiteSubdirDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdSiteSubdirPut(
      siteId,
      dirName,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdSiteSubdirPut(rsp)
            )
          );
        })
      );
  }
}
export class ObservableSitesApi {
  private requestFactory: SitesApiRequestFactory;
  private responseProcessor: SitesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SitesApiRequestFactory,
    responseProcessor?: SitesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SitesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SitesApiResponseProcessor();
  }

  /**
   * List sites user can reach. In these sites, the sites that includes in the list are owner's one and member's one.
   */
  public sitesGet(options?: Configuration): Observable<Array<SiteResponse>> {
    const requestContextPromise = this.requestFactory.sitesGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.sitesGet(rsp))
          );
        })
      );
  }

  /**
   * List the information of your sites
   */
  public sitesMysitesGet(
    options?: Configuration
  ): Observable<Array<SiteResponse>> {
    const requestContextPromise = this.requestFactory.sitesMysitesGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesMysitesGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Create a new site. The body parameter site_name or project_name is required. To associate subscription set plan_id and subscription_id.
   * @param request
   */
  public sitesPost(
    request: InlineObject1,
    options?: Configuration
  ): Observable<SiteCreateResponse> {
    const requestContextPromise = this.requestFactory.sitesPost(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.sitesPost(rsp))
          );
        })
      );
  }

  /**
   * Disable the Pay as you go of Data Transfer Usage
   * @param siteId Site ID
   */
  public sitesSiteIdCdnPaygDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdCdnPaygDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdCdnPaygDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Enable the Pay as you go of Data Transfer Usage
   * @param siteId Site ID
   */
  public sitesSiteIdCdnPaygPost(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdCdnPaygPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdCdnPaygPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Delete your site
   * @param siteId Site ID
   */
  public sitesSiteIdDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * You can get the history of generating in the site
   * @param siteId
   */
  public sitesSiteIdGenerateHistoryGet(
    siteId: string,
    options?: Configuration
  ): Observable<Array<InlineResponse20010>> {
    const requestContextPromise = this.requestFactory.sitesSiteIdGenerateHistoryGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdGenerateHistoryGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Get your site information
   * @param siteId Site ID
   */
  public sitesSiteIdGet(
    siteId: string,
    options?: Configuration
  ): Observable<SiteResponse> {
    const requestContextPromise = this.requestFactory.sitesSiteIdGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdNotificationEmailDelete(
      siteId,
      addresses,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdNotificationEmailDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * get notification email for the site event
   * @param siteId
   */
  public sitesSiteIdNotificationEmailGet(
    siteId: string,
    options?: Configuration
  ): Observable<Array<string>> {
    const requestContextPromise = this.requestFactory.sitesSiteIdNotificationEmailGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdNotificationEmailGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdNotificationEmailPut(
      siteId,
      addresses,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdNotificationEmailPut(rsp)
            )
          );
        })
      );
  }

  /**
   * clear public content
   * @param siteId
   */
  public sitesSiteIdPublicContentDelete(
    siteId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.sitesSiteIdPublicContentDelete(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdPublicContentDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<Array<InlineResponse20011>> {
    const requestContextPromise = this.requestFactory.sitesSiteIdShifterCdnTransferAmountGet(
      siteId,
      startMonth,
      range,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdShifterCdnTransferAmountGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Migrate from previous plan to Shifter current plan
   * @param siteId Site ID
   */
  public sitesSiteIdSubscriptionMigratePost(
    siteId: string,
    options?: Configuration
  ): Observable<string> {
    const requestContextPromise = this.requestFactory.sitesSiteIdSubscriptionMigratePost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdSubscriptionMigratePost(rsp)
            )
          );
        })
      );
  }

  /**
   * list team Id which the site belongs to
   * @param siteId Site ID
   */
  public sitesSiteIdTeamsGet(
    siteId: string,
    options?: Configuration
  ): Observable<any> {
    const requestContextPromise = this.requestFactory.sitesSiteIdTeamsGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdTeamsGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableStatisticsApi {
  private requestFactory: StatisticsApiRequestFactory;
  private responseProcessor: StatisticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatisticsApiRequestFactory,
    responseProcessor?: StatisticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StatisticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StatisticsApiResponseProcessor();
  }

  /**
   * (Previous Plan) Monthly Statistics of Site usage
   */
  public statisticsUsageSummaryGet(
    options?: Configuration
  ): Observable<UsageSummaryGetResponse> {
    const requestContextPromise = this.requestFactory.statisticsUsageSummaryGet(
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.statisticsUsageSummaryGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableStatusApi {
  private requestFactory: StatusApiRequestFactory;
  private responseProcessor: StatusApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusApiRequestFactory,
    responseProcessor?: StatusApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StatusApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StatusApiResponseProcessor();
  }

  /**
   * Get the status of your account and Shifter
   */
  public statusGet(options?: Configuration): Observable<StatusGetResponse> {
    const requestContextPromise = this.requestFactory.statusGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.statusGet(rsp))
          );
        })
      );
  }

  /**
   * Get role specific team of logged in user
   * @param teamId Team ID
   */
  public statusTeamsTeamIdRoleGet(
    teamId: string,
    options?: Configuration
  ): Observable<InlineResponse2009> {
    const requestContextPromise = this.requestFactory.statusTeamsTeamIdRoleGet(
      teamId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.statusTeamsTeamIdRoleGet(rsp)
            )
          );
        })
      );
  }
}
export class ObservableTeamsApi {
  private requestFactory: TeamsApiRequestFactory;
  private responseProcessor: TeamsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TeamsApiRequestFactory,
    responseProcessor?: TeamsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TeamsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TeamsApiResponseProcessor();
  }

  /**
   * List teams
   */
  public teamsGet(options?: Configuration): Observable<InlineResponse2001> {
    const requestContextPromise = this.requestFactory.teamsGet(options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.teamsGet(rsp))
          );
        })
      );
  }

  /**
   * List teams which member belongs into
   * @param memberName Member&#39;s name
   */
  public teamsMembersMemberNameTeamsGet(
    memberName: string,
    options?: Configuration
  ): Observable<InlineResponse2002> {
    const requestContextPromise = this.requestFactory.teamsMembersMemberNameTeamsGet(
      memberName,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsMembersMemberNameTeamsGet(rsp)
            )
          );
        })
      );
  }

  /**
   * Create a team
   * @param request
   */
  public teamsPost(
    request: TeamsResponseWithoutId,
    options?: Configuration
  ): Observable<InlineResponse2012> {
    const requestContextPromise = this.requestFactory.teamsPost(
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.teamsPost(rsp))
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdActivationKeyPost(
      teamId,
      key,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdActivationKeyPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Delete a team
   * @param teamId Team ID
   */
  public teamsTeamIdDelete(
    teamId: string,
    options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdDelete(
      teamId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Get a details of team
   * @param teamId Team ID
   */
  public teamsTeamIdGet(
    teamId: string,
    options?: Configuration
  ): Observable<TeamsResponseWithId> {
    const requestContextPromise = this.requestFactory.teamsTeamIdGet(
      teamId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdGet(rsp)
            )
          );
        })
      );
  }

  /**
   * List users specified team
   * @param teamId Team ID
   */
  public teamsTeamIdMembersGet(
    teamId: string,
    options?: Configuration
  ): Observable<Array<InlineResponse2003>> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersGet(
      teamId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersGet(rsp)
            )
          );
        })
      );
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
  ): Observable<InlineResponse2004> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersNameGet(
      teamId,
      name,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersNameGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersNameRoleDelete(
      teamId,
      name,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersNameRoleDelete(rsp)
            )
          );
        })
      );
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
  ): Observable<InlineResponse2005> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersNameRoleGet(
      teamId,
      name,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersNameRoleGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersNameRolePost(
      teamId,
      name,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersNameRolePost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersNameRolePut(
      teamId,
      name,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersNameRolePut(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdMembersPost(
      teamId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdMembersPost(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdPut(
      teamId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdPut(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdSitesDelete(
      teamId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdSitesDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * List sites in specified team
   * @param teamId Team ID
   */
  public teamsTeamIdSitesGet(
    teamId: string,
    options?: Configuration
  ): Observable<Array<SiteResponse>> {
    const requestContextPromise = this.requestFactory.teamsTeamIdSitesGet(
      teamId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdSitesGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdSitesPost(
      teamId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdSitesPost(rsp)
            )
          );
        })
      );
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
  ): Observable<SiteResponse> {
    const requestContextPromise = this.requestFactory.teamsTeamIdSitesSiteIdGet(
      teamId,
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdSitesSiteIdGet(rsp)
            )
          );
        })
      );
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
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.teamsTeamIdSitesSiteIdPost(
      teamId,
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.teamsTeamIdSitesSiteIdPost(rsp)
            )
          );
        })
      );
  }
}
export class ObservableWebhooksApi {
  private requestFactory: WebhooksApiRequestFactory;
  private responseProcessor: WebhooksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhooksApiRequestFactory,
    responseProcessor?: WebhooksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WebhooksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WebhooksApiResponseProcessor();
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
  ): Observable<Array<InlineResponse2006>> {
    const requestContextPromise = this.requestFactory.webhooksSiteSiteIdDelete(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.webhooksSiteSiteIdDelete(rsp)
            )
          );
        })
      );
  }

  /**
   * Get webhooks
   * @param siteId Site ID
   */
  public webhooksSiteSiteIdGet(
    siteId: string,
    options?: Configuration
  ): Observable<Array<InlineResponse2006>> {
    const requestContextPromise = this.requestFactory.webhooksSiteSiteIdGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.webhooksSiteSiteIdGet(rsp)
            )
          );
        })
      );
  }

  /**
   * List webhook history
   * @param siteId Site ID
   */
  public webhooksSiteSiteIdHistoryGet(
    siteId: string,
    options?: Configuration
  ): Observable<Array<InlineResponse2007>> {
    const requestContextPromise = this.requestFactory.webhooksSiteSiteIdHistoryGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.webhooksSiteSiteIdHistoryGet(rsp)
            )
          );
        })
      );
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
  ): Observable<Array<InlineResponse2006>> {
    const requestContextPromise = this.requestFactory.webhooksSiteSiteIdPost(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.webhooksSiteSiteIdPost(rsp)
            )
          );
        })
      );
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
  ): Observable<Array<InlineResponse2006>> {
    const requestContextPromise = this.requestFactory.webhooksSiteSiteIdPut(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.webhooksSiteSiteIdPut(rsp)
            )
          );
        })
      );
  }
}
export class ObservableWordPressApi {
  private requestFactory: WordPressApiRequestFactory;
  private responseProcessor: WordPressApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WordPressApiRequestFactory,
    responseProcessor?: WordPressApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WordPressApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WordPressApiResponseProcessor();
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
  ): Observable<string> {
    const requestContextPromise = this.requestFactory.sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
      siteId,
      notificationId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdWordpressSiteCheckWpSetupNotificationIdGet(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   * Get errors of WordPress container
   * @param siteId Site ID
   */
  public sitesSiteIdWordpressSiteErrorsGet(
    siteId: string,
    options?: Configuration
  ): Observable<InlineResponse200> {
    const requestContextPromise = this.requestFactory.sitesSiteIdWordpressSiteErrorsGet(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdWordpressSiteErrorsGet(rsp)
            )
          );
        })
      );
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
  ): Observable<InlineResponse201> {
    const requestContextPromise = this.requestFactory.sitesSiteIdWordpressSiteStartPost(
      siteId,
      request,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdWordpressSiteStartPost(rsp)
            )
          );
        })
      );
  }

  /**
   * Stop WordPress
   * @param siteId Site ID
   */
  public sitesSiteIdWordpressSiteStopPost(
    siteId: string,
    options?: Configuration
  ): Observable<InlineResponse2011> {
    const requestContextPromise = this.requestFactory.sitesSiteIdWordpressSiteStopPost(
      siteId,
      options
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sitesSiteIdWordpressSiteStopPost(rsp)
            )
          );
        })
      );
  }
}
