import {
	GraphQLInt,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import { authors, books } from '../data.js';
import { authorType } from './author/Author.js';
import { bookType } from './book/Book.js';

export const rootMutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Root Mutation',
	fields: () => ({
		addBook: {
			type: bookType,
			description: 'Add a new book',
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				authorId: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve: (parent, args) => {
				const { title, authorId } = args;
				const newBook = {
					id: books.length + 1,
					title,
					authorId,
				};
				books.push(newBook);
				return newBook;
			},
		},
		addAuthor: {
			type: authorType,
			description: 'Add a new author',
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: (parent, args) => {
				const { name } = args;
				const newAuthor = {
					id: authors.length + 1,
					name,
				};
				authors.push(newAuthor);
				return newAuthor;
			},
		},
	}),
});
