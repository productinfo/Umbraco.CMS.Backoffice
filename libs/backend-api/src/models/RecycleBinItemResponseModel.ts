/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecycleBinItemResponseModel = {
    $type: string;
    key?: string;
    name?: string;
    type?: string;
    icon?: string;
    hasChildren?: boolean;
    isContainer?: boolean;
    parentKey?: string | null;
};
