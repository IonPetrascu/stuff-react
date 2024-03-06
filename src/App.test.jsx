import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const titleElement = screen.getByText(/App/i);
    expect(titleElement).toBeInTheDocument();
  });
});
