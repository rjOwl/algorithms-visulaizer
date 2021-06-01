const container = document.getElementById('container');
let barsHeightArr = [];
let bars = [];

function createRandomBars(length) {
    let height = 0;
    let x = 0;
    for (let i = 0; i < length; i++) {
        height = Math.floor(Math.random() * 300) + 10;
        barsHeightArr.push(height);
        var svgns = "http://www.w3.org/2000/svg";
        const newRect = document.createElementNS(svgns, 'rect')
        newRect.setAttribute("width", 10)
        newRect.setAttribute("height", height)
        newRect.setAttribute("x", i * 12)
        newRect.setAttribute("class", 'bar')
        newRect.setAttribute("style", `fill:green;`)
        bars.push(newRect)
    }
    console.log(barsHeightArr);
    return bars;
}
function renderBars(draws) {
    container.innerText = '';
    for (let i = 0; i < draws.length; i++) {
        container.appendChild(draws[i])
    }
}
function bubbleSort(heightsArr, bars) {
    // console.log(heightsArr);
    let cpArr = [...heightsArr]
    for (let i = 0; i < heightsArr.length - 1; i++) {
        for (let j = 0; j < heightsArr.length - 1; j++) {
            if (heightsArr[j] > heightsArr[j + 1]) {
                updateStyle(bars[j], heightsArr[j], 'red')
                updateStyle(bars[j + 1], heightsArr[j + 1], 'red')
                // [heightsArr[j], heightsArr[j + 1]] = [heightsArr[j + 1], heightsArr[j]];
                var temp = heightsArr[j];
                heightsArr[j] = heightsArr[j + 1]
                heightsArr[j + 1] = temp
                updateStyle(bars[j], heightsArr[j], 'red')
                updateStyle(bars[j + 1], heightsArr[j + 1], 'red')
            }
            updateStyle(bars[j], heightsArr[j], 'green')
            updateStyle(bars[j + 1], heightsArr[j + 1], 'green')
        }
    }
    // console.log(heightsArr)
}
let delay = 1
function updateStyle(bar, height, color) {
    delay += 10;
    setTimeout(() => {
        bar.setAttribute('style', `fill:${color};`);
        bar.setAttribute('height', height);
    }, delay)
}
renderBars(createRandomBars(100));
setTimeout(() => bubbleSort(barsHeightArr, bars), 1000)

