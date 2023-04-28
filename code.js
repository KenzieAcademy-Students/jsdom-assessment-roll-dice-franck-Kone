let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
let button = document.getElementById('roll'), resultDiv = document.getElementById('result')
let graph = document.getElementById('graph');
let btnThousandRoll = document.getElementById('rollThousandTimes');

button.addEventListener('click', pairDice);
btnThousandRoll.addEventListener('click', Roll1000Function);

function rollDie() {

    return Math.floor(Math.random() * 6 + 1)
}

function sumTwoRolledDice(dice1, dice2) {

    return dice1 + dice2
}

function pairDice() {
    let diceResult = sumTwoRolledDice(rollDie(), rollDie())
    results[diceResult] += 1

    while (graph.firstChild) {
        graph.removeChild(graph.firstChild)
    }
    renderGraph()

    resultDiv.textContent = `You Rolled a ${diceResult}!`

    barGraphHeightPairDice()
}

function renderGraph() {
    for (let result = 2; result < results.length; result++) {

        let newResultDiv = document.createElement('div')
        let span = document.createElement('span')

        span.textContent = `You rolled a ${result} : ${results[result]} times`

        newResultDiv.style.marginLeft = '10px'
        newResultDiv.style.padding = '10px'
        newResultDiv.style.background = 'lightgray'
        newResultDiv.style.width = '110px'
        newResultDiv.style.height = '300px'
        newResultDiv.style.fontSize = '15px'
        newResultDiv.append(span)
  
     

        graph.append(newResultDiv)
        graph.style.marginTop = '20px'
        graph.style.display = 'flex'
    }
}

function Roll1000Function() {
    for (let roll = 1; roll <= 1000; roll++) {
        pairDice()
    }
    resultDiv.textContent = 'You Rolled 1000 times!'
}

function barGraphHeightPairDice() {

    let resultMax = Math.max(...results)

    for (let child = 0; child < graph.children.length; child++) {
     
        if (results[child +2] === resultMax) {
            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = "270px"
            barGraph.style.background = "darkred"

            graph.children[child].append(barGraph)
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild)

        } else if (results[child + 2] < resultMax && results[child + 2] >= (resultMax *(4/ 5))){

            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = ((results[child + 2] / resultMax) * 270) + "px"
            barGraph.style.background = "red";

            graph.children[child].append(barGraph);
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild);
        } else if (results[child + 2] < resultMax && results[child + 2] >= (resultMax * (3 / 5))){

            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = ((results[child + 2] / resultMax) * 270) + "px"
            barGraph.style.background = "darkgreen";

            graph.children[child].append(barGraph);
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild);
        } else if (results[child + 2] < resultMax && results[child + 2] >= (resultMax * (2 / 5))) {

            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = ((results[child + 2] / resultMax) * 270) + "px"
            barGraph.style.background = "lightgreen";

            graph.children[child].append(barGraph);
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild);
        } else if (results[child + 2] < resultMax && results[child + 2] >= (resultMax * (1 / 5))) {

            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = ((results[child + 2] / resultMax) * 270) + "px"
            barGraph.style.background = "darkblue";

            graph.children[child].append(barGraph);
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild);
        } else if (results[child + 2] < resultMax && results[child + 2] < (resultMax * (1 / 5))) {

            let barGraph = document.createElement('div')
            barGraph.style.width = '100%'
            barGraph.style.height = ((results[child + 2] / resultMax) * 270) + "px"
            barGraph.style.background = "lightblue";

            graph.children[child].append(barGraph);
            graph.children[child].insertBefore(barGraph, graph.children[child].firstChild);
        }
    }
}