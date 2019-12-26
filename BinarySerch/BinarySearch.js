// just works on sorted arrays

function linearSearch(arr, n) {
    var lowIndex = 0
    var highIndex = arr.length - 1

    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2)

        if (arr[midIndex] == n) {
            return midIndex
        } else if (n > arr[midIndex]) {
            lowIndex = midIndex
        } else {
            highIndex = lowIndex
        }
    }
    return
}