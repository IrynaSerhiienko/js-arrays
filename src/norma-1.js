console.log("**********Norma-1***********");
/* Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім) */

const shoppinglist = [
  { name: "fruits", amount: 120, availability: false, price: 100 },
  { name: "oil", amount: 15, availability: false, price: 50 },
  { name: "meat", amount: 37, availability: false, price: 300 },
  { name: "vegetables", amount: 300, availability: true, price: 20 },
];

function del(a) {
    let res1 = shoppinglist.filter((item) => item.name !== a);
    console.log(shoppinglist);
    console.log(res1);
}

del("vegetables");
