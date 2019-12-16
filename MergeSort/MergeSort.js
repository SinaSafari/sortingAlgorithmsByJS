
let merge = (left, right) => {
  let result = [],
    leftLen = left.length,
    rightLen = right.length,
    l = 0,
    r = 0
  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l])
      l++
    } else {
      result.push(right[r])
      r++
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r))
}
let mergeSort = arr => {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
