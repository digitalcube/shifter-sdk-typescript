/**
 * Shifter API
 * Shifter API
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class InlineObject29 {
    'siteId'?: string;
    'san'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siteId",
            "baseName": "site_id",
            "type": "string"
        },
        {
            "name": "san",
            "baseName": "san",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject29.attributeTypeMap;
    }
}

