data = [1, 4, 6, 45, 7, 0, 10, 23, 34, 5, 55]

def array_inserting(data: list, insert_ele: int | float, position: int) -> list:

    arr_size = len(data) - 1

    data.append(None)

    for i in range(arr_size, - 1, - 1):

        if i >= position:

            data[i + 1] = data[i]

            if i == position:
                data[position] = insert_ele

    print(data)         



array_inserting(data=data, insert_ele=70, position=2)       