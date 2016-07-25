# Synopsis
An extension of the 'filtweeter' Node.js application. It connects to the Twitter API; counts the number of times certain words have been tweeted, and displays the results in the browser.

# Motivation
To experiment with connecting to a social API like Twitter, and storing results in redis from Node.js.

# Installation

1. Provided that you have already signed up with Twitter, log on to https://apps.twitter.com/ and 'Create New App'
2. Fill in the application details (ignore 'Callback URL') and then 'Create your Twitter Application'
3. Click on the 'Keys and Access Tokens' tab
4. Scroll down to the section that allows you to 'Create my access token'
5. Copy the 'API Key', 'API Secret', 'Access Token', and 'Access Token Secret' values into the 'credentials.json' file
6. Modify the countwitt filters within 'server.js' (line 8, i.e. countwitt(['your', 'desired', 'foo', 'filters'])
7. Now, provided that you already have node.js and relevant modules installed on your system, run the application with the command 'node server.js'
8. Open up a browser like chrome, and enter 'localhost:3000' in the url, to view the results
9. To stop the stream, go back to the console and type Ctrl-C to stop the stream!
