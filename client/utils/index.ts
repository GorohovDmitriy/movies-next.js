import { NextRouter } from "next/router";
import { WebsiteUrls } from "../types/enums";
import { INavigate } from "../types/navigate";

export const imageUrl: string = "http://image.tmdb.org/t/p/original/";

export const navigate: INavigate[] = [
  { id: 0, title: "Welcome", path: WebsiteUrls.WELCOME },
  { id: 1, title: "Home", path: WebsiteUrls.HOME },
  { id: 2, title: "Popular", path: WebsiteUrls.POPULAR },
  { id: 3, title: "Top", path: WebsiteUrls.TOP },
];

export const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
};
