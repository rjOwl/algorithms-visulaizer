function selectionSortAnimation(dataArr, bars){
    for(let i = 0; i <dataArr.length-1; i++){
        minIndex = i;
        updateStyle(bars[i], dataArr[i], colors.comparing)
        for(let j = i+1; j <dataArr.length; j++){
            updateStyle(bars[j], dataArr[j], colors.found)
            if(dataArr[j] < dataArr[minIndex]){
                updateStyle(bars[j], dataArr[j], colors.black)
                if(minIndex!=i)
                    updateStyle(bars[minIndex], dataArr[minIndex], colors.default)
                minIndex = j
            }
            else
                updateStyle(bars[j], dataArr[j], colors.default)
        }
        if(minIndex != i){
            updateStyle(bars[i], dataArr[i], colors.swaped);
            updateStyle(bars[minIndex], dataArr[minIndex], colors.swaped);
            [dataArr[i], dataArr[minIndex]] = [dataArr[minIndex], dataArr[i]];
            updateStyle(bars[i], dataArr[i], colors.swaped)
            updateStyle(bars[minIndex], dataArr[minIndex], colors.swaped)
        }
        updateStyle(bars[i], dataArr[i], colors.default)
        updateStyle(bars[minIndex], dataArr[minIndex], colors.default)
    }
}
