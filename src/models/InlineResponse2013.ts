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

export class InlineResponse2013 {
  /**
   * Job Id which publish the artifact on specific date. This parameter only returns when the date of publish was specified.
   */
  'jobId'?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'jobId',
      baseName: 'job_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return InlineResponse2013.attributeTypeMap;
  }

  public constructor() {}
}