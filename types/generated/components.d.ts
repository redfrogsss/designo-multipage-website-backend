import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentHeroBlock extends Schema.Component {
  collectionName: 'components_component_hero_blocks';
  info: {
    displayName: 'Hero Block';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    btn_text: Attribute.String & Attribute.Required;
    btn_href: Attribute.Relation<
      'component.hero-block',
      'oneToOne',
      'api::page.page'
    >;
    img: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.hero-block': ComponentHeroBlock;
    }
  }
}
