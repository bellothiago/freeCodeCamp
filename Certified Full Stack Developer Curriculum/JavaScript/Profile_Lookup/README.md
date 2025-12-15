# Profile Lookup
## User Stories:
1. You should create a function named `lookUpProfile` that takes a name and a property as arguments.
2. You should retrieve contact information from the provided `contacts` array.
3. If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
4. If the name passed to the function does not match any contacts in the contacts array, then the function should return `"No such contact"`.
5. If the property does not exist on a found contact, then the function should return `"No such property"`.