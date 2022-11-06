/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import CardMedia from "../card-media";

const SRC = "https://flowbite.com/docs/images/blog/image-1.jpg";
const ALT = "Table with a computer";

describe("Card Media", () => {
  // Test 1
  it("Renders a card media with given src and alt", () => {
    render(
      <CardMedia
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt="Table with a computer"
      />
    );

    const cardMedia = screen.getByRole("img");

    expect(cardMedia).toBeInTheDocument();
    expect(cardMedia.getAttribute("src")).toBe(SRC);
    expect(cardMedia.getAttribute("alt")).toBe(ALT);
  });
});
