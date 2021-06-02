const sortingAlgo = document.getElementById("sortAlgo")
const barsRange = document.getElementById("barsRange")

const sort = document.getElementById("sort")
const generateData = document.getElementById("DataSet")

let data = createRandomBars(50);

let sortChoice = "-1"

sortingAlgo.addEventListener("click", (e)=>{
    sortChoice = e.target.attributes[2].value
    console.log("Sorting meny")
    console.log(sortChoice)
})

function setData(length){
    data = createRandomBars(length)
}

// generateData.addEventListener("click", (e)=>{
//     index = e.target.attributes[2].value
//     switch(index){
//         case "0":
//             data = createRandomBars(barsRange.value);
//             break;
//         case "1":
//             break;
//         default:
//             break;
//     }
// })

sort.addEventListener("click", function(){
    console.log(barsRange.value)
    ANIMATION_SPEED_MS=200
    console.log("SORT PRESSED meny")
    console.log(sortChoice)

    switch(sortChoice){
        case "0":
            bubbleSort(data.heigth, data.bars)
            break;
        case "1":
            selectionSortAnimation(data.heigth, data.bars);
            break;
        case "1":
            break;
        default:
            console.log("SORTING DEFUALT")
            break;
    }
})
