import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../pages/search";
import { SEARCH_MOVIES } from "../queries";
import { MockedProvider } from "@apollo/client/testing";

const searchMoks = {
  request: {
    query: SEARCH_MOVIES,
  },
  result: {},
};

const waitForData = () => new Promise((res) => setTimeout(res, 0));

describe("Search", () => {
  it("render search component", () => {
    act(() => {
      render(
        <MockedProvider mocks={[searchMoks]} addTypename={false}>
          <Search />
        </MockedProvider>
      );

      waitForData();

      const input = screen.getByRole("textbox");

      expect(screen.getByText("Enter movie name")).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).not.toBeRequired();
      expect(input).toBeEmptyDOMElement();
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Enter name movie")
      ).toBeInTheDocument();
    });
  });

  it("input focus", () => {
    act(() => {
      const { getByTestId } = render(
        <MockedProvider mocks={[searchMoks]} addTypename={false}>
          <Search />
        </MockedProvider>
      );

      waitForData();

      const input = getByTestId("input");
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });
  });

  it("test for the onChange event", () => {
    const { getByPlaceholderText } = render(
      <MockedProvider mocks={[searchMoks]} addTypename={false}>
        <Search />
      </MockedProvider>
    );

    const searchInput = getByPlaceholderText("Enter name movie");
    const query = "Harry Potter";
    const mockChange = jest.fn();
    searchInput.onchange = mockChange;

    fireEvent.change(searchInput, { target: { value: query } });
    expect(mockChange).toHaveBeenCalled();
  });

  it("typing in Searchbox works", () => {
    render(
      <MockedProvider mocks={[searchMoks]} addTypename={false}>
        <Search />
      </MockedProvider>
    );

    expect(screen.queryByDisplayValue(/movies/i)).toBeNull();

    userEvent.type(screen.getByRole("textbox"), "movies");

    expect(screen.queryByDisplayValue(/movies/i)).toBeInTheDocument();
  });
});
