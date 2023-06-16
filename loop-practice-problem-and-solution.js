// Problem 1 : Display "I love mango" for 39 times

for (var i = 1; i <= 39; i++) {
    // console.log("I love mango");
}

// Problem 2: Display numbers between 58 to 98

for (var i = 58; i <= 98; i++) {
    // console.log(i);
}

// Problem 3: Show all even numbers from 412 to 456;

for (var i = 412; i <= 456; i += 2) {
    // console.log(i);
}

// Problem 4: Show all odd numbers from 581 to 623;

for (var i = 581; i <= 623; i += 2) {
    // console.log(i);
}

// Problem 5: Create an array for all the mobile phones you used. Display all the elements of the array by using while loop.

var phones = ["apple", "Nokia", "Sony Ericsson", "Huawei", "i-mobile", "Micromax", "Oppo", "Samsung", "Xiaomi"];

var phoneIndex = 0;
while (phoneIndex < phones.length) {
    var phone = phones[phoneIndex];
    // console.log(phone);
    phoneIndex++;
}

// Problem 6: Run a loop from 30 to 86. The loop will stop if the values get higher than 50.