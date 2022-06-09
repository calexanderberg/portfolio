import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my email in footer", () => {
  render(<App />);
  const linkElement = screen.getByText(/Alexander@re-do.nu/i);
  expect(linkElement).toBeInTheDocument();
});
