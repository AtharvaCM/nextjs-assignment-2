/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import SearchInput from ".";

const PLACEHOLDER = "Sample placeholder";

describe("Search Input", () => {
  // Test 1
  it("Renders a search input component with given placeholder text", () => {
    render(
      <SearchInput
        placeholder={PLACEHOLDER}
        onChange={() => {}}
        onSearchClick={() => {}}
      />
    );

    const searchInput = screen.getByRole("search");

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.getAttribute("placeholder")).toBe(PLACEHOLDER);
  });
});
