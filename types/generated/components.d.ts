import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentPartsGridItem extends Schema.Component {
  collectionName: 'components_component_parts_grid_items';
  info: {
    displayName: 'Grid Item';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    page: Attribute.Relation<
      'component-parts.grid-item',
      'oneToOne',
      'api::page.page'
    >;
    mobile_img: Attribute.Media;
  };
}

export interface ComponentPartsTermsGridItem extends Schema.Component {
  collectionName: 'components_component_parts_terms_grid_items';
  info: {
    displayName: 'Terms Grid Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentAboutBlock extends Schema.Component {
  collectionName: 'components_component_about_blocks';
  info: {
    displayName: 'About Block';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    desktopImg: Attribute.Media & Attribute.Required;
    tabletImg: Attribute.Media;
    mobileImg: Attribute.Media;
  };
}

export interface ComponentGalleryGrid extends Schema.Component {
  collectionName: 'components_component_gallery_grids';
  info: {
    displayName: 'Gallery Grid';
    icon: 'write';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['three', 'two']> &
      Attribute.Required &
      Attribute.DefaultTo<'three'>;
    Items: Attribute.Component<'component-parts.grid-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

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

export interface ComponentSectionHeader extends Schema.Component {
  collectionName: 'components_component_section_headers';
  info: {
    displayName: 'Section Header';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
  };
}

export interface ComponentTermsGrid extends Schema.Component {
  collectionName: 'components_component_terms_grids';
  info: {
    displayName: 'Terms Grid';
    icon: 'write';
  };
  attributes: {
    Items: Attribute.Component<'component-parts.terms-grid-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component-parts.grid-item': ComponentPartsGridItem;
      'component-parts.terms-grid-item': ComponentPartsTermsGridItem;
      'component.about-block': ComponentAboutBlock;
      'component.gallery-grid': ComponentGalleryGrid;
      'component.hero-block': ComponentHeroBlock;
      'component.section-header': ComponentSectionHeader;
      'component.terms-grid': ComponentTermsGrid;
    }
  }
}
