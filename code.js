let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

// Create a function called rollDie() which returns a random number between 1 - 6. Then make another function which rolls two dice and adds together the sum.

// 💡 Hint: The second function can call your * rollDie() * function! If you call it twice, you can then add the two numbers together to get the sum.

function rollDie() {

    return Math.floor(Math.random()*6 + 1)
}
 
function sumTwoRolledDice(dice1, dice2) {

    return dice1 + dice2

}
// sumTwoRolledDice(rollDie(), rollDie())

// In the HTML, there is already a button with the id roll and a div with the id result.Using JavaScript, get both of those items by id and assign them to variables.

let button = document.getElementById('roll'), resultDiv = document.getElementById('result')

// Create an event listener on the button for the "click" event.Make a callback function and pass it into the click event.

// In this callback function, call your rollDie() method and store the number in a variable.

// Output a sentence stating what number was rolled to the "result" div.

// Your app should now be working like the app above!
let graph = document.getElementById('graph')

button.addEventListener('click', pairDice)

function pairDice() {
    let diceResult = sumTwoRolledDice(rollDie(), rollDie())
    results[diceResult] += 1

    //to remove all children of graph node before displaying the updated graph
    while (graph.firstChild) {
        graph.removeChild(graph.firstChild)
    }
    renderGraph()

    resultDiv.textContent = `You Rolled a ${diceResult}!`
}

// Then render each value of the results array inside of the "graph" div.

// To do this, create a new function renderGraph().Have that function loop through the results array.For every value create a div and add it to the graph, adding the number into the div.
function renderGraph() {
    for( let result = 2; result < results.length; result++){
        let newResultDiv = document.createElement('div')
        let barGraph = document.createElement('div')

        //style barGraph 
        barGraph.style.width = '100%'
        // barGraph.style.height = '90%'
        // barGraph.style.backgroundColor = 'blue'
        let span = document.createElement('span')

        span.textContent = `You rolled a ${result} : ${results[result]} times`
        newResultDiv.append(span)
        // newResultDiv.textContent = `You rolled a ${result} : ${results[result]} times`

        //style newResultDiv
        newResultDiv.style.marginLeft= '10px'
        newResultDiv.style.padding= '10px'
        newResultDiv.style.background= 'lightgray'
        newResultDiv.style.width= '110px'
        newResultDiv.style.height= '300px'
        newResultDiv.style.fontSize = '15px'

        newResultDiv.append(barGraph)
        newResultDiv.insertBefore(barGraph, span)
        graph.append(newResultDiv)
        // style graph
        graph.style.marginTop= '20px'
        graph.style.display='flex'
    }  
}

// Next, add another button to your HTML and give it an id.This button should Roll 1000 pairs of dice!

// Create the event listener and callback just like the other button.Have your callback run a loop 1000 times, rolling a pair of dice and recording the result into the results array each time.

let btnThousandRoll = document.getElementById('rollThousandTimes')
btnThousandRoll.addEventListener('click', Roll1000Function)

function Roll1000Function(){
    for (let roll = 1; roll <= 1000; roll++ ) {
      pairDice()
    }
    resultDiv.textContent = `You Rolled 1000 times!`

}
