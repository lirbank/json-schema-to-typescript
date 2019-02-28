import { JSONSchema, SCHEMA_TYPE } from './types/JSONSchema';
export interface BSONSchema {
    tsType: JSONSchema['tsType'];
    type: 'date' | 'int' | 'bool' | 'decimal' | 'long';
    allOf: JSONSchema['allOf'];
    anyOf: JSONSchema['anyOf'];
    oneOf: JSONSchema['oneOf'];
    items: JSONSchema['items'];
    enum: JSONSchema['enum'];
    tsEnumNames: JSONSchema['tsEnumNames'];
    $ref: JSONSchema['$ref'];
    properties: JSONSchema['properties'];
    default: JSONSchema['default'];
    id: JSONSchema['id'];
}
/**
 * Duck types a JSONSchema schema or property to determine which kind of AST node to parse it into.
 */
export declare function typeOfSchema(schema: JSONSchema | BSONSchema): SCHEMA_TYPE;
