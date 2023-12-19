class PaymentRepository {
  async makePayment(nim, bulan, nominal) {
    try {
      const response = await axios.post(
        "http://payment.digitalevent.id/api/payment",
        {
          nim: nim,
          bulan_tagihan_spp: bulan,
          nominal: nominal,
        }
      );

      const responseData = {
        status: response.status,
        data: response.data,
        headers: response.headers,
      };

      return responseData;
    } catch (error) {
      console.error("Error making payment", error.response.data); // Log the error response
      throw error;
    }
  }
}

module.exports = new PaymentRepository();
