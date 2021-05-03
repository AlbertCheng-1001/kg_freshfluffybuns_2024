import math
import sys

DIGIT_NAME = {0: "Zero", 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 
            6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine'}

def number_to_words(number):
    words = ""
    
    while number > 0:
        last_digit = number % 10
        number = math.floor(number/10)
        words = DIGIT_NAME[last_digit] + words 
    return words



def convert_numbers(numbers):
    words =[]

    for i in range(len(numbers)):
        word = number_to_words(numbers[i])
        words.append(word)
    return words


numbers = list(map(lambda x : int(x), sys.argv[1:]))
words = convert_numbers(numbers)
print(",".join(words))