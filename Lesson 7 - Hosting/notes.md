# Lesson
Build the basics of planning an API 

## Planning
How is our application going to work?

### Client
Good to think about this because it helps you think of use cases you might otherwise miss
* Displays our cards/game to the user
    * It will need to be able to make requests to the server for the user visible state of the game.
* Allows the user to make moves
    * It will need to be able to make requests to the server to send moves
* Allows the user to create games
    * It will need to track which game is which, and which user is which


### Server
Go through the use cases and develop what you think you'll need
* Allows a game to be created
* Allows a user to get the information about that game
* Can keep track of the game state
    * It will need to be able to store the state of the game somewhere
* It can tell a client all the info it needs for a turn
    * It will need an endpoint to be able to send the client turn state data
* It knows the rules of the game and can compute win states
    * Turn state might include information like "you've won!"


## Setting up OpenAPI 
This isn't the only way to do this but it's a good way. It lets us generate documents that are human readable so other people can consume our API

1. Install [OpenAPI Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)
1. See the example of what an API document can look like by looking at the [Smartwyre API](https://docs.smartwyre.info/)
1. Look at the [Swagger documentation](https://swagger.io/specification/) to see how to fill the fields in
1. Follow the quickstart guide for developing your first bit of documentation


*List of Server Endpoints*
#### POST /games
Ceates a game and returns a JSON object containing the gamer id

Request parameters:
None

Request body:
players (required) - Must be an integer 2-10
name (required) - must be a string of less than 20 characters, may not be blank

Example request:
{
    players: {playerCount}
    name: {startingPlayerName}
    password: {password}
}

Responses: 
201 - Created
{
    gameId: {id}
}

400 - Bad Request
{
    error: {string containing error details}
}

500 - Server error
{
    error: {string containing error details}
}

GET /games/{id}
Returns the state of the game
Request parameters:
