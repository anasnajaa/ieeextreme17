# a simple parser for python. use get_number() and get_word() to read
import scipy
import numpy


def parser():
    while 1:
        data = list(input().split(' '))
        for number in data:
            if len(number) > 0:
                yield (number)


input_parser = parser()


def get_word():
    global input_parser
    return next(input_parser)


def get_number():
    data = get_word()
    try:
        return int(data)
    except ValueError:
        return float(data)


# numpy and scipy are available for use

def encrypt(msg, shift):
    shifted_message = []
    for char in msg:
        ascii_order = ord(char)
        if ascii_order == 32:  # space
            shifted_message.append(32)
        else:  # lower case char a = 97 /  z = 122
            if (ascii_order - shift) < 97:
                shifted_message.append(
                    123 - (97 - (ascii_order - shift)))
            else:
                shifted_message.append(ascii_order - shift)

    shifted_str = []
    for char in shifted_message:
        shifted_str.append(chr(char))

    return shifted_str


def decrypt(msg, shift):
    shifted_message = []
    for char in msg:
        ascii_order = ord(char)
        if ascii_order == 32:  # space
            shifted_message.append(32)
        else:  # lower case char a = 97 /  z = 122
            if (ascii_order + shift) > 122:
                shifted_message.append(
                    97 + ((ascii_order + shift) - 123))
            else:
                shifted_message.append(ascii_order + shift)

    shifted_str = []
    for char in shifted_message:
        shifted_str.append(chr(char))

    return shifted_str


number_of_cases = int(input())

while number_of_cases > 0:
    shift_value = int(input())
    message = input()

    if message.find('the ') != -1 or message.find(' the ') != -1 or message.find(' the') + 4 == len(message):
        m = ''.join(encrypt(message, shift_value))
        m = m.replace('', '')
        print(m.strip(), sep='')
    else:
        m = ''.join(decrypt(message, shift_value))
        m = m.replace('', '')
        print(m.strip(), sep='')

    number_of_cases -= 1

    # a b c d e f g h i j k l m n o p q r s t u v w x y z
    # 97
