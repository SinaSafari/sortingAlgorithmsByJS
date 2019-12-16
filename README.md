# sortingAlgorithmsByJS
sorting algorithms implemented in JavaScript.


## Merge Sort
The array breaks down the data until it is in single unit. It then recombines them using cursors that only have touch each element once for each combination.
no matter the input array is sorted or not. merge sort always breaks data to the single unit. so its order always is nlogn. (so it can be considered the fastest sorting algorithm)


## Quick Sort
Quick Sort starts picking a “pivot” point at the beginning. All numbers less than the pivot point go to the left, and all numbers greater than the pivot point go to the right. It then reapplies this algorithm to each side of the pivot. at the worst time, its order is O(n^2) and for best time it is O(nlogn).

## Counting Sort
The idea of counting sort is to start by initializing an helper array of length k, that will hold the count of each number. we should have the range of data). counting sort algorithm loop through the input array and increase the “count” for each value by 1 every time pointer meet that number in the input array. 
