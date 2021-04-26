import localVarRequest from 'request';

import * as fs from 'fs';

import { AccountLogAuthEventsEventContextData } from './accountLogAuthEventsEventContextData';
import { AccountLogAuthEventsEventFeedback } from './accountLogAuthEventsEventFeedback';
import { AccountLogAuthEventsEventRisk } from './accountLogAuthEventsEventRisk';
import { ArtifactDownloadResponse } from './artifactDownloadResponse';
import { ArtifactGetResponse } from './artifactGetResponse';
import { CdnStatusGetResponse } from './cdnStatusGetResponse';
import { CommonErrorResponse } from './commonErrorResponse';
import { CouponGetResponse } from './couponGetResponse';
import { CouponGetResponseCoupon } from './couponGetResponseCoupon';
import { DomainGetResponse } from './domainGetResponse';
import { DomainValidationGetResponse } from './domainValidationGetResponse';
import { DomainValidationGetResponseCnames } from './domainValidationGetResponseCnames';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject10 } from './inlineObject10';
import { InlineObject11 } from './inlineObject11';
import { InlineObject12 } from './inlineObject12';
import { InlineObject13 } from './inlineObject13';
import { InlineObject14 } from './inlineObject14';
import { InlineObject15 } from './inlineObject15';
import { InlineObject16 } from './inlineObject16';
import { InlineObject17 } from './inlineObject17';
import { InlineObject18 } from './inlineObject18';
import { InlineObject19 } from './inlineObject19';
import { InlineObject2 } from './inlineObject2';
import { InlineObject20 } from './inlineObject20';
import { InlineObject21 } from './inlineObject21';
import { InlineObject22 } from './inlineObject22';
import { InlineObject23 } from './inlineObject23';
import { InlineObject24 } from './inlineObject24';
import { InlineObject25 } from './inlineObject25';
import { InlineObject26 } from './inlineObject26';
import { InlineObject27 } from './inlineObject27';
import { InlineObject28 } from './inlineObject28';
import { InlineObject29 } from './inlineObject29';
import { InlineObject3 } from './inlineObject3';
import { InlineObject30 } from './inlineObject30';
import { InlineObject31 } from './inlineObject31';
import { InlineObject32 } from './inlineObject32';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse20011 } from './inlineResponse20011';
import { InlineResponse20012 } from './inlineResponse20012';
import { InlineResponse20013 } from './inlineResponse20013';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2009 } from './inlineResponse2009';
import { InlineResponse200Errors } from './inlineResponse200Errors';
import { InlineResponse201 } from './inlineResponse201';
import { InlineResponse2011 } from './inlineResponse2011';
import { InlineResponse2012 } from './inlineResponse2012';
import { InlineResponse2013 } from './inlineResponse2013';
import { InlineResponse2014 } from './inlineResponse2014';
import { InlineResponse2015 } from './inlineResponse2015';
import { LoginErrorResponse } from './loginErrorResponse';
import { LoginPostRequest } from './loginPostRequest';
import { LoginPostResponse } from './loginPostResponse';
import { PlanGetResponse } from './planGetResponse';
import { PlanGetResponseMetadata } from './planGetResponseMetadata';
import { PlanResponse } from './planResponse';
import { PlanResponseMetadata } from './planResponseMetadata';
import { PreviousPlanResponse } from './previousPlanResponse';
import { RoleGetResponse } from './roleGetResponse';
import { SiteCreateResponse } from './siteCreateResponse';
import { SiteResponse } from './siteResponse';
import { StatusGetResponse } from './statusGetResponse';
import { StatusGetResponseMaintenance } from './statusGetResponseMaintenance';
import { StatusGetResponseUser } from './statusGetResponseUser';
import { StatusGetResponseUserGroup } from './statusGetResponseUserGroup';
import { StatusGetResponseUserNotification } from './statusGetResponseUserNotification';
import { StatusGetResponseUserNotificationEmail } from './statusGetResponseUserNotificationEmail';
import { SubscriptionCreateResponse } from './subscriptionCreateResponse';
import { SubscriptionGetResponse } from './subscriptionGetResponse';
import { SubscriptionGetResponseBillingThresholds } from './subscriptionGetResponseBillingThresholds';
import { SubscriptionGetResponseDefaultTaxRates } from './subscriptionGetResponseDefaultTaxRates';
import { SubscriptionGetResponseInvoiceCustomerBalanceSettings } from './subscriptionGetResponseInvoiceCustomerBalanceSettings';
import { SubscriptionGetResponseItems } from './subscriptionGetResponseItems';
import { SubscriptionGetResponseItemsData } from './subscriptionGetResponseItemsData';
import { SubscriptionGetResponseItemsPlan } from './subscriptionGetResponseItemsPlan';
import { SubscriptionGetResponseItemsPlanMetadata } from './subscriptionGetResponseItemsPlanMetadata';
import { SubscriptionGetResponseItemsPlanTiers } from './subscriptionGetResponseItemsPlanTiers';
import { SubscriptionGetResponseItemsPlanTransformUsage } from './subscriptionGetResponseItemsPlanTransformUsage';
import { SubscriptionGetResponseItemsPrice } from './subscriptionGetResponseItemsPrice';
import { SubscriptionGetResponseItemsPriceRecurring } from './subscriptionGetResponseItemsPriceRecurring';
import { SubscriptionGetResponsePauseCollection } from './subscriptionGetResponsePauseCollection';
import { SubscriptionGetResponsePendingInvoiceItemInterval } from './subscriptionGetResponsePendingInvoiceItemInterval';
import { SubscriptionGetResponsePendingUpdate } from './subscriptionGetResponsePendingUpdate';
import { SubscriptionGetResponseTransferData } from './subscriptionGetResponseTransferData';
import { SubscriptionUpdateResponse } from './subscriptionUpdateResponse';
import { TeamsResponseWithId } from './teamsResponseWithId';
import { TeamsResponseWithoutId } from './teamsResponseWithoutId';
import { UsageSummaryGetResponse } from './usageSummaryGetResponse';

