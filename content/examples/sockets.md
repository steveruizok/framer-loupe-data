# Sockets

<Download
	title="Sockets.framerx"
	url="https://www.dropbox.com/s/63a5abt518qii62/Sockets.framerx?dl=0"
/>

## Instructions

Follow the steps below to join a real-time chat using the example file above.

### Using the default server

This example project requires a server to handle connections between connected prototypes, but we've set up a default server that you can use.

1. Visit [this link](https://lskik.sse.codesandbox.io/) to wake up the chat server
2. Open the _Sockets.framerx_ project
3. Open a [Live Preview](https://www.framer.com/support/using-framer-x/live-preview/)
4. Click **Open in Browser**, open the preview on your mobile device, or send the link to a friend

 **Preview the Frame named Export to see it in action.** Enjoy the conversation.

### Starting a custom server

To create your own server, either for a more private chat or to experiment with the server's code:

1. Visit [the socket server](https://codesandbox.io/s/socket-io-server-lskik) on CodeSandbox
2. Click **Fork** to create your own version of the sandbox
3. When the project loads, copy the url shown under *Listening for Connections* to 
4. In the _Sockets.framerx_ example project, open the `access.ts` file.
5. From your CodeSandbox preview, copy the URL shown under *Listening for connections at* to the variable `SERVER_URL`.

The result should look something like this:

```ts
const SERVER_URL = "https://lskik.sse.codesandbox.io/"
```

## Learn more

The example file (and the server) use [Socket.io](https://socket.io/) to handle real-time communication. 

To see more examples of using Framer X with sockets, check out the article [Multiplayer Prototypes with Framer X](https://blog.framer.com/multiplayer-prototypes-with-framer-x-5bf7447e389e). 