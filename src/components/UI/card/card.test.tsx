/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import Card from ".";
import CardMedia from "../card-media";

const SRC = "https://flowbite.com/docs/images/blog/image-1.jpg";
const ALT = "Table with a computer";

describe("Card", () => {
  // Test 1
  it("Renders default card with children", () => {
    render(<Card>Sample card</Card>);

    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card.textContent).toBe("Sample card");
  });
  // Test 2
  it("Renders a card with media", () => {
    render(
      <Card
        media={
          <CardMedia
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="Table with a computer"
          />
        }
      >
        Sample card
      </Card>
    );

    const card = screen.getByTestId("card");
    const cardImg = screen.getByRole("img");

    expect(card).toBeInTheDocument();
    expect(card.textContent).toBe("Sample card");

    expect(cardImg).toBeInTheDocument();
    expect(cardImg.getAttribute("src")).toBe(SRC);
    expect(cardImg.getAttribute("alt")).toBe(ALT);
  });
});
