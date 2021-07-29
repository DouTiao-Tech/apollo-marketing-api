/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TownBean
 */
export interface TownBean {
    /**
     * 
     * @type {string}
     * @memberof TownBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TownBean
     */
    id?: string;
}

export function TownBeanFromJSON(json: any): TownBean {
    return TownBeanFromJSONTyped(json, false);
}

export function TownBeanFromJSONTyped(json: any, ignoreDiscriminator: boolean): TownBean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function TownBeanToJSON(value?: TownBean | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
    };
}


