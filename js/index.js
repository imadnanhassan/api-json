const shop = {
    name: 'Xaiomi Store',
    address: 'Dhaka',
    products: ['mobile', 'laptop', 'tab'],
    isExpensive: true
}
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied);

const converted = JSON.parse(shopStringfied);
console.log(converted);