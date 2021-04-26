export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './artifactsApi';
import { ArtifactsApi } from './artifactsApi';
export * from './billingApi';
import { BillingApi } from './billingApi';
export * from './couponApi';
import { CouponApi } from './couponApi';
export * from './domainsReplacedToTheSiteDomainsApi';
import { DomainsReplacedToTheSiteDomainsApi } from './domainsReplacedToTheSiteDomainsApi';
export * from './intercomApi';
import { IntercomApi } from './intercomApi';
export * from './loginApi';
import { LoginApi } from './loginApi';
export * from './plansApi';
import { PlansApi } from './plansApi';
export * from './rolesApi';
import { RolesApi } from './rolesApi';
export * from './siteDomainsApi';
import { SiteDomainsApi } from './siteDomainsApi';
export * from './siteSettingsApi';
import { SiteSettingsApi } from './siteSettingsApi';
export * from './sitesApi';
import { SitesApi } from './sitesApi';
export * from './statisticsApi';
import { StatisticsApi } from './statisticsApi';
export * from './statusApi';
import { StatusApi } from './statusApi';
export * from './teamsApi';
import { TeamsApi } from './teamsApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
export * from './wordPressApi';
import { WordPressApi } from './wordPressApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountApi, ArtifactsApi, BillingApi, CouponApi, DomainsReplacedToTheSiteDomainsApi, IntercomApi, LoginApi, PlansApi, RolesApi, SiteDomainsApi, SiteSettingsApi, SitesApi, StatisticsApi, StatusApi, TeamsApi, WebhooksApi, WordPressApi];
