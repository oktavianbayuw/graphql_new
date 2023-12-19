const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const MahasiswaSchema = require("../schemas/mahasiswaSchema"); // Ubah path sesuai struktur proyek Anda
const MahasiswaResolver = require("../resolvers/mahasiswaResolver"); // Ubah path sesuai struktur proyek Anda

const app = express();

const server = new ApolloServer({
  typeDefs: [MahasiswaSchema],
  resolvers: [MahasiswaResolver],
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3004;

  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
