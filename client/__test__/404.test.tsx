import { render, screen } from "@testing-library/react";
import Error from "../pages/404";

describe("Error component", () => {
  it("render heading", () => {
    render(<Error />);

    const heading = screen.getByRole("heading", {
      name: /someting error 404/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render 404 component", () => {
    const component = render(<Error />);

    expect(component).toMatchSnapshot();
  });
});
