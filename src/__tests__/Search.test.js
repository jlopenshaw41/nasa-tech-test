import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("<Search />", () => {
  it("renders as expected", () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
  });
});
