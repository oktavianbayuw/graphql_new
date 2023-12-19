const MahasiswaRepository = require("../data/mahasiswaRepository");

const MahasiswaResolver = {
  Query: {
    allDataMahasiswa: async () => {
      try {
        console.log("Fetching Mahasiswa data...");
        const mahasiswaData = await MahasiswaRepository.getAllData();

        return mahasiswaData.map((mahasiswa) => ({
          id: mahasiswa.id,
          nim: mahasiswa.nim,
          nama: mahasiswa.nama,
          alamat: mahasiswa.alamat,
          jenis_kelamin: mahasiswa.jenis_kelamin,
          reg_id: mahasiswa.reg_id,
          registrasi: mahasiswa.registrasi
            ? {
                id: mahasiswa.registrasi.id,
                nik: mahasiswa.registrasi.nik,
                status: mahasiswa.registrasi.status,
              }
            : null,
        }));
      } catch (error) {
        console.error("Error fetching Mahasiswa data", error);
        throw error;
      }
    },
  },
};

module.exports = MahasiswaResolver;
