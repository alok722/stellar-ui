/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BadgeType } from "./components/badge/badge";
export { BadgeType } from "./components/badge/badge";
export namespace Components {
    interface StellarBadge {
        /**
          * It defines text of the badge
         */
        "text": string;
        /**
          * It defines type of the badge
         */
        "variant": BadgeType;
    }
    interface StellarIcon {
        /**
          * It defines name of the icon
         */
        "name": string;
        /**
          * It defines size of the icon
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
    }
}
declare global {
    interface HTMLStellarBadgeElement extends Components.StellarBadge, HTMLStencilElement {
    }
    var HTMLStellarBadgeElement: {
        prototype: HTMLStellarBadgeElement;
        new (): HTMLStellarBadgeElement;
    };
    interface HTMLStellarIconElement extends Components.StellarIcon, HTMLStencilElement {
    }
    var HTMLStellarIconElement: {
        prototype: HTMLStellarIconElement;
        new (): HTMLStellarIconElement;
    };
    interface HTMLElementTagNameMap {
        "stellar-badge": HTMLStellarBadgeElement;
        "stellar-icon": HTMLStellarIconElement;
    }
}
declare namespace LocalJSX {
    interface StellarBadge {
        /**
          * It defines text of the badge
         */
        "text": string;
        /**
          * It defines type of the badge
         */
        "variant"?: BadgeType;
    }
    interface StellarIcon {
        /**
          * It defines name of the icon
         */
        "name"?: string;
        /**
          * It defines size of the icon
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
    }
    interface IntrinsicElements {
        "stellar-badge": StellarBadge;
        "stellar-icon": StellarIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stellar-badge": LocalJSX.StellarBadge & JSXBase.HTMLAttributes<HTMLStellarBadgeElement>;
            "stellar-icon": LocalJSX.StellarIcon & JSXBase.HTMLAttributes<HTMLStellarIconElement>;
        }
    }
}
