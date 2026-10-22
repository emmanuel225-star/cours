let i = 1;
while (i <= 30) {
    let text = '';

    if (i % 3 === 0) {
        text += "Fizz";
    }
    if (i % 5 === 0) {
        text += "Buzz";
    }
    console.log(text || i);
    i++;
} 