let fruits = [
    "apple",
    "banana",
    "pear",
    "orange",
    "grapes"
];
console.log("The fruites are:")

for(let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i])
}

console.log()
// or we can use another method

console.log("The gpu manufacturers are:")

let gpuManufacturers = [
    "Asus",
    "PowerColor",
    "MSI",
    "Nvidia",
    "Gigabyte"
]

for(let gpu of gpuManufacturers) {
    console.log(gpu)
}