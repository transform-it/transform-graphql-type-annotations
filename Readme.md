# transform-graphql-type-annotations

> An utility to generate flow or typescript type annotations from GraphQL schema and query.

**Works on the clent side**

This utility is based on [apollo-codegen](https://github.com/apollographql/apollo-codegen)

The online REPL is available at  
- https://transform.now.sh/graphql-to-flow
- https://transform.now.sh/graphql-to-typescript

## Installation
```
npm i transform-graphql-type-annotations
```

## Basic Usage

All the restrictions applied by [apollo-codegen](https://github.com/apollographql/apollo-codegen) remain here.
```js
import transform from "transform-graphql-type-annotations"
import { schema, query } from "./tests/data"

// Flow Type Annotations
console.log(tranform(schema, query))
```

will give 

```js
/* @flow */
//  This file was automatically generated and should not be edited.

export type HeroAndFriendsNamesQuery = {|
  hero: ?( {
      __typename: "Human",
      // The name of the character
      name: string,
      // The friends of the character, or an empty list if they have none
      friends: ?Array< ?( {
          __typename: "Human",
          // The name of the character
          name: string,
        } | {
          __typename: "Droid",
          // The name of the character
          name: string,
        }
      ) >,
    } | {
      __typename: "Droid",
      // The name of the character
      name: string,
      // The friends of the character, or an empty list if they have none
      friends: ?Array< ?( {
          __typename: "Human",
          // The name of the character
          name: string,
        } | {
          __typename: "Droid",
          // The name of the character
          name: string,
        }
      ) >,
    }
  ),
|};

export type heroFriendsFragment = ( {
      __typename: "Human",
      // The friends of the character, or an empty list if they have none
      friends: ?Array< ?( {
          __typename: "Human",
          // The name of the character
          name: string,
        } | {
          __typename: "Droid",
          // The name of the character
          name: string,
        }
      ) >,
    } | {
      __typename: "Droid",
      // The friends of the character, or an empty list if they have none
      friends: ?Array< ?( {
          __typename: "Human",
          // The name of the character
          name: string,
        } | {
          __typename: "Droid",
          // The name of the character
          name: string,
        }
      ) >,
    }
  );
```

## API
### transform(schema, query, [type])

### schema : `string`
Pass the stringified GraphQL schema. Its a mandatory argument.

### query : `string`
Pass the stringified query. Its a mandatory argument.
### type : `string`

By default this is set to `flow`. If you want TypeScript type annotations, change this to `typescript`

## License
MIT @ Ritesh Kumar

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/5389035?v=4" width="100px;"/><br /><sub>Ritesh Kumar</sub>](http://riteshkr.com)<br />[📖](https://github.com//transform-graphql-type-annotations/commits?author=ritz078 "Documentation") [💻](https://github.com//transform-graphql-type-annotations/commits?author=ritz078 "Code") [🤔](#ideas-ritz078 "Ideas, Planning, & Feedback") [👀](#review-ritz078 "Reviewed Pull Requests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!