/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Avatar from ".";

const SRC = "https://flowbite.com/docs/images/blog/image-1.jpg";
const ALT = "A computer on a desk";

describe("Avatar", () => {
  it("renders a avatar with given src and alt", () => {
    render(<Avatar src={SRC} alt={ALT} />);

    const avatar = screen.getByRole("img");

    expect(avatar).toBeInTheDocument();
    expect(avatar.getAttribute("src")).toBe(SRC);
    expect(avatar.getAttribute("alt")).toBe(ALT);
  });
});
