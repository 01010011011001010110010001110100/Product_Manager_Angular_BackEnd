import type { Schema, Struct } from '@strapi/strapi';

export interface AuditTimeStamps extends Struct.ComponentSchema {
  collectionName: 'components_audit_time_stamps';
  info: {
    displayName: 'time-stamps';
    icon: 'eye';
  };
  attributes: {
    createdOn: Schema.Attribute.DateTime;
    deletedOn: Schema.Attribute.DateTime;
    updatedOn: Schema.Attribute.DateTime;
  };
}

export interface EntityStatus extends Struct.ComponentSchema {
  collectionName: 'components_entity_statuses';
  info: {
    description: '';
    displayName: 'StatusFlags';
    icon: 'puzzle';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean;
    isDeleted: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'audit.time-stamps': AuditTimeStamps;
      'entity.status': EntityStatus;
    }
  }
}
