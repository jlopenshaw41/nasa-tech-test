import { getByTestId, render } from '@testing-library/react';
import App from '../components/App';

describe("<App />", () => {
  it("renders as expected", () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId("app");
    expect(app).toBeTruthy();

  })
})
