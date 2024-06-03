import type { Schema, Attribute } from '@strapi/strapi';

export interface CollectionsAppDesign extends Schema.Component {
  collectionName: 'components_collections_app_designs';
  info: {
    displayName: 'App Design';
    icon: 'bulletList';
  };
  attributes: {
    enable: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CollectionsContactForm extends Schema.Component {
  collectionName: 'components_collections_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'discuss';
  };
  attributes: {
    enable: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CollectionsGraphicDesign extends Schema.Component {
  collectionName: 'components_collections_graphic_designs';
  info: {
    displayName: 'Graphic Design';
    icon: 'bulletList';
  };
  attributes: {
    enable: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CollectionsWebDesign extends Schema.Component {
  collectionName: 'components_collections_web_designs';
  info: {
    displayName: 'Web Design';
    icon: 'bulletList';
  };
  attributes: {
    enable: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

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

export interface ComponentPartsLocationGridItem extends Schema.Component {
  collectionName: 'components_component_parts_location_grid_items';
  info: {
    displayName: 'Location Grid Item';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    btnText: Attribute.String;
    page: Attribute.Relation<
      'component-parts.location-grid-item',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface ComponentPartsMenuItem extends Schema.Component {
  collectionName: 'components_component_parts_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    page: Attribute.Relation<
      'component-parts.menu-item',
      'oneToOne',
      'api::page.page'
    >;
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

export interface ComponentImageCard extends Schema.Component {
  collectionName: 'components_component_image_cards';
  info: {
    displayName: 'Image Card';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Blocks;
    img: Attribute.Media;
    mobileImg: Attribute.Media;
    tabletImg: Attribute.Media;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentLocationGrid extends Schema.Component {
  collectionName: 'components_component_location_grids';
  info: {
    displayName: 'Location Grid';
    icon: 'write';
    description: '';
  };
  attributes: {
    Items: Attribute.Component<'component-parts.location-grid-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface ComponentOfficeCardRow extends Schema.Component {
  collectionName: 'components_component_office_card_rows';
  info: {
    displayName: 'Office Card Row';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    leftContent: Attribute.Blocks;
    rightContent: Attribute.Blocks;
    location: Attribute.Media;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
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
      'collections.app-design': CollectionsAppDesign;
      'collections.contact-form': CollectionsContactForm;
      'collections.graphic-design': CollectionsGraphicDesign;
      'collections.web-design': CollectionsWebDesign;
      'component-parts.grid-item': ComponentPartsGridItem;
      'component-parts.location-grid-item': ComponentPartsLocationGridItem;
      'component-parts.menu-item': ComponentPartsMenuItem;
      'component-parts.terms-grid-item': ComponentPartsTermsGridItem;
      'component.about-block': ComponentAboutBlock;
      'component.gallery-grid': ComponentGalleryGrid;
      'component.hero-block': ComponentHeroBlock;
      'component.image-card': ComponentImageCard;
      'component.location-grid': ComponentLocationGrid;
      'component.office-card-row': ComponentOfficeCardRow;
      'component.section-header': ComponentSectionHeader;
      'component.terms-grid': ComponentTermsGrid;
    }
  }
}
