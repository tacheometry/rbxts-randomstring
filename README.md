# @rbxts/randomstring
Generate random strings from a list of strings/characters.

### API
```ts
randomstring(length?: number, entries?: string[], separator?: string) → string
```
`length`: How many random entries to use. Defaults to 5.

`entries`: What strings to pick randomly from. By default, this is equal to characters a-Z 0-9.

`separator`: What string to use to concatenate randomly picked `entries`. By default, this is `""`. Example: `"-"` as a separator outputs strings like `"a-Z-9-b-F"`.

### Examples
#### Matchmaking game IDs
Simply using the module with the predefined parameters
```ts
randomstring()
```
outputs sequences similar to `TqKlf`, `M4Zvn`, `u6X8F`, which could be used as identifiers for ongoing matches in your game.

#### RoVer verification code clone
You could recreate the way [RoVer](https://github.com/evaera/RoVer) hands out codes for verifying users by inputting the following parameters:
```ts
randomstring(20, <english dictionary>, " ")
```
→ `magenta maroon yellow red pink very purple pink blue lavender red maroon maroon yellow gray dark really teal`