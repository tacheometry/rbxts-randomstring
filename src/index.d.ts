/**
 * @param length How many random entries to use. Defaults to 5.
 * @param entries What strings to pick randomly from. By default, this is equal to `"A", "a", "B", "b", "0", "1", "2", ...`.
 * @param separator How to join the random entries. By default, this is `""`. As an example, you can use `"-""` as a separator to generate strings like `"a-Z-9-b-F"`.
 * @example
 * ```ts
 * randomString(4, ["cat", "dog"], "-")
 * // ---> "cat-dog-cat-cat"
 * ```
 */
declare function randomstring(
	length?: number,
	entries?: string[],
	separator?: string
): string;

export = randomstring;
