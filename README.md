## Secret String

There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a
triplet for the string "whatisup".
As simplifications, you may assume that no letter occurs more than once in the secret string and that the all characters are lower-case.
You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to
deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given
to you.

```js
secret_1 = "whatisup";
triplets_1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
];
```

## Running the tests

### Install test package

```
npm i
```

### Running the tests

```
npm run test
```

## Implementation

For each unique character, create a set of before characters and after characters according to the triplet input. 

To find the starting character, we look for the character that has an empty before set.  Push the starting character to the solution array

Using the starting character as the current character, we look at the after set.  For each character in the after set, we look at thier respective before set and compare with the solution array.  The character we are looking for will not have any characters in its before set that are not also in the solution array.

Once found, we set this character to the current character, push to solution array and search for the next.

We are finished when the soluation array size matches the number of unique characters found in the input