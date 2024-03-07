export const getProducts = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 4,
        src: "",
        name: "Banana",
        price: 2,
        description: "Be healthy.",
      },
    ]);
  });
});