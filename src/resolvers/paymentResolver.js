const PaymentRepository = require("../data/paymentRepository");

const PaymentResolver = {
  Mutation: {
    makePayment: async (_, { nim, bulan, nominal }) => {
      try {
        const paymentResult = await PaymentRepository.makePayment(
          nim,
          bulan,
          nominal
        );
        return paymentResult;
      } catch (error) {
        console.error("Error making payment", error);
        throw error;
      }
    },
  },
};

module.exports = PaymentResolver;
