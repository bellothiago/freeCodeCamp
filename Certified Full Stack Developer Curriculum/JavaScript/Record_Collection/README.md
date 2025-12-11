# Record Collection
## User Stories:
1. Your function must always return the entire `records` object.
2. If `value` is an empty string, delete the given `prop` property from the album.
3. If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
4. If `prop` is `tracks` and `value` isn't an empty string, but the album doesn't have a `tracks` property, create an empty array and add `value` to it.
5. If prop is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.