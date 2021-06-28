import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema.js';
  
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({app});

  app.use((req,res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
  })
  
  const port = process.env.PORT || 5001
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Graphql Server started on: http://localhost:${port}`)
  })

