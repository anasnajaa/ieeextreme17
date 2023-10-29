var is_debug = true;
var input_stdin = "";
var input_cursor = 0;

function main() {
    let number_of_people = nextInt();
    let h_of_0 = nextInt();
    let var_a = nextInt();
    let var_c = nextInt();
    let var_q = nextInt();

    let heights = [h_of_0];

    let counter = 1

    while (counter < number_of_people) {
        let height = (((var_a * heights[counter - 1]) + var_c) % var_q)
        heights.push(height);
        counter += 1
    }

    if (is_debug) {
        heights = [2012, 2431, 2496, 2328, 1258];
    }

    if (is_debug) {
        //heights = [400, 200, 200, 300, 100, 600, 150, 50, 130, 900, 30];
    }

    heights.reverse();

    if (is_debug) {
        console.log(heights)
    }

    let noticable = 0;

    function taller_between(start, end, height) {
        let temp = heights.filter((_, ind) => ind >= start && ind <= end);
        for (let i = 0; i <= temp.length; i++) {
            if (temp[i] > height) return temp[i];
        }
        return -1;
    }

    function all_shorter(start, end, height) {
        let temp = heights.filter((_, ind) => ind >= start && ind <= end);
        for (let i = 0; i <= temp.length; i++) {
            if (temp[i] > height) return false;
        }
        return true;
    }

    function all_remaining_shorter(k, height) {
        let temp = heights.filter((_, ind) => ind >= k);
        for (let i = 0; i <= temp.length; i++) {
            if (temp[i] > height) return false;
        }
        return true;
    }

    for (let i = 0; i < heights.length; i++) {
        let current_person_height = heights[i];

        for (let k = i + 1; k < heights.length; k++) {
            let target_person_height = heights[k];

            if (is_debug) {
                console.log('range:', heights.filter((_, ind) => ind >= i && ind <= k));
            }

            if (k - i < 2) {
                noticable++;
            } else {
                //let tallest = tallest_in_range(i, k);

                if (current_person_height >= target_person_height) {
                    if (all_shorter(i, k, target_person_height)) {
                        if (is_debug) {
                            console.log('noticable')
                        }
                        noticable++;
                    }
                }
                // else if (current_person_height < target_person_height && k - i === 0) {
                //     noticable++;
                // } 
                else if (current_person_height < target_person_height) {

                    let taller = taller_between(i, k, target_person_height);

                    if (taller === -1) {
                        if (is_debug) {
                            console.log('noticable')
                        }
                        noticable++;
                    } else {
                        if (is_debug) {
                            console.log(taller, 'is between', heights[i], heights[k]);
                        }
                    }

                    if (all_remaining_shorter(k, target_person_height)) {
                        break;
                    }
                }
            }


        }
        if (is_debug) {
            console.log('------------------')
        }
    }

    console.log(noticable)
}

if (is_debug) {
    main();
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    process.stdin.on('data', function (data) {
        input_stdin += data;
    });
    process.stdin.on('end', function () { main(); });
}

// default parsers for JS.
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