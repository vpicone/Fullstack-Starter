# Fullstack Starter

## Just Client

### Getting started
* cd into client then then run `npm install` or `yarn install`
* use npm run start to start
* Use the carbon components and carbon components style guide whenever possible
* Use eslint in your IDE to allow prettier to do its thing

### General
* Components unique to the route should live in that routes folder
* If it can be shared, throw it in the components directory
* Use [reach-router](https://reach.tech/router/example/basic) for routing. It's amazingly simple, and passes url params as props.

### Styling
* Opt for using custom [styled-components](https://styled-components.com) whenever making a new wrapper/container or customized component. Styled components allows for the same nesting rules/pseudo selectors as scss without needing the node-sass loader etc.
* If you need a truly global style, throw it in index.css

## Server + Client Together
* Run `npm install` or `yarn install` in the root *AND* client directories
* Run `npm run dev` or `yarn dev` to start both the server and client
* Use eslint to get prettier cooking
* .example will eventually be .env with environmental variables
* Run `yarn dev` or `npm run dev` to start both the server and the client


## Deploy to staging
* run `yarn deploy` or `npm run deploy`
* make an account with Zeit if you haven't already
* staging link will be automatically generated for you and copied to clip board