export * from './accountLogAuthEventsEventContextData';
export * from './accountLogAuthEventsEventFeedback';
export * from './accountLogAuthEventsEventRisk';
export * from './artifactDownloadResponse';
export * from './artifactGetResponse';
export * from './cdnStatusGetResponse';
export * from './commonErrorResponse';
export * from './couponGetResponse';
export * from './couponGetResponseCoupon';
export * from './domainGetResponse';
export * from './domainValidationGetResponse';
export * from './domainValidationGetResponseCnames';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject10';
export * from './inlineObject11';
export * from './inlineObject12';
export * from './inlineObject13';
export * from './inlineObject14';
export * from './inlineObject15';
export * from './inlineObject16';
export * from './inlineObject17';
export * from './inlineObject18';
export * from './inlineObject19';
export * from './inlineObject2';
export * from './inlineObject20';
export * from './inlineObject21';
export * from './inlineObject22';
export * from './inlineObject23';
export * from './inlineObject24';
export * from './inlineObject25';
export * from './inlineObject26';
export * from './inlineObject27';
export * from './inlineObject28';
export * from './inlineObject29';
export * from './inlineObject3';
export * from './inlineObject30';
export * from './inlineObject31';
export * from './inlineObject32';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse20011';
export * from './inlineResponse20012';
export * from './inlineResponse20013';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2009';
export * from './inlineResponse200Errors';
export * from './inlineResponse201';
export * from './inlineResponse2011';
export * from './inlineResponse2012';
export * from './inlineResponse2013';
export * from './inlineResponse2014';
export * from './inlineResponse2015';
export * from './loginErrorResponse';
export * from './loginPostRequest';
export * from './loginPostResponse';
export * from './planGetResponse';
export * from './planGetResponseMetadata';
export * from './planResponse';
export * from './planResponseMetadata';
export * from './previousPlanResponse';
export * from './roleGetResponse';
export * from './siteCreateResponse';
export * from './siteResponse';
export * from './statusGetResponse';
export * from './statusGetResponseMaintenance';
export * from './statusGetResponseUser';
export * from './statusGetResponseUserGroup';
export * from './statusGetResponseUserNotification';
export * from './statusGetResponseUserNotificationEmail';
export * from './subscriptionCreateResponse';
export * from './subscriptionGetResponse';
export * from './subscriptionGetResponseBillingThresholds';
export * from './subscriptionGetResponseDefaultTaxRates';
export * from './subscriptionGetResponseInvoiceCustomerBalanceSettings';
export * from './subscriptionGetResponseItems';
export * from './subscriptionGetResponseItemsData';
export * from './subscriptionGetResponseItemsPlan';
export * from './subscriptionGetResponseItemsPlanMetadata';
export * from './subscriptionGetResponseItemsPlanTiers';
export * from './subscriptionGetResponseItemsPlanTransformUsage';
export * from './subscriptionGetResponseItemsPrice';
export * from './subscriptionGetResponseItemsPriceRecurring';
export * from './subscriptionGetResponsePauseCollection';
export * from './subscriptionGetResponsePendingInvoiceItemInterval';
export * from './subscriptionGetResponsePendingUpdate';
export * from './subscriptionGetResponseTransferData';
export * from './subscriptionUpdateResponse';
export * from './teamsResponseWithId';
export * from './teamsResponseWithoutId';
export * from './usageSummaryGetResponse';

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

