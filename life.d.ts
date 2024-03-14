/// <reference types="jquery" />
declare namespace Templates {
    function createElement(tagName: string, props: {
        [key: string]: any;
    }, ...subNodes: any[]): JQuery;
}
declare const FIELD_SIZE = 400;
declare const CELL_SIZE = 20;
declare const CELL_IN_LINE: number;
declare class Life {
    protected field: number[];
    constructor();
    fill(): void;
    prepare(): void;
    start(): void;
}
