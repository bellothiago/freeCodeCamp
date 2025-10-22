# Book Inventory App
## User Stories:
1. You should have an `h1` element with the text `Book Inventory`.
2. You should have a `table` element with columns named `Title`, `Author`, `Category`, `Status`, and `Rate`.
3. Your table should have at least four rows, the first for the column headings and the rest filled with book information.
4. Each table row inside the table body should have either the class `read`, `to-read`, or `in-progress`.
5. `td` elements of the `Status` column should contain a `span` element with the `class` of `status` surrounding the text `Read`, `To Read`, or `In Progress`, depending on the class of that row.
6. `td` elements of the `Rate` column should contain a `span` element with the `class` of `rate` wrapping three empty `span` elements.
7. `.rate` elements placed inside `.read` rows should have an additional class with the value of either `one`, `two`, or `three`, depending on the personal rate. This value should come after `rate`.
8. You should create three attribute selectors to target the elements with the class of `read`, `to-read`, and `in-progress`, and set their `background-image` property to use a `linear-gradient` of your choice.
9. You should set the `display` property of each `span` element to `inline-block`.
10. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `to-read` and set their `border` and `background-image` properties.
11. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `read` and set their `border` and `background-image` properties.
12. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `in-progress` and set their `border` and `background-image` properties.
13. You should use an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate` and set their `height`, `width`, and `padding` properties.
14. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `border`, `border-radius`, `margin`, `height`, `width`, and `background-color` properties.
15. You should use an attribute selector to target the first descendant of `span` elements that have the word `one` as a part of their `class` value and set its `background-image` property to use a `linear-gradient`.
16. You should use an attribute selector to target the first two descendants of `span` elements that have the word `two` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.
17. You should use an attribute selector to target the three `span` elements that are descendants of `span` elements that have the word `three` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.