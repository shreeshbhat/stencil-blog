/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BlogPage {
    }
    interface BlogPost {
        "slug": string;
    }
    interface LandingPage {
    }
    interface SiteHeader {
    }
    interface SiteRoot {
    }
    interface SiteRoutes {
    }
}
declare global {
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteRootElement extends Components.SiteRoot, HTMLStencilElement {
    }
    var HTMLSiteRootElement: {
        prototype: HTMLSiteRootElement;
        new (): HTMLSiteRootElement;
    };
    interface HTMLSiteRoutesElement extends Components.SiteRoutes, HTMLStencilElement {
    }
    var HTMLSiteRoutesElement: {
        prototype: HTMLSiteRoutesElement;
        new (): HTMLSiteRoutesElement;
    };
    interface HTMLElementTagNameMap {
        "blog-page": HTMLBlogPageElement;
        "blog-post": HTMLBlogPostElement;
        "landing-page": HTMLLandingPageElement;
        "site-header": HTMLSiteHeaderElement;
        "site-root": HTMLSiteRootElement;
        "site-routes": HTMLSiteRoutesElement;
    }
}
declare namespace LocalJSX {
    interface BlogPage {
    }
    interface BlogPost {
        "slug"?: string;
    }
    interface LandingPage {
    }
    interface SiteHeader {
    }
    interface SiteRoot {
    }
    interface SiteRoutes {
    }
    interface IntrinsicElements {
        "blog-page": BlogPage;
        "blog-post": BlogPost;
        "landing-page": LandingPage;
        "site-header": SiteHeader;
        "site-root": SiteRoot;
        "site-routes": SiteRoutes;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-root": LocalJSX.SiteRoot & JSXBase.HTMLAttributes<HTMLSiteRootElement>;
            "site-routes": LocalJSX.SiteRoutes & JSXBase.HTMLAttributes<HTMLSiteRoutesElement>;
        }
    }
}
