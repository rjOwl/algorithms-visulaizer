function changeBarColor(element, color){
    element.setAttribute("fill", color)
}

function createRandomBars(length) {
    svg.innerHTML=""
    // svg.setAttribute("width", length*13)
    let barsHeightArr = [], bars = [];
    for (let i = 0; i < length; i++) {
        let height = Math.floor(Math.random() * 300) + 10;
        barsHeightArr.push(height);
        var svgns = "http://www.w3.org/2000/svg";
        const newRect = document.createElementNS(svgns, 'rect')
        newRect.setAttribute("width", 1000/length)
        newRect.setAttribute("height", height)
        newRect.setAttribute("x", i * ((1000/length)+2))
        newRect.setAttribute("fill", "#6299f1")
        svg.appendChild(newRect)
        bars.push(newRect)
    }
    console.log(barsHeightArr);
    return {bars, heigth: barsHeightArr};
}

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

function updateStyle(bar, height, color) {
    ANIMATION_SPEED_MS += 100;
    setTimeout(() => {
        bar.setAttribute('fill', color);
        bar.setAttribute('height', height);
    }, ANIMATION_SPEED_MS)
}

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