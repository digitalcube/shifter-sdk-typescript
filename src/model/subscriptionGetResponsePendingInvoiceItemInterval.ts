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

export class SubscriptionGetResponsePendingInvoiceItemInterval {
    'interval'?: string;
    'intervalCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGetResponsePendingInvoiceItemInterval.attributeTypeMap;
    }
}

