/**
 * Generated: 2026-02-02T18:49:43.893Z
 * DO NOT EDIT MANUALLY
 */

import { Schema } from 'effect';

export enum RoleEnum {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  USER = 'USER',
}

export const Role = Schema.Enums(RoleEnum);
export type Role = Schema.Schema.Type<typeof Role>;

export enum StatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export const Status = Schema.Enums(StatusEnum);
export type Status = Schema.Schema.Type<typeof Status>;
