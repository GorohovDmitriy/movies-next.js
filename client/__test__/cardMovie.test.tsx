import { render, screen } from "@testing-library/react";
import CardMovie from "../components/CardMovie";
import { IMovie } from "../types/movies";

const movieData: IMovie = {
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
};

describe("CardMovie component", () => {
  it("alternative text display", () => {
    const { getByAltText } = render(
      <CardMovie movie={movieData} path="/home" />
    );

    expect(getByAltText("Poster")).toBeInTheDocument();
  });

  it("render an image", () => {
    const image = render(<CardMovie movie={movieData} path="/home" />);

    expect(image.getByRole("img")).toBeInTheDocument();
  });

  it("renders release date", () => {
    render(<CardMovie movie={movieData} path="/home" />);

    expect(screen.getByText(/release date:/i)).toBeInTheDocument();
  });

  it("renders Overview", () => {
    render(<CardMovie movie={movieData} path="/home" />);

    expect(screen.getByText(/overview:/i)).toBeInTheDocument();
  });

  it("details button render", () => {
    render(<CardMovie movie={movieData} path="/home" />);

    const linkEl = screen.getByRole("link", { name: "Open movie" });

    expect(linkEl).toHaveAttribute("href", "/home/730154");
  });
});
