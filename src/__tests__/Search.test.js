import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("<Search />", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders as expected", () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
  });
});
