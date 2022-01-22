import {
	GraphQLInt,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import { authors } from '../../data.js';
import { authorType } from '../author/Author.js';

export const bookType = new GraphQLObjectType({
	name: 'Book',
	description: 'this represents a book written by an author',
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		authorId: { type: new GraphQLNonNull(GraphQLInt) },
		author: {
			type: authorType,
			description: 'represents the author of book',
			resolve: (book) => {
				return authors.find((author) => author.id === book.authorId);
			},
		},
	}),
});
