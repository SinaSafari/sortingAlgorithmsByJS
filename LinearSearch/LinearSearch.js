function linearSearch(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true
        }
    }
    return false
}