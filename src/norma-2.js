console.log("**********Norma-2***********");
/* Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/

const shoppinglist = [
  { name: "fruits", amount: 120, availability: true, price: 100, sum: 12000 },
  { name: "oil", amount: 15, availability: true, price: 50, sum: 750 },
  { name: "meat", amount: 37, availability: true, price: 300, sum: 11100 },
  { name: "vegetables", amount: 300, availability: true, price: 20, sum: 6000 },
];

function addItem(a) {
  let flag = 0;

  shoppinglist.forEach((n) => {
    if (n.name === a) {
      n.amount++;
      n.sum += n.price;
      flag = 1;
    }
  });
  if (flag === 0) {
    shoppinglist.push({
      name: "milk",
      amount: 10,
      availability: true,
      price: 30,
      sum: 300,
    });
  }
}
addItem("fruits");

console.log(shoppinglist);
