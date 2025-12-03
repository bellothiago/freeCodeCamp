# Golf Score Translator
## User Stories:
1. You should create a function named `golfScore`.
2. `golfScore` should take two numeric arguments, which are the par for the course and the amount of strokes made.
3. `golfScore` should return a string.
4. `golfScore` should return `"Hole-in-one!"` if `strokes` is `1`.
5. `golfScore` should return `"Eagle"` if `strokes` is less than or equal to `par` minus `2`.
6. `golfScore` should return `"Birdie"` if `strokes` is equal to `par` minus `1`.
7. `golfScore` should return `"Par"` if `strokes` is equal to `par`.
8. `golfScore` should return `"Bogey"` if `strokes` is equal to `par` plus `1`.
9. `golfScore` should return `"Double Bogey"` if `strokes` is equal to `par` plus `2`.
10. `golfScore` should return `"Go Home!"` if `strokes` is greater than or equal to `par` plus `3`.