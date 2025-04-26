## General

Most important for each prompt, let me know if you understand everything and the instructions are clear, and applied to the answer.

- The app for simplicity is considered as SPA
- use TypeScript with strict rules
  - avoid any
  - avoid type-casting
- prefer types over interfaces

- follow feature slice approach
- avoid shared or utils/helpers things
- follow functional programming paradigm
- try to encapsulate the pure TS logic in the services (don't use class for services)
- favor the named export whenever is needed
- avoid barrel files at all cost
- favor the dependency injection for easier testing
- try to not import code from one module to another one


## Styling

- use latest version of the Tailwind CSS (v4)
- for components use base-ui (it is alpha but we are also, no fear ;)) https://base-ui.com/react/overview/quick-start

## Routing

- use latest version of the https://tanstack.com/router/latest
- additional guide with vite https://tanstack.com/router/latest/docs/framework/react/routing/installation-with-vite

## Components

- try to eliminate the writing logic in the components
  - use custom hooks for logic in case some react specific thing is needed
  - otherwise use the services mentioned in the general point
- favor composition if the props amount is big (4 props in object seems to be good boundary)

## State management

- server cache should be solved by the router - however if not let me know straight away
- in any point when you need to create some context or provider for state management, let me know straight away - we may want to use lib like:
  - jotai or zustand, but this need to be reviewed together

## Api integration and backend

For now we can't afford the backend. However at some point in time it will be present.
We would like to fake it for now with tool like msw maybe ?
Additionally any api connection ideally should be encapsulated in the service
In case the router loaders (or whatever is it called) would be not enough feel free to introduce the tanstack react-query (latest version)

## Testing

As agreed before it is mainly playground. We use following approach:

- node tests with Vitest node environment, pure logic in typescript, should be really fast
- browser tests with Vitest Browser mode - whenever integration test is needed to test some user-centric flow