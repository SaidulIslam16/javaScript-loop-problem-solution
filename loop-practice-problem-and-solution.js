// Problem 1 : Display "I love mango" for 39 times

for (var i = 1; i <= 39; i++) {
    console.log("I love mango");
}

// Problem 2: Display numbers between 58 to 98

for (var i = 58; i <= 98; i++) {
    console.log(i);
}

// Problem 3: Show all even numbers from 412 to 456;

for (var i = 412; i <= 456; i += 2) {
    console.log(i);
}

// Problem 4: Show all odd numbers from 581 to 623;

for (var i = 581; i <= 623; i += 2) {
    console.log(i);
}

// Problem 5: Create an array for all the mobile phones you used. Display all the elements of the array by using while loop.

var phones = ["apple", "Nokia", "Sony Ericsson", "Huawei", "i-mobile", "Micromax", "Oppo", "Samsung", "Xiaomi"];

var phoneIndex = 0;
while (phoneIndex < phones.length) {
    var phone = phones[phoneIndex];
    console.log(phone);
    phoneIndex++;
}

// Problem 6: Run a loop from 30 to 86. The loop will stop if the values get higher than 50.

for (var i = 30; i <= 86; i++) {
    if (i > 50) {
        break
    }
    console.log(i);
}

// Problem 7: Write the price of the books you have. Display the prices if the prices is lower than 200.

var bookPrices = [200, 150, 100, 140, 700, 250, 350, 130, 450, 300, 456, 180, 790, 630, 156];

for (var i = 0; i < bookPrices.length; i++) {
    var singleBookPrice = bookPrices[i];
    if (singleBookPrice >= 200) {
        continue;
    }
    console.log(singleBookPrice);
}