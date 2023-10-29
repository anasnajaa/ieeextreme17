# number_of_people h_of_0 a c q
is_debug = True

user_input = None

if is_debug:
    user_input = '5 2012 37 31 2573'.split(' ')
else:
    user_input = input().split(' ')


number_of_people = int(user_input[0])
h_of_0 = int(user_input[1])
var_a = int(user_input[2])
var_c = int(user_input[3])
var_q = int(user_input[4])

heights = [h_of_0]

counter = 1
while counter < number_of_people:
    height = (((var_a * heights[counter - 1]) + var_c) % var_q)
    heights.append(height)
    counter += 1

if is_debug:
    heights = [400, 200, 200, 300, 100, 600, 150, 50, 130, 900, 30]

heights.reverse()

if is_debug:
    print(heights)

noticable_counter = 0


def has_taller_inbetween(target_person, start, end):
    if is_debug:
        print(heights[start:end+1])

    sub_array = heights[start:end+1]
    for person in sub_array:
        if person > target_person:
            return person
    return -1


def compare_sub_array(person, start, end):
    global noticable_counter
    local_tallest = person
    local_noticable = 0
    for i, target_person in enumerate(heights[start:end]):
        if target_person < person:
            if i == 0:
                local_noticable += 1
            else:
                taller_person = has_taller_inbetween(
                    target_person, start, start+i)
                if taller_person == -1:
                    local_noticable += 1
                else:
                    if is_debug:
                        print('between', person, 'and', target_person,
                              'taller person is', taller_person)
        elif target_person > person and target_person > local_tallest:
            local_noticable += 1
            local_tallest = target_person
        else:
            break

    # if is_debug:
    #     print(local_noticable)

    noticable_counter += local_noticable


for index, person in enumerate(heights):
    compare_sub_array(person, index+1, len(heights))


print(noticable_counter)

# for start_index_b, _ in enumerate(heights):
#     if start_index_b > start_index:
#         tallest = 0
#         print('round', start_index, range(start_index_b, len(heights)))
#         for index_b in range(start_index_b, len(heights)):
#             current_target = heights[index_b]
#             # print(current_target)
#             if current_target > current_person and current_target > tallest:
#                 noticable_counter += 1
#                 tallest = current_target
