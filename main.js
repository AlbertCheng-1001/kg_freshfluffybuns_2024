DIGIT_NAME = {0:"Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 
        6:"Six", 7:"Seven", 8:"Eight", 9:"Nine"};

function number_to_words(number){

    words = "";

    while (number > 0){
        last_digit = number % 10;
        number = Math.floor(number/10);
        words = DIGIT_NAME[last_digit] + words;
    }
    return words;

}

function word_list(numbers){
    word_array = [];

    for (i = 0; i < numbers.length; i++){
        words = number_to_words(numbers[i]);
        word_array[i] = words
    }
    return word_array;
}

myArgs = process.argv.slice(2)

numbers = myArgs.map(x => parseInt(x));

console.log(word_list(numbers).join(','));




