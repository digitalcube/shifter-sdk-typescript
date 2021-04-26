import { AccountApi } from './accountApi';
import { ArtifactsApi } from './artifactsApi';
import { BillingApi } from './billingApi';
import { CouponApi } from './couponApi';
import { DomainsReplacedToTheSiteDomainsApi } from './domainsReplacedToTheSiteDomainsApi';
import { IntercomApi } from './intercomApi';
import { LoginApi } from './loginApi';
import { PlansApi } from './plansApi';
import { RolesApi } from './rolesApi';
import { SiteDomainsApi } from './siteDomainsApi';
import { SiteSettingsApi } from './siteSettingsApi';
import { SitesApi } from './sitesApi';
import { StatisticsApi } from './statisticsApi';
import { StatusApi } from './statusApi';
import { TeamsApi } from './teamsApi';
import { WebhooksApi } from './webhooksApi';
import { WordPressApi } from './wordPressApi';
import * as http from 'http';
export * from './accountApi';
export * from './artifactsApi';
export * from './billingApi';
export * from './couponApi';
export * from './domainsReplacedToTheSiteDomainsApi';
export * from './intercomApi';
export * from './loginApi';
export * from './plansApi';
export * from './rolesApi';
export * from './siteDomainsApi';
export * from './siteSettingsApi';
export * from './sitesApi';
export * from './statisticsApi';
export * from './statusApi';
export * from './teamsApi';
export * from './webhooksApi';
export * from './wordPressApi';

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number
  ) {
    super('HTTP request failed');
    this.name = 'HttpError';
  }
}

export { RequestFile } from '../model/models';

export const APIS = [
  AccountApi,
  ArtifactsApi,
  BillingApi,
  CouponApi,
  DomainsReplacedToTheSiteDomainsApi,
  IntercomApi,
  LoginApi,
  PlansApi,
  RolesApi,
  SiteDomainsApi,
  SiteSettingsApi,
  SitesApi,
  StatisticsApi,
  StatusApi,
  TeamsApi,
  WebhooksApi,
  WordPressApi,
];
