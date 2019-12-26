function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function bubbleSort(arr) {
    arrLength = arr.length
    for (var i = 0; i < arrLength; i++) {
        for (var j = 0; j <= i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j)
            }
        }
    }
    return arr
}
