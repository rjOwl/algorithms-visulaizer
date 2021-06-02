function bubbleSort(heightsArr, bars) {
    let cpArr = [...heightsArr]
    for (let i = 0; i < heightsArr.length - 1; i++) {
        for (let j = 0; j < heightsArr.length - i- 1; j++) {
            updateStyle(bars[j], heightsArr[j], colors.comparing)
            updateStyle(bars[j + 1], heightsArr[j + 1], colors.comparing)
            if (heightsArr[j] > heightsArr[j + 1]) {
                updateStyle(bars[j], heightsArr[j], colors.swaped)
                updateStyle(bars[j + 1], heightsArr[j + 1], colors.swaped)
                var temp = heightsArr[j];
                heightsArr[j] = heightsArr[j + 1]
                heightsArr[j + 1] = temp
                updateStyle(bars[j], heightsArr[j], colors.swaped)
                updateStyle(bars[j + 1], heightsArr[j + 1], colors.swaped)
            }
            updateStyle(bars[j], heightsArr[j], colors.default)
            updateStyle(bars[j + 1], heightsArr[j + 1], colors.default)
        }
        updateStyle(bars[i], heightsArr[i], colors.default)
    }
}
