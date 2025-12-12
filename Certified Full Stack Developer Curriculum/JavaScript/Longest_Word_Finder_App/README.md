# Longest Word Finder App
## User Stories:
1. You should create a function named findLongestWordLength that takes a string as an argument.
2. The function should return the length of the longest word in the string.

### Note
There was a problem with this project, which is that freeCodeCamp forced me to put the longestWordLength variable in a global scope in order to complete the project and get it approved. However, doing so makes it so, sure, the first call to the function will be a success. But, when we call it a second time, with another sentence, it will compare said sentence will all the previous once. A simple fix would be to simply put the longestWordLength variable inside the function.