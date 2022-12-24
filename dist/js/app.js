// Events Listener on submit calculate button
document.getElementById("loan").addEventListener("submit", computeResults);

function computeResults(e){
    // Prevents page refresh.
    e.preventDefault();
    //Get Inputs

    const UIamount = document.getElementById("amount").value;
    const UIrate = document.getElementById("rate").value;
    const UIyear = document.getElementById("year").value

    console.log(UIamount, UIrate, UIyear)  
}