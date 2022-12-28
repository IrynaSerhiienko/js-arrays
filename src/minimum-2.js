console.log("**********Minimum-1-2***********");
/* 
1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.:
    */

const shoppinglist = [
  { name: "fruits", amount: 115, availability: true, price: 200 },
  { name: "fruits", amount: 120, availability: false, price: 100 },
  { name: "oil", amount: 15, availability: true, price: 50 },
  { name: "meat", amount: 37, availability: false, price: 300 },
  { name: "vegetables", amount: 300, availability: true, price: 20 },
];

function buy(a) {
  let res = shoppinglist.find((item) => item.name === a);
  console.log("Initial array: ", res);
  res.availability = false;
  let res1 = shoppinglist.filter((item) => item.name === a);
  res1.availability = false;

  console.log("Find method: ", res);
  console.log("Filter method: ", res1);
}

buy("fruits");
