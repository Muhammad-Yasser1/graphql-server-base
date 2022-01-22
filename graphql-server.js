import express from 'express';
const app = express();
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { rootMutationType } from './graphql-types/rootMutation.js';
import { rootQueryType } from './graphql-types/rootQuery.js';

const schema = new GraphQLSchema({
	query: rootQueryType,
	mutation: rootMutationType,
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
