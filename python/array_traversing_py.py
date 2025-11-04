data = [1, 4, 6, 45, 7, 0, 10, 23, 34, 5, 55]

def array_traversing(data:list) -> list:

    for i in range(len(data)):
        print(f"the array index is : {i} and the element is : {data[i]}")


print(array_traversing(data=data))        