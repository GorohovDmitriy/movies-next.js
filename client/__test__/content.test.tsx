import { render, screen } from "@testing-library/react";
import Content from "../components/Content";

describe("Content component", () => {
  it("movies render", () => {
    const scrollHandler = jest.fn();
    render(
      <Content
        title="Movies"
        movies={[]}
        path="/home"
        scrollHandler={scrollHandler}
      />
    );

    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  it("movies render without data", () => {
    const scrollHandler = jest.fn();
    render(
      <Content title="Movies" path="/home" scrollHandler={scrollHandler} />
    );

    expect(screen.queryByRole("list")).toBeNull();
  });
});
