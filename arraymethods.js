//forEach
//filter
//map
//find
//findindex
//const result = words.filter((word) => word.length > 6);
// const studentScores = [95, 78, 85, 60, 45, 92];
// const studentGrades = studentScores.map((score) => score < 60 ? "F" : score < 69 ? "D" : score < 79 ? "C" : score < 89 ? "B": score <= 100 ? "A": "Invalid score");
// console.log(studentGrades)



const shoppingList = [
    {name: 'Apples', category: 'Fruits', isHealthy: true},
    {name: 'Potatoe Chips', category: 'Snacks', isHealthy: false},
    {name: 'Carrots', category: 'Vegetables', isHealthy: true},
    {name: 'Chocolate Bars', category: 'Sweets', isHealthy: false},
    {name: 'Greek Yoghurt', category: 'Dairy', isHealthy: true},
    {name: 'Soda', category: 'Beverages', isHealthy: false},

]
const healthyList = shoppingList.filter((item) => item['isHealthy'] == true)
healthyList.forEach((item) => console.log(item['name']));

