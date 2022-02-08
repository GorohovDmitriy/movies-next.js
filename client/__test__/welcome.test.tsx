import Welcome from "../pages/index";
import { render, screen, fireEvent } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../utils";

describe("Welcome", () => {
  it("push button test", () => {
    const router = createMockRouter({ pathname: "/home" });
    render(
      <RouterContext.Provider value={router}>
        <Welcome />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: "WELCOME" }));
    expect(router.push).toHaveBeenCalledWith("/home");
  });
});
