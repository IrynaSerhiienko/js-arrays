console.log("**********Minimum-1-1***********");
/* 
1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    */

const shoppinglist = [
  { name: "fruits", amount: 115, availability: true, price: 200 },
  { name: "fruits", amount: 120, availability: false, price: 100 },
  { name: "oil", amount: 15, availability: false, price: 50 },
  { name: "meat", amount: 37, availability: false, price: 300 },
  { name: "vegetables", amount: 300, availability: true, price: 20 },
];

function send() {
  const res = shoppinglist.filter((item) => item.availability === true);
  const res1 = shoppinglist.filter((item) => item.availability === false);
  const availability = res.concat(res1);
  const availability1 = [...res, ...res1];
  console.log("Concat method: ", availability);
  console.log("Spread operator: ", availability1);
}

send();
