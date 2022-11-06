/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import CardHeading from ".";

const TITLE = "Card Title";

describe("Card content", () => {
  it("Renders a Card Heading component with given title", () => {
    render(<CardHeading title={TITLE} />);

    const cardHeading = screen.getByRole("heading", { name: /Card Title/i });

    expect(cardHeading).toBeInTheDocument();
  });
});
