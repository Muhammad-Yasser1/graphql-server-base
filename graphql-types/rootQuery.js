import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import { authors, books } from '../data.js';
import { authorType } from './author/Author.js';
import { bookType } from './book/Book.js';

export const rootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'The Root Query',
	fields: () => ({
		book: {
			type: bookType,
			description: 'A single book',
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (parent, args) => {
				return books.find((book) => book.id === args.id);
			},
		},
		author: {
			type: authorType,
			description: 'A single author',
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (parent, args) => {
				return authors.find((author) => author.id === args.id);
			},
		},
		books: {
			type: new GraphQLList(bookType),
			description: 'List of books',
			resolve: () => books,
		},
		authors: {
			type: new GraphQLList(authorType),
			description: 'List of authors',
			resolve: () => authors,
		},
	}),
});
