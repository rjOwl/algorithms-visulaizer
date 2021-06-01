function bubbleSort(heightsArr, bars) {
    let cpArr = [...heightsArr]
    for (let i = 0; i < heightsArr.length - 1; i++) {
        for (let j = 0; j < heightsArr.length - 1; j++) {
            if (heightsArr[j] > heightsArr[j + 1]) {
                updateStyle(bars[j], heightsArr[j], 'red')
                updateStyle(bars[j + 1], heightsArr[j + 1], 'red')
                var temp = heightsArr[j];
                heightsArr[j] = heightsArr[j + 1]
                heightsArr[j + 1] = temp
                updateStyle(bars[j], heightsArr[j], 'red')
                updateStyle(bars[j + 1], heightsArr[j + 1], 'red')
            }
            updateStyle(bars[j], heightsArr[j], colors.default)
            updateStyle(bars[j + 1], heightsArr[j + 1], colors.default)
        }
    }
}
let delay = 1

// setTimeout(() => bubbleSort(barsHeightArr, bars), 1000)

