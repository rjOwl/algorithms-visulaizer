// const numbers = [99, 44, 6, 2, 1, 5];
function partitions(heightsArr, bars, left, right) {
    let pivoteIndex = right;
    let pivotNumber = heightsArr[right];
    // console.log(bars)
    updateStyle(bars[pivoteIndex], heightsArr[pivoteIndex], colors.black)
    for (let i = right - 1; i >= left; i--) {
        updateStyle(bars[i], heightsArr[i], colors.found)
        if (heightsArr[i] > pivotNumber) {
            pivoteIndex--;
            updateStyle(bars[i], heightsArr[i], colors.swaped);
            updateStyle(bars[pivoteIndex], heightsArr[pivoteIndex], colors.swaped);
            [heightsArr[pivoteIndex], heightsArr[i]] = [heightsArr[i], heightsArr[pivoteIndex]];
            updateStyle(bars[pivoteIndex], heightsArr[pivoteIndex], colors.default);
            updateStyle(bars[i], heightsArr[i], colors.default);
        }
        updateStyle(bars[i], heightsArr[i], colors.default);
    }
    updateStyle(bars[right], heightsArr[right], colors.swaped);
    updateStyle(bars[pivoteIndex], heightsArr[pivoteIndex], colors.swaped);
    [heightsArr[pivoteIndex], heightsArr[right]] = [heightsArr[right], heightsArr[pivoteIndex]];
    updateStyle(bars[right], heightsArr[right], colors.default);
    updateStyle(bars[pivoteIndex], heightsArr[pivoteIndex], colors.default);
    return pivoteIndex;
}

function quickSort(heightsArr, bars, left, right) {
    if (left >= right)
        return;
    let pivoteIndex = partitions(heightsArr, bars, left, right);
    quickSort(heightsArr, bars, left, pivoteIndex - 1)
    quickSort(heightsArr, bars, pivoteIndex + 1, right)
}
// quickSort(numbers, 0, 0, numbers.length - 1);
// console.log(numbers);