import {
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import { books } from '../../data.js';
import { bookType } from '../book/Book.js';

export const authorType = new GraphQLObjectType({
	name: 'Author',
	description: 'this represents a author',
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		books: {
			type: new GraphQLList(bookType),
			resolve: (author) => {
				return books.filter((book) => book.authorId === author.id);
			},
		},
	}),
});
