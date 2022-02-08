import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../pages/search";
import { SEARCH_MOVIES } from "../queries";
import { MockedProvider } from "@apollo/client/testing";

const searchMoks = {
  request: {
    query: SEARCH_MOVIES,
  },
  result: {},
};

describe("Search", () => {
  it("render search component", () => {
    render(
      <MockedProvider mocks={[searchMoks]} addTypename={false}>
        <Search />
      </MockedProvider>
    );
    expect(screen.getByText("Enter movie name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name movie")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).not.toBeRequired();
    expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "" },
    });
  });
});
