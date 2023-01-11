/** assn03 */
const clothingStock = [
  {
    id: "1",
    color: "red",
    category: "men shirt",
    item: "Regular Fit Men Shirt",
    inStock: true,
  },
  {
    id: "2",
    color: "green",
    category: "women shirt",
    item: "Slim Fit Women Shirt",
    inStock: true,
  },
  {
    id: "3",
    color: "blue",
    category: "men shirt",
    item: "Oversized Men Shirt",
    inStock: false,
  },
  {
    id: "4",
    color: "yellow",
    category: "men tshirt",
    item: "Regular Fit Men Tshirt",
    inStock: false,
  },
  {
    id: "5",
    color: "magenta",
    category: "women jeans",
    item: "Ankle Lenght Women Jeans",
    inStock: true,
  },
  {
    id: "6",
    color: "yellow",
    category: "men shirt",
    item: "Casual Fit Men Shirt",
    inStock: true,
  },
  {
    id: "7",
    color: "green",
    category: "men jeans",
    item: "Carrot Fit Men Jeans",
    inStock: true,
  },
  {
    id: "8",
    color: "red",
    category: "women shirt",
    item: "Casual Fit Women Shirt",
    inStock: false,
  },
];
/** task #1 */
console.log(
  ...clothingStock
    .filter(({ category }) => category === "women shirt")
    .reduce(
      (pre, { color }) => (color in pre ? pre : [...pre, color]),
      []
    )
);
/** task #2 */
console.log(
  ...clothingStock
    .filter(({ category, inStock }) => (category === "men shirt" && inStock))
    .reduce(
      (pre, { color }) => (color in pre ? pre : [...pre, color]),
      []
    )
);
/** task #3 */
console.log(
  clothingStock.filter(({ inStock }) => (inStock))
);