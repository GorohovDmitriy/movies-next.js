import { render, screen } from "@testing-library/react";
import Content from "../components/Content";
import { WebsiteUrls } from "../types/enums";
import { IMovie } from "../types/movies";

const moviesData: IMovie[] = [
  {
    poster_path: "/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg",
    overview:
      "A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.",
    release_date: "2020-10-23",
    id: 730154,
    original_title: "きみの瞳が問いかけている",
    original_language: "ja",
    title: "Your Eyes Tell",
    backdrop_path: "/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg",
    popularity: 16.471,
    vote_count: 232,
    vote_average: 8.8,
  },
  {
    poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    overview:
      "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    release_date: "1995-10-20",
    id: 19404,
    original_title: "दिलवाले दुल्हनिया ले जायेंगे",
    original_language: "hi",
    title: "Dilwale Dulhania Le Jayenge",
    backdrop_path: "/5hNcsnMkwU2LknLoru73c76el3z.jpg",
    popularity: 22.642,
    vote_count: 3403,
    vote_average: 8.7,
  },
];

describe("Content component", () => {
  it("movies render", () => {
    const scrollHandler = jest.fn();
    render(
      <Content
        title="Movies"
        movies={moviesData}
        path={WebsiteUrls.HOME}
        scrollHandler={scrollHandler}
      />
    );

    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  it("movies render with data", () => {
    const scrollHandler = jest.fn();
    render(
      <Content
        title="Movies"
        movies={moviesData}
        path={WebsiteUrls.HOME}
        scrollHandler={scrollHandler}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/your eyes tell/i)).toBeInTheDocument();
  });

  it("movies render without data", () => {
    const scrollHandler = jest.fn();
    render(
      <Content
        title="Movies"
        movies={[]}
        path={WebsiteUrls.HOME}
        scrollHandler={scrollHandler}
      />
    );

    expect(screen.queryByText("Your Eyes Tell")).toBeNull();
  });
});
