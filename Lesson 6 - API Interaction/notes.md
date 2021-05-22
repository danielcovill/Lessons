# Lesson 1 Prep
1. Download and install [Insomnia](https://insomnia.rest/download) 
1. Read [HTTP methods overview](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

# Lesson 1
Understanding RESTful API basics from the calling side.

1. Demonstrate how the browser makes GET/POST/etc. calls by searching on Duck Duck Go and posting to [1001 records site](https://1001albumsgenerator.com/hattar/history)
1. Complete an overview of the info on the [RESTful APIS](http://avaldes.com/best-practices-for-restful-api-design/) page.
1. Review the [HTTP Request Methods](https://www.w3schools.com/tags/ref_httpmethods.asp)
1. Demonstrate how to make calls to the [Joke API](https://sv443.net/jokeapi/v2/)
    1. Make note of the "Submit a joke" portion of the above for POST requests
    1. Work together at the same time through this
    1. See the (documentation)[https://sv443.net/jokeapi/v2/#endpoints] making note of status codes.
1. Demonstrate how you can see this all in the browser
1. Demonstrate a "POST" request using [Joke API](https://sv443.net/jokeapi/v2/#submit-endpoint)
    1. Make sure to do a "Dry run" using the ?dry-run query parameter
1. Review the different types of authentication [4 Most Used Auth Types](https://blog.restcase.com/4-most-used-rest-api-authentication-methods/)
1. Demonstrate an authenticated POST request using bit.ly to shorten a link

# Homework 1
1. Use insomnia to show the location of your IP address using [FreeGeoIP](https://freegeoip.app/)
1. Use insomnia to show the location of a random IP address using FreeGeoIP
1. Use insomnia to demonstrate shortening a link via an authenticated POST request against [Bit.ly](https://dev.bitly.com/api-reference/)

# Lesson 2
Making requests to APIs using Javascript, leading into Javascript promises. Doing multiple things "In parallel". Refresher on selecting and manipulating DOM objects.
1. Simple example of a get request in javascript displaying await
    1. Understand that the browser is handing this work off to a process/thread outside the browser so it is truly "parallel"
1. Simple example of changing the text inside a table or a div using code
1. Demonstrate documentation for Promise.race() and link to Promise documentation in the hope that he figures out Promise.All()


# Homework 2
Make the same requests we made in Insomnia using javascript from within a webpage and display the results of those requests on a webpage 
1. Create a table with a header row containing 4 columns (joke1, joke2, geoip1, geoip2)
1. In a row below the header, indicate the status of the call ("not started", "pending", or the actual result)
1. In the row below that indicate the time from the start of the button click to make API requests, to the fulfillment (or failure) of each request in milliseconds
1. Put a "clear" link, a "call sync" link, and a "call async" link at the top of the page
1. Make the click action for "clear" reset all the statuses to "not started"
1. Make the click action for "call sync" reset all the statuses synchronously 
1. Make the click action for "call asynch" reset all the statuses asynchronously