/* tslint:disable:no-unused-variable */
let primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
];

let enumsMap: { [index: string]: any } = {
  'InlineObject1.PlanIdEnum': InlineObject1.PlanIdEnum,
  'InlineObject12.PlanIdEnum': InlineObject12.PlanIdEnum,
  'InlineObject13.PlanIdEnum': InlineObject13.PlanIdEnum,
  'InlineObject13.CurrentPanIdEnum': InlineObject13.CurrentPanIdEnum,
};

let typeMap: { [index: string]: any } = {
  AccountLogAuthEventsEventContextData: AccountLogAuthEventsEventContextData,
  AccountLogAuthEventsEventFeedback: AccountLogAuthEventsEventFeedback,
  AccountLogAuthEventsEventRisk: AccountLogAuthEventsEventRisk,
  ArtifactDownloadResponse: ArtifactDownloadResponse,
  ArtifactGetResponse: ArtifactGetResponse,
  CdnStatusGetResponse: CdnStatusGetResponse,
  CommonErrorResponse: CommonErrorResponse,
  CouponGetResponse: CouponGetResponse,
  CouponGetResponseCoupon: CouponGetResponseCoupon,
  DomainGetResponse: DomainGetResponse,
  DomainValidationGetResponse: DomainValidationGetResponse,
  DomainValidationGetResponseCnames: DomainValidationGetResponseCnames,
  InlineObject: InlineObject,
  InlineObject1: InlineObject1,
  InlineObject10: InlineObject10,
  InlineObject11: InlineObject11,
  InlineObject12: InlineObject12,
  InlineObject13: InlineObject13,
  InlineObject14: InlineObject14,
  InlineObject15: InlineObject15,
  InlineObject16: InlineObject16,
  InlineObject17: InlineObject17,
  InlineObject18: InlineObject18,
  InlineObject19: InlineObject19,
  InlineObject2: InlineObject2,
  InlineObject20: InlineObject20,
  InlineObject21: InlineObject21,
  InlineObject22: InlineObject22,
  InlineObject23: InlineObject23,
  InlineObject24: InlineObject24,
  InlineObject25: InlineObject25,
  InlineObject26: InlineObject26,
  InlineObject27: InlineObject27,
  InlineObject28: InlineObject28,
  InlineObject29: InlineObject29,
  InlineObject3: InlineObject3,
  InlineObject30: InlineObject30,
  InlineObject31: InlineObject31,
  InlineObject32: InlineObject32,
  InlineObject4: InlineObject4,
  InlineObject5: InlineObject5,
  InlineObject6: InlineObject6,
  InlineObject7: InlineObject7,
  InlineObject8: InlineObject8,
  InlineObject9: InlineObject9,
  InlineResponse200: InlineResponse200,
  InlineResponse2001: InlineResponse2001,
  InlineResponse20010: InlineResponse20010,
  InlineResponse20011: InlineResponse20011,
  InlineResponse20012: InlineResponse20012,
  InlineResponse20013: InlineResponse20013,
  InlineResponse2002: InlineResponse2002,
  InlineResponse2003: InlineResponse2003,
  InlineResponse2004: InlineResponse2004,
  InlineResponse2005: InlineResponse2005,
  InlineResponse2006: InlineResponse2006,
  InlineResponse2007: InlineResponse2007,
  InlineResponse2008: InlineResponse2008,
  InlineResponse2009: InlineResponse2009,
  InlineResponse200Errors: InlineResponse200Errors,
  InlineResponse201: InlineResponse201,
  InlineResponse2011: InlineResponse2011,
  InlineResponse2012: InlineResponse2012,
  InlineResponse2013: InlineResponse2013,
  InlineResponse2014: InlineResponse2014,
  InlineResponse2015: InlineResponse2015,
  LoginErrorResponse: LoginErrorResponse,
  LoginPostRequest: LoginPostRequest,
  LoginPostResponse: LoginPostResponse,
  PlanGetResponse: PlanGetResponse,
  PlanGetResponseMetadata: PlanGetResponseMetadata,
  PlanResponse: PlanResponse,
  PlanResponseMetadata: PlanResponseMetadata,
  PreviousPlanResponse: PreviousPlanResponse,
  RoleGetResponse: RoleGetResponse,
  SiteCreateResponse: SiteCreateResponse,
  SiteResponse: SiteResponse,
  StatusGetResponse: StatusGetResponse,
  StatusGetResponseMaintenance: StatusGetResponseMaintenance,
  StatusGetResponseUser: StatusGetResponseUser,
  StatusGetResponseUserGroup: StatusGetResponseUserGroup,
  StatusGetResponseUserNotification: StatusGetResponseUserNotification,
  StatusGetResponseUserNotificationEmail: StatusGetResponseUserNotificationEmail,
  SubscriptionCreateResponse: SubscriptionCreateResponse,
  SubscriptionGetResponse: SubscriptionGetResponse,
  SubscriptionGetResponseBillingThresholds: SubscriptionGetResponseBillingThresholds,
  SubscriptionGetResponseDefaultTaxRates: SubscriptionGetResponseDefaultTaxRates,
  SubscriptionGetResponseInvoiceCustomerBalanceSettings: SubscriptionGetResponseInvoiceCustomerBalanceSettings,
  SubscriptionGetResponseItems: SubscriptionGetResponseItems,
  SubscriptionGetResponseItemsData: SubscriptionGetResponseItemsData,
  SubscriptionGetResponseItemsPlan: SubscriptionGetResponseItemsPlan,
  SubscriptionGetResponseItemsPlanMetadata: SubscriptionGetResponseItemsPlanMetadata,
  SubscriptionGetResponseItemsPlanTiers: SubscriptionGetResponseItemsPlanTiers,
  SubscriptionGetResponseItemsPlanTransformUsage: SubscriptionGetResponseItemsPlanTransformUsage,
  SubscriptionGetResponseItemsPrice: SubscriptionGetResponseItemsPrice,
  SubscriptionGetResponseItemsPriceRecurring: SubscriptionGetResponseItemsPriceRecurring,
  SubscriptionGetResponsePauseCollection: SubscriptionGetResponsePauseCollection,
  SubscriptionGetResponsePendingInvoiceItemInterval: SubscriptionGetResponsePendingInvoiceItemInterval,
  SubscriptionGetResponsePendingUpdate: SubscriptionGetResponsePendingUpdate,
  SubscriptionGetResponseTransferData: SubscriptionGetResponseTransferData,
  SubscriptionUpdateResponse: SubscriptionUpdateResponse,
  TeamsResponseWithId: TeamsResponseWithId,
  TeamsResponseWithoutId: TeamsResponseWithoutId,
  UsageSummaryGetResponse: UsageSummaryGetResponse,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === 'Date') {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === 'function'
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers['Authorization'] = 'Bearer ' + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = '';

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == 'query') {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == 'header' &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == 'cookie' &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers['Cookie']) {
        requestOptions.headers['Cookie'] +=
          '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers['Cookie'] =
          this.paramName + '=' + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers['Authorization'] = 'Bearer ' + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void;
