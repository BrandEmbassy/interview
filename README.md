# BrandEmbassy Contacts

# IMPORTANT!!! TESTED ONLY IN GOOGLE CHROME  62.X

## Implementation Notes

The `Client` app is a plain `React` app with only one external dependency for the server-side communication via [Socket.IO](https://socket.io/). But no UI lib or state-management lib dependencies.

The `Server` is a simple `NodeJS` app who depends on `Socket.IO` to communicate with the clients and [AlaSQL](http://alasql.org/) database for persisting the contacts into a JSON file.

## Test Drive

#### Instal the Client and Server dependencies
```
yarn install
```

#### Run the Client and the Server
```
yarn start
```

#### Run only the Server
```
yarn run serve
```

Then have fun!

Best, Maurizio
