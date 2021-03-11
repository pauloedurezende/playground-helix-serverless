import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      echo: {
        args: {
          text: {
            type: GraphQLString,
          },
        },
        type: GraphQLString,
        resolve: (_root, args) => {
          return args.text;
        },
      },
    }),
  }),
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      alphabet: {
        type: new GraphQLList(GraphQLString),
        resolve: async function* () {
          for (let letter = 65; letter <= 90; letter++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            yield String.fromCharCode(letter);
          }
        },
      },
      song: {
        type: new GraphQLObjectType({
          name: 'Song',
          fields: () => ({
            firstVerse: {
              type: GraphQLString,
              resolve: () => "Now I know my ABC's.",
            },
            secondVerse: {
              type: GraphQLString,
              resolve: () =>
                new Promise((resolve) =>
                  setTimeout(
                    () => resolve("Next time won't you sing with me?"),
                    5000
                  )
                ),
            },
          }),
        }),
        resolve: () => ({}),
      },
    }),
  }),
});

export default schema;
