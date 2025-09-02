# Event Hub
## User Stories:
1. You should have a `header` element.
2. Inside the `header` element, you should have an `h1` element that contains the text `Event Hub`, and a `nav` element.
3. Inside the `nav` element, you should have an unordered list of two items containing links to different sections of the page. The first item should have the text `Upcoming Events`, and the second item should have the text `Past Events`.
4. Each link should be represented by an `a` element with an `href` attribute that links to the corresponding section of the page, `#upcoming-events` and `#past-events` respectively.
5. You should have a `main` element that contains the different sections of the page.
6. Inside the `main` element, you should have two `section` elements.
7. The first `section` element should have an `id` attribute with the value `upcoming-events`.
8. Inside the `#upcoming-events` section, you should have:
	- An `h2` element with the text `Upcoming Events`.
	- Two `article` elements. Each article should represent an event, and it should have:
		- An `h3` element for the event title.
		- A `p` element for the event description. You can add a date at the bottom if you like.
9. The second `section` element should have an `id` attribute with the value `past-events`.
10. Inside the `#past-events` section, you should have:
	- An `h2` element with the text `Past Events`.
	- Two `article` elements. Each article element should represent a past event, and it should have:
		- An `h3` element for the event title.
		- A `p` element for the event description. You can add a date at the bottom if you like.
		- An image element with the `src` attribute pointing to an image file and the `alt` attribute with a description of the image.