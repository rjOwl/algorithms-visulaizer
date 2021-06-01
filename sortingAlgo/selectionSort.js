const svg = document.getElementById("bars")
const sort = document.getElementById("sort")
const reset = document.getElementById("reset")
const X = 10
const WIDTH = 5
let bars = []
let barsMap = {}
// let dataArr= [ 172, 62, 120, 211, 234, 285, 182, 44, 183, 276]
let dataArr = [266, 107, 263, 105, 284, 275, 74, 215, 152, 225, 108, 136, 187, 144, 207, 152, 292, 235, 61, 113, 225, 126, 185, 166, 197, 225, 266, 141, 14, 236, 56, 10, 194, 149, 179, 113, 299, 63, 171, 107, 88, 253, 265, 90, 54, 205, 212, 260, 105, 192, 7, 91, 146, 24, 157, 30, 173, 34, 236, 27, 155, 20, 43, 190, 121, 249, 236, 117, 69, 299, 283, 88, 202, 10, 176, 16, 70, 164, 230, 11, 144, 147, 25, 83, 252, 66, 47, 0, 160, 109, 172, 62, 120, 211, 234, 285, 182, 44, 183, 276]

const colors={
    default: "#6299f1",
    comparing: "#6cda7a",
    swaped:"#b577e7",
    found: "#dd5b5b"
}

let x_cor = []
let o = 1
const ANIMATION_SPEED_MS = 2000
// colors = ["orange", "yellow", "black", "red", "green", "blue", "grey"]

function generateRandomBars(){
    for(let i=0; i < dataArr.length; i++){
        ele = `<rect class="rect1" fill="black" height=${dataArr[i]} width="6" x=${(i+1)*20} />`
        var svgns = "http://www.w3.org/2000/svg";
        const newRect = document.createElementNS(svgns, 'rect')
        newRect.setAttribute("fill", "#6299f1")
        newRect.setAttribute("width", WIDTH)
        newRect.setAttribute("height", dataArr[i])
        newRect.setAttribute("x", (i+1)*X)
        // newRect.setAttribute("id", (i+1)*20)
        svg.appendChild(newRect)
        bars.push(newRect)
    }
}

generateRandomBars();

function cretateAnimation(bigBar, smallBar){
    const svgns = "http://www.w3.org/2000/svg";
    const animateBigBarAtt = document.createElementNS(svgns,'animate')
    const animateSmallBarAtt = document.createElementNS(svgns,'animate')

    animateBigBarAtt.setAttribute("attributeName", "x")
    animateBigBarAtt.setAttribute("from", smallBar.from)
    animateBigBarAtt.setAttribute("to", bigBar.to)
    animateBigBarAtt.setAttribute("dur", "3s")
    animateBigBarAtt.setAttribute("fill", "freeze")
    // bigBar.ele.setAttribute("fill", "green")
    bigBar.ele.setAttribute("x", bigBar.to)

    animateSmallBarAtt.setAttribute("attributeName", "x")
    animateSmallBarAtt.setAttribute("from", bigBar.from)
    animateSmallBarAtt.setAttribute("to", smallBar.to)
    animateSmallBarAtt.setAttribute("dur", "3s")
    animateSmallBarAtt.setAttribute("fill", "freeze")
    // smallBar.ele.setAttribute("fill", "green")
    smallBar.ele.setAttribute("x", smallBar.to)

    // bigBar.ele.animate([], )

    bigBar.ele.appendChild(animateBigBarAtt)
    smallBar.ele.appendChild(animateSmallBarAtt)
}

function selectionSortAnimation(){
    for(let i = 0; i <dataArr.length-1; i++){
        minIndex = i;
        bars[i].setAttribute("fill", colors.comparing)
        for(let j = i+1; j <dataArr.length; j++){
            bars[j].setAttribute("fill", colors.comparing)
            if(dataArr[j] < dataArr[minIndex]){
                bars[i].setAttribute("fill", colors.found)
                bars[j].setAttribute("fill", colors.found)
                minIndex = j
            }
        }
        if(minIndex != i){
            bars[i].setAttribute("fill", colors.swaped);
            bars[minIndex].setAttribute("fill", colors.swaped);
            [dataArr[i], dataArr[minIndex]] = [dataArr[minIndex], dataArr[i]];

            [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
            from = bars[i].getAttribute("x")
            to = bars[minIndex].getAttribute("x")
            // setTimeout(()=>{
            //     cretateAnimation(
            //         { ele: bars[i],         from: to,   to:(i+1)*20},
            //         { ele: bars[minIndex],  from: from, to:20*(minIndex+1)})
            // }, (i+1)*500)
    
            x_cor.push([
                { ele: bars[i],         from: to,   to:(i+1)*X},
                { ele: bars[minIndex],  from: from, to:X*(minIndex+1)}
            ])
        }
        else{
            bars[minIndex].setAttribute("fill", colors.default)
            bars[i].setAttribute("fill", colors.default)
        }                    
    }



    // function generate(){
    //     setTimeout(()=>{
    //         o++
    //         if(x_cor.length){
    //             const [bigBar, smallBar] = x_cor.shift()
    //             cretateAnimation(bigBar, smallBar)
    //             generate()
    //         }
    //     }, o*100)
    // }
    // generate()
    while(x_cor.length){
        const [bigBar, smallBar] = x_cor.shift()
        // setTimeout(()=>{
        //     bigBar.ele.setAttribute("fill", "red")
        //     smallBar.ele.setAttribute("fill", "red")
        // }, (o+1)*500)

        setTimeout(()=>{
            cretateAnimation(bigBar, smallBar)
        }, (o+1)*300)
        o++
    }
}

function animatee(){
    const [bigBar, smallBar] = x_cor.shift()
    cretateAnimation(bigBar, smallBar)
}
sort.addEventListener("click", function(){
    selectionSortAnimation();
})

reset.addEventListener("click", function(){
    animatee();
})