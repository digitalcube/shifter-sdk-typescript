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

export class InlineObject25 {
    'eventType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject25.attributeTypeMap;
    }
}

