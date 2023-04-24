let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

// Create a function called rollDie() which returns a random number between 1 - 6. Then make another function which rolls two dice and adds together the sum.

// 💡 Hint: The second function can call your * rollDie() * function! If you call it twice, you can then add the two numbers together to get the sum.

function rollDie() {
    console.log(Math.floor(Math.random() * 6 + 1))
    return Math.floor(Math.random()*6 + 1)
}
 
function sumTwoRolledDice(dice1, dice2) {
    console.log(dice1 + dice2, dice1,dice2)
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

button.addEventListener('click', function () {
    let diceResult = sumTwoRolledDice(rollDie(), rollDie())
    results[diceResult] += 1
   
    renderGraph()

    resultDiv.textContent = `You Rolled a ${diceResult}!`
    
 

} )

// Then render each value of the results array inside of the "graph" div.

// To do this, create a new function renderGraph().Have that function loop through the results array.For every value create a div and add it to the graph, adding the number into the div.
function renderGraph() {
    for( let result = 2; result < results.length; result++){
        let newResultDiv = document.createElement('div')
        newResultDiv.textContent = `You rolled a ${result} : ${results[result]} times`
        newResultDiv.style.marginLeft= '10px'
        newResultDiv.style.padding= '10px'
        newResultDiv.style.background= 'lightgray'
        newResultDiv.style.width= '110px'
        newResultDiv.style.height= '30px'
        newResultDiv.style.fontSize = '15px'

        graph.append(newResultDiv)
        graph.style.marginTop= '20px'
        graph.style.display='flex'
    }
}


