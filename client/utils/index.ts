import { WebsiteUrls } from "../types/enums";
import { INavigate } from "../types/navigate";

export const imageUrl: string = "http://image.tmdb.org/t/p/original/";

export const navigate: INavigate[] = [
    { id: 0, title: "Welcome", path: WebsiteUrls.WELCOME },
    { id: 1, title: "Home", path: WebsiteUrls.HOME },
    { id: 2, title: "Popular", path: WebsiteUrls.POPULAR },
    { id: 3, title: "Top", path: WebsiteUrls.TOP },
  ];
