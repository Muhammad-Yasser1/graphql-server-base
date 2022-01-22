# graphql-server-base
a graphql server that can be used as a snippets resource or a starting point for graphql projects

- npm run dev
- go to http://localhost:3000/graphql
- try your queries, for example: 
{
  books {
    title,
    author{
      name,
      books{
        title
      }
    }
  }
}
