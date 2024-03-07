export async function getProducts() {
  return new Promise ((resolve, reject) => {
    resolve([
      {
        src: "./watch.jpg",
        name: "White Watch",
        price: 200,
        description: "For modern man.",
      },
      {
        src: "./trainer.jpg",
        name: "Red trainers",
        price: 100,
        description: "Time to fly.",
      },
    ]);
  });
}
