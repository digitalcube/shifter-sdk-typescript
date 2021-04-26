/**
 * Shifter API
 * Shifter API
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class InlineObject13 {
  'planId'?: InlineObject13PlanIdEnum;
  'currentPanId'?: InlineObject13CurrentPanIdEnum;
  'siteId'?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'planId',
      baseName: 'plan_id',
      type: 'InlineObject13PlanIdEnum',
      format: '',
    },
    {
      name: 'currentPanId',
      baseName: 'current_pan_id',
      type: 'InlineObject13CurrentPanIdEnum',
      format: '',
    },
    {
      name: 'siteId',
      baseName: 'site_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return InlineObject13.attributeTypeMap;
  }

  public constructor() {}
}

export type InlineObject13PlanIdEnum =
  | 'tier_01_year'
  | 'tier_01_month'
  | 'tier_02_year'
  | 'tier_02_month'
  | 'tier_03_year'
  | 'tier_03_month';
export type InlineObject13CurrentPanIdEnum =
  | 'tier_01_year'
  | 'tier_01_month'
  | 'tier_02_year'
  | 'tier_02_month'
  | 'tier_03_year'
  | 'tier_03_month';
