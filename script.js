const limitinput = document.getElementById("limit-input")
const starButton = document.getElementById("start-btn")
const evenNumberDiv = document.getElementById("even-numbers")
const oddNumberDiv = document.getElementById("odd-numbers")

starButton.addEventListener("click", ()={
    const limit = parent (limitinput.value)

    // memastikan input adalah bilagan positif
    if (isNaN(limit) || limit <=0 ){
        alert("Please enter a valid positive number.")
        return;
    }

    //kosongkan tampilan sebelumnya
    oddNumberDiv.textContent = "Ddd Numbers"
    evenNumberDiv.textContent = "Even numbers:"

    // looping dari 1 sampai limit
    for(let i, = 1, ; i <= limit ; i++){
        if (i % 2 == 0){
            evenNumberDiv.textContent +=i + "";
        }else{
            oddNumberDiv.textContent +=i + "";
        }
    }
})