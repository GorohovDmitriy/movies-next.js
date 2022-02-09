import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../utils";
import { WebsiteUrls } from "../types/enums";

describe("Header component", () => {
  it("heading render", () => {
    const router = createMockRouter({ pathname: WebsiteUrls.HOME });
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );

    let heading = screen.getByRole("heading", { name: /movie App/i });

    expect(heading).toBeInTheDocument();
  });

  it("links to pages", () => {
    const router = createMockRouter({ pathname: WebsiteUrls.HOME });
    const { container } = render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );

    const search = container.querySelector('[role="search"]');

    expect(search).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it("page navigation links", () => {
    const router = createMockRouter({ pathname: WebsiteUrls.HOME });
    const { container } = render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );

    const search = container.querySelector('[role="search-item"]');

    expect(search).toBeInTheDocument();
    expect(screen.getByText(/top/i)).toBeInTheDocument();
  });
});
