// paymentSchema.js
const { gql } = require("apollo-server-express");

const PaymentSchema = gql`
  type Payment {
    id: ID!
    nim: String!
    bulan_tagihan_spp: Int!
    nominal: Int!
    status: String!
  }

  type Mutation {
    makePayment(nim: String!, bulan: Int!, nominal: Int!): Payment
  }
`;

module.exports = PaymentSchema;
