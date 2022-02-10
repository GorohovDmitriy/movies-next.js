import { render, screen } from "@testing-library/react";
import Details from "../components/Details";
import { IDetails } from "../types/movies";

const detailData: IDetails = {
  backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
  budget: 6000000,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "http://www.thegodfather.com/",
  id: 238,
  original_language: "en",
  original_title: "The Godfather",
  overview:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  poster_path: "/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
  production_companies: [
    {
      name: "Paramount",
      id: 4,
      logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png",
      origin_country: "US",
    },
    {
      name: "Alfran Productions",
      id: 10211,
      logo_path: null,
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      name: "United States of America",
      iso_3166_1: "US",
    },
  ],
  release_date: "1972-03-14",
  revenue: 245066411,
  runtime: 175,
  status: "Released",
  tagline: "An offer you can't refuse.",
  title: "The Godfather",
  vote_count: 15455,
  vote_average: 8.7,
  popularity: 83.034,
};

describe("Details component", () => {
  it("render an image", () => {
    render(<Details movie={detailData} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("alternative text display", () => {
    render(<Details movie={detailData} />);

    expect(screen.getByAltText("The Godfather")).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<Details movie={detailData} />);

    const heading = screen.getByRole("heading", {
      name: /the godfather/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("render title", () => {
    render(<Details movie={detailData} />);

    const title = screen.getByText(/original title:/i);

    expect(title).toBeInTheDocument();
  });

  it("render vote average", () => {
    render(<Details movie={detailData} />);

    const vote = screen.getByText(/vote average:/i);

    expect(vote).toBeInTheDocument();
  });

  it("render language", () => {
    render(<Details movie={detailData} />);

    const language = screen.getByText(/language:/i);

    expect(language).toBeInTheDocument();
  });

  it("render Date release", () => {
    render(<Details movie={detailData} />);

    const release = screen.getByText(/date release:/i);

    expect(release).toBeInTheDocument();
  });

  it("render runtime", () => {
    render(<Details movie={detailData} />);

    const runtime = screen.getByText(/runtime:/i);

    expect(runtime).toBeInTheDocument();
  });

  it("render budget", () => {
    render(<Details movie={detailData} />);

    const budget = screen.getByText(/budget:/i);

    expect(budget).toBeInTheDocument();
  });

  it("render Status", () => {
    render(<Details movie={detailData} />);

    const status = screen.getByText(/status:/i);

    expect(status).toBeInTheDocument();
  });

  it("genres render with data ", () => {
    const { container } = render(<Details movie={detailData} />);

    let genres = container.querySelector('[role="genre"]');

    expect(genres).toBeInTheDocument();
    expect(screen.getByText(/drama/i)).toBeInTheDocument();
  });

  it("genres render without data", () => {
    render(<Details movie={detailData} />);

    expect(screen.queryByText(/action/i)).toBeNull();
  });

  it("render tagline", () => {
    render(<Details movie={detailData} />);

    const tagline = screen.getByText(/tagline:/i);

    expect(tagline).toBeInTheDocument();
  });

  it("render count", () => {
    render(<Details movie={detailData} />);

    const count = screen.getByText(/vote count:/i);

    expect(count).toBeInTheDocument();
  });

  it("link homepage", () => {
    render(<Details movie={detailData} />);

    const linkEl = screen.getByRole("link", {
      name: "http://www.thegodfather.com/",
    });

    expect(linkEl).toHaveAttribute("href", "http://www.thegodfather.com/");
  });

  it("company render with data ", () => {
    const { container } = render(<Details movie={detailData} />);

    let company = container.querySelector('[role="company"]');

    expect(company).toBeInTheDocument();
    expect(screen.getByText(/paramount/i)).toBeInTheDocument();
  });

  it("company render without data", () => {
    render(<Details movie={detailData} />);

    expect(screen.queryByText(/The Coppola Company/)).toBeNull();
  });

  it("country render with data ", () => {
    const { container } = render(<Details movie={detailData} />);

    let country = container.querySelector('[role="country"]');

    expect(country).toBeInTheDocument();
    expect(screen.getByText(/united states of america/i)).toBeInTheDocument();
  });

  it("country render without data", () => {
    render(<Details movie={detailData} />);

    expect(screen.queryByText(/italy/i)).toBeNull();
  });

  it("render overview", () => {
    render(<Details movie={detailData} />);

    const overview = screen.getByText(/overview/i);

    expect(overview).toBeInTheDocument();
  });
});
