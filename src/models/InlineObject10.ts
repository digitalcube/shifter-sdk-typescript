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

export class InlineObject10 {
  /**
   * This flag instructs Domain has been routed with another CDN. [true]- Domain has been associating with Shifter CDN. [false]- Domain has been associating another(your own).
   */
  'useShifterDomain'?: boolean;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'useShifterDomain',
      baseName: 'use_shifter_domain',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return InlineObject10.attributeTypeMap;
  }

  public constructor() {}
}