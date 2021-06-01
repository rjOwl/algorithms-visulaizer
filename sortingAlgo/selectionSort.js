let x_cor = []
let o = 1

function selectionSortAnimation(dataArr, bars){
    for(let i = 0; i <dataArr.length-1; i++){
        minIndex = i;
        updateStyle(bars[i], dataArr[i], colors.comparing)
        // bars[i].setAttribute("fill", colors.comparing)
        for(let j = i+1; j <dataArr.length; j++){
            updateStyle(bars[j], dataArr[j], colors.found)
            // bars[j].setAttribute("fill", colors.comparing)
            if(dataArr[j] < dataArr[minIndex]){
                // updateStyle(bars[i], dataArr[i], colors.found)
                updateStyle(bars[j], dataArr[j], colors.black)
                if(minIndex!=i)
                    updateStyle(bars[minIndex], dataArr[minIndex], colors.default)
                minIndex = j
                // bars[i].setAttribute("fill", colors.found)
                // bars[j].setAttribute("fill", colors.found)
            }
            else
                updateStyle(bars[j], dataArr[j], colors.default)
        }
        if(minIndex != i){
            updateStyle(bars[i], dataArr[i], colors.swaped);
            updateStyle(bars[minIndex], dataArr[minIndex], colors.swaped);
            // bars[i].setAttribute("fill", colors.swaped);
            // bars[minIndex].setAttribute("fill", colors.swaped);
            [dataArr[i], dataArr[minIndex]] = [dataArr[minIndex], dataArr[i]];

            // [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
            // from = bars[i].getAttribute("x")
            // to = bars[minIndex].getAttribute("x")
            // x_cor.push([
            //     { ele: bars[i],         from: to,   to:(i+1)*X},
            //     { ele: bars[minIndex],  from: from, to:X*(minIndex+1)}
            // ])
            updateStyle(bars[i], dataArr[i], colors.swaped)
            updateStyle(bars[minIndex], dataArr[minIndex], colors.swaped)

        }
        updateStyle(bars[i], dataArr[i], colors.default)
        updateStyle(bars[minIndex], dataArr[minIndex], colors.default)
        // else{
            // bars[minIndex].setAttribute("fill", colors.default)
            // bars[i].setAttribute("fill", colors.default)
        // }                    
    }
    // while(x_cor.length){
    //     const [bigBar, smallBar] = x_cor.shift()
    //     setTimeout(()=>{
    //         cretateAnimation(bigBar, smallBar)
    //     }, (o+1)*300)
    //     o++
    // }
}
