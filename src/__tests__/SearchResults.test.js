import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("<SearchResults />", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SearchResults />);
    expect(asFragment).toMatchSnapshot();
  });
});
