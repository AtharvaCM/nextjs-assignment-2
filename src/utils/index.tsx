/**
 * Returns truncated string with max n characters
 * @param {string} str string to truncate
 * @param {number} n number of characters to display
 * @returns {string} str
 */
export function clipString(str: string | null, n: number): string {
  if (str === null) {
    return "";
  }

  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

export function sanitizeString(str: string): string {
  if (str === null) {
    return "";
  }

  // Replaces all spaces with hyphens
  str = str.replaceAll(/ /g, "-");
  // Removes special characters
  str = str.replaceAll(/[^A-Za-z0-9\-\_]/g, "");
  // Replaces multiple hyphens with single one
  str = str.replaceAll(/-+/g, "-");

  return str;
}
