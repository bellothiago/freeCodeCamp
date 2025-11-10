# Moon Orbit
## User Stories:
1. You should align all the elements to the center of the page by setting the height to `100%` of the viewport and setting a flexbox layout in the `body` element.
2. You should have a `div` with the class `space`.
3. Inside the `.space` element, there should be two more `div` elements with the class `earth` and `orbit`, respectively, in order.
4. Inside the `.orbit` element, there should be another `div` with the class `moon`.
5. The `div` element with a `class` of `space` should be centered on the page and have a width and height of `200px`.
6. The div element with a `class` of `space` should use `relative` positioning.
7. The `.earth` element should use `absolute` positioning. Position the center of the `.earth` element at the halfway point of its parent on both the vertical (top) and horizontal (left) axes. After that, shift the `.earth` element back by half its own width and height, to center it within its parent, the `.space` element.
8. The `.earth` element should have a width and height of `100px`.
9. The `.orbit` element should have a width and height of `200px`.
10. The `.orbit` element should be positioned using `absolute` positioning. Its bottom right corner should be at the center of the `.space` element using a `transform` property that shifts it by `-50%` on both the vertical and horizontal axes.
11. The orbit path for the moon around the Earth should be a circle.
12. The `.moon` element should be positioned using `absolute` positioning and have a width and height of `30px`. The `.moon` element should position itself at the top of the `.orbit` element and be centered horizontally.
13. You should further adjust the horizontal positioning of the `.moon` element by moving the element to the left by half of its width.
14. The `.earth` selector should have a background color and a `border-radius` of `50%`.
15. The `.moon` selector should have a background color and a `border-radius` of `50%`.
16. You should define a `@keyframes orbit` animation that rotates the `.orbit` element 360 degrees around its center. You should apply this animation to the `.orbit` element with a duration of `5` seconds, a linear timing function, and infinite iterations.