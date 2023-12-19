const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Mahasiswa = sequelize.define(
  "mahasiswa",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reg_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "tbl_mahasiswa",
    timestamps: false, // Menonaktifkan opsi timestamps
  }
);

const Registrasi = sequelize.define(
  "registrasi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tbl_registrasi",
    timestamps: false, // Menonaktifkan opsi timestamps
  }
);

Mahasiswa.belongsTo(Registrasi, { foreignKey: "reg_id", as: "registrasi" });
Registrasi.hasMany(Mahasiswa, { foreignKey: "reg_id", as: "mahasiswas" });

class MahasiswaRepository {
  async getAllData() {
    try {
      const mahasiswaData = await Mahasiswa.findAll({
        include: [
          {
            model: Registrasi,
            as: "registrasi",
            attributes: ["id", "nik", "status"],
          },
        ],
      });

      return mahasiswaData;
    } catch (error) {
      console.error("Error fetching Mahasiswa data from database", error);
      throw error;
    }
  }
}

module.exports = new MahasiswaRepository();
