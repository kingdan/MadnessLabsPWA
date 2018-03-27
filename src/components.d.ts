/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';
import '@stencil/router';

import {
  AuthService,
} from './services/Auth';
import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLAppAppsElement extends HTMLStencilElement {

  }
  var HTMLAppAppsElement: {
    prototype: HTMLAppAppsElement;
    new (): HTMLAppAppsElement;
  };
  interface HTMLElementTagNameMap {
    'app-apps': HTMLAppAppsElement;
  }
  interface ElementTagNameMap {
    'app-apps': HTMLAppAppsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-apps': JSXElements.AppAppsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAppsAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppCardElement extends HTMLStencilElement {
    'app': {
    icon: string,
    title: string,
    description: string
  };
  }
  var HTMLAppCardElement: {
    prototype: HTMLAppCardElement;
    new (): HTMLAppCardElement;
  };
  interface HTMLElementTagNameMap {
    'app-card': HTMLAppCardElement;
  }
  interface ElementTagNameMap {
    'app-card': HTMLAppCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-card': JSXElements.AppCardAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCardAttributes extends HTMLAttributes {
      'app'?: {
    icon: string,
    title: string,
    description: string
  };
      'onMlIconClick'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLAppHomeElement extends HTMLStencilElement {
    'auth': AuthService;
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      'auth'?: AuthService;
    }
  }
}


declare global {
  interface HTMLAppProfileElement extends HTMLStencilElement {
    'match': MatchResults;
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {
  interface HTMLLazyImgElement extends HTMLStencilElement {
    'alt': string;
    'src': string;
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lazy-img': JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'src'?: string;
    }
  }
}


declare global {
  interface HTMLMadnessCastRaterElement extends HTMLStencilElement {

  }
  var HTMLMadnessCastRaterElement: {
    prototype: HTMLMadnessCastRaterElement;
    new (): HTMLMadnessCastRaterElement;
  };
  interface HTMLElementTagNameMap {
    'madness-cast-rater': HTMLMadnessCastRaterElement;
  }
  interface ElementTagNameMap {
    'madness-cast-rater': HTMLMadnessCastRaterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'madness-cast-rater': JSXElements.MadnessCastRaterAttributes;
    }
  }
  namespace JSXElements {
    export interface MadnessCastRaterAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLMadnessFooterElement extends HTMLStencilElement {
    'networks': {
    link: string,
    icon: string
  }[];
  }
  var HTMLMadnessFooterElement: {
    prototype: HTMLMadnessFooterElement;
    new (): HTMLMadnessFooterElement;
  };
  interface HTMLElementTagNameMap {
    'madness-footer': HTMLMadnessFooterElement;
  }
  interface ElementTagNameMap {
    'madness-footer': HTMLMadnessFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'madness-footer': JSXElements.MadnessFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface MadnessFooterAttributes extends HTMLAttributes {
      'networks'?: {
    link: string,
    icon: string
  }[];
    }
  }
}


declare global {
  interface HTMLMadnessHeaderElement extends HTMLStencilElement {

  }
  var HTMLMadnessHeaderElement: {
    prototype: HTMLMadnessHeaderElement;
    new (): HTMLMadnessHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'madness-header': HTMLMadnessHeaderElement;
  }
  interface ElementTagNameMap {
    'madness-header': HTMLMadnessHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'madness-header': JSXElements.MadnessHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface MadnessHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLMyAppElement extends HTMLStencilElement {

  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
