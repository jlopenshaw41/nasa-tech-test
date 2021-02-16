import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("<Search />", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders search input as expected", () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
  });

  it("renders search button as expected", () => {
    const { getByTestId } = render(<Search />);
    const button = getByTestId("search-btn");
    expect(button).toBeTruthy();
  })
});
