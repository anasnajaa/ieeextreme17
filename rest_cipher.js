var input_stdin = "";
var input_cursor = 0;

const main = () => {
    let lines = input_stdin.split(/\r\n|\n/);
    let number_of_lines = Number(lines[0]);
    for (let i = 1; i <= number_of_lines; i++) {

        let message = lines[i];
        let chars = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 };
        //console.log(message);
        for (let k = 0; k < message.length; k++) {
            switch (message[k]) {
                case 'a': chars.a += 1; break;
                case 'b': chars.b += 1; break;
                case 'c': chars.c += 1; break;
                case 'd': chars.d += 1; break;
                case 'e': chars.e += 1; break;
                case 'f': chars.f += 1; break;
                case 'g': chars.g += 1; break;
            }
        }

        let heighestScore = { char: '', score: 0 }

        if (chars.a > heighestScore.score) {
            heighestScore.char = 'A';
            heighestScore.score = chars.a;
        }

        if (chars.b > heighestScore.score) {
            heighestScore.char = 'B';
            heighestScore.score = chars.b;
        }

        if (chars.c > heighestScore.score) {
            heighestScore.char = 'C';
            heighestScore.score = chars.c;
        }

        if (chars.d > heighestScore.score) {
            heighestScore.char = 'D';
            heighestScore.score = chars.d;
        }

        if (chars.e > heighestScore.score) {
            heighestScore.char = 'E';
            heighestScore.score = chars.e;
        }

        if (chars.f > heighestScore.score) {
            heighestScore.char = 'F';
            heighestScore.score = chars.f;
        }

        if (chars.g > heighestScore.score) {
            heighestScore.char = 'G';
            heighestScore.score = chars.g;
        }

        console.log(heighestScore.char)
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () { main(); });


function nextInt() {
    return parseInt(nextString());
}

function nextFloat() {
    return parseFloat(nextString());
}

function nextString() {
    var next_string = "";
    clearWhitespaces();
    while (input_cursor < input_stdin.length && !isWhitespace(input_stdin[input_cursor])) {
        next_string += input_stdin[input_cursor];
        input_cursor += 1;
    }
    return next_string;
}

function nextChar() {
    clearWhitespaces();
    if (input_cursor < input_stdin.length) {
        return input_stdin[input_cursor++];
    } else {
        return '\0';
    }
}

function isWhitespace(character) {
    return ' \t\n\r\v'.indexOf(character) > -1;
}

function clearWhitespaces() {
    while (input_cursor < input_stdin.length && isWhitespace(input_stdin[input_cursor])) {
        // ignore the next whitespace character
        input_cursor += 1;
    }
}