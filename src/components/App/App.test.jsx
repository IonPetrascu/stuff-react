import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const titleElement = screen.getByText(/Header/i);
    expect(titleElement).toBeInTheDocument();
  });
});
