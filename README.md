# dotbot

## How to use bot

Go into a Discord Server which the bot is in. Then send a message like this:
```
/dot something
```

## How to run bot

First create a Discord Bot and get the Bot Token. Then create a file called .env. In this file put:

```
TOKEN=YOUR_TOKEN_HERE
```

There is a Dockerfile. Use it.

```
docker build --tag dotbot:1.0 .
docker run dotbot dotbot:1.0
```

## Creators

By: [Rohan Juneja](https://rohanj.dev/)

Credit to: [Safin Singh](https://safinsingh.tech) for Logging
