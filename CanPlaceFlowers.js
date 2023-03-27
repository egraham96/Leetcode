

var canPlaceFlowers = function (flowerbed, n) {
    let previous
    let next
    let current

    for (let i = 0; i < flowerbed.length; i++) {
        previous = flowerbed[i - 1]
        current = flowerbed[i]
        next = flowerbed[i + 1]

        if ((previous === 0 || !previous) && (current === 0) && (next === 0 || !next)) {
            flowerbed[i] = 1
            n--
            //early return optimization
            if (n === 0) return true
        }
    }

    return n <= 0
};
/*The Time Complexity is O(n), a single scan of the flowerbed array of size n is done*/
/*The Space Complexity is O(1), constant extra space is used.*/