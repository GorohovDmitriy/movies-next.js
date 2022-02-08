import { render, screen } from "@testing-library/react";
import Content from "../components/Content";

describe("Content component", () => {
  it("renders title", () => {
    const scrollHandler = jest.fn();
    render(
      <Content title="Movies" path="" scrollHandler={scrollHandler} />
    );

    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  it("render ", () => {

  })
});
