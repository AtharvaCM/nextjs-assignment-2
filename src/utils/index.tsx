/**
 * Returns truncated string with max n characters
 * @param {string} str string to truncate
 * @param {number} n number of characters to display
 * @returns {string} str
 */
export function clipString(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
