const { gql } = require("apollo-server-express");

const MahasiswaSchema = gql`
  type Mahasiswa {
    id: ID!
    nim: String!
    nama: String!
    alamat: String!
    jenis_kelamin: String!
    reg_id: ID
    registrasi: Registrasi
  }

  type Registrasi {
    id: ID!
    nik: String!
    status: String!
  }

  type Query {
    allDataMahasiswa: [Mahasiswa]
  }
`;

module.exports = MahasiswaSchema;
