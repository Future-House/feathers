import type { ArgTypes } from '@storybook/react';

export interface ParsedProp {
  name: string;
  type: any;
  defaultValue?: string;
  description?: string;
  required?: boolean;
}

export interface SubcomponentDef {
  name: string;
  description?: string;
  props: ParsedProp[];
}

export function parseArgTypes(argTypes: ArgTypes): ParsedProp[] {
  return Object.entries(argTypes).map(([name, argType]) => {
    const type = argType.table?.type?.summary || argType.type || 'unknown';
    const defaultValue =
      argType.table?.defaultValue?.summary || argType.defaultValue;
    const description = argType.description;
    const required =
      (typeof argType.type === 'object' && argType.type?.required) || false;

    return {
      name,
      type,
      defaultValue,
      description,
      required,
    };
  });
}

export function parseSubcomponents(
  subcomponents?: Record<string, any>
): SubcomponentDef[] {
  if (!subcomponents) return [];

  return Object.entries(subcomponents).map(([name, def]) => {
    const props = def.argTypes
      ? parseArgTypes(def.argTypes, true)
      : Object.entries(def.props || {}).map(
          ([propName, propDef]: [string, any]) => ({
            name: propName,
            type: propDef.type || 'unknown',
            defaultValue: propDef.defaultValue,
            description: propDef.description,
            required: propDef.required || false,
          })
        );

    return {
      name,
      description: def.description,
      props,
    };
  });
}

export function getComponentDescription(meta: any): string {
  return (
    meta.parameters?.docs?.description?.component ||
    meta.parameters?.docs?.description ||
    ''
  );
}

export function getComponentTitle(meta: any): string {
  const title = meta.title || '';
  const parts = title.split('/');
  return parts[parts.length - 1] || '';
}
