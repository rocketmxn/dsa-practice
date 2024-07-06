# dsa-practice

**Leetcode 2091: Maximum and Minimum of an array. Minimum steps to remove**
```
const ans = min(n-(y-x-1), y+1, n-x)

[----,2,3,4,----]
[1,2,3,--------]
[---------5,6,7]
```

**Leetcode 75: Sort colors**
 ```
while(mid <= high) {
    if(nums[mid] === 0) {
        swap(mid, low, nums)
        mid++
        low++
    } else if (nums[mid] === 1) {
        mid++
    } else {
        swap(mid, high, nums)
        high--
    }
}

[0,1,1,2,0,2,1,2]
low           high
mid
```
**Move all negative numbers to beginning and positive to end with constant extra space**
```
if(nums[j] < 0) {
    i++
    swap(i, j, nums)
}

  [3,1,-2,-5,2,-4]
i  j
```
**Leetcode: 349: Intersection of Two Arrays**
```
let i = 0
    let j = 0
const newArr = []
const newNums1 = nums1.sort((a,b)=> a-b )
const newNums2 = nums2.sort((a,b)=> a-b )
    while(i<newNums1.length  && j<newNums2.length) {
        if(newNums1[i] < newNums2[j]) {
            i++
        } else if (newNums1[i] > newNums2[j]) {
            j++
        } else {
            if(newArr[newArr.length - 1] !== newNums1[i]) {
                newArr.push(newNums1[i])
            }
            i++
            j++
        }
    }
    return newArr
```

**Rotate an array by k steps**
```
reverseArr(nums, 0, n - 1)
reverseArr(nums, 0, k - 1)
reverseArr(nums, k, n - 1);
```
