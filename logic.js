const sortingAlgo = document.getElementById("sortAlgo")

const sort = document.getElementById("sort")
const generateData = document.getElementById("DataSet")

let data = createRandomBars(150);

let sortChoice = "-1"

sortingAlgo.addEventListener("click", (e)=>{
    sortChoice = e.target.attributes[2].value
})

generateData.addEventListener("click", (e)=>{
    index = e.target.attributes[2].value
    switch(index){
        case "0":
            data = createRandomBars(50);
            break;
        case "1":
            break;
        default:
            break;
    }
})

sort.addEventListener("click", function(){
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
            break;
    }
})
