// Events Listener on submit calculate button
document.getElementById("loan").addEventListener("submit", computeResults);

function computeResults(e){
    // Prevents page refresh.
    e.preventDefault();
    //Get Inputs

    const UIamount = document.getElementById("amount").value;
    const UIrate = document.getElementById("rate").value;
    const UIyear = document.getElementById("year").value

    //Calculate
    const principal = parseFloat(UIamount);
    const calculateInterest = parseFloat(UIrate) / 100 / 12;
    const calculatePayment = parseFloat(UIyear) * 12;

    //compute monthly payment 
    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    //compute interest
     const totalInterest = (monthly * calculatePayment - principal).toFixed(2);

     //compute total payment
     const totalPayment = (monthly * calculatePayment).toFixed(2);

     //show result 
     document.getElementById("mp").innerHTML = "N" + monthlyPayment;

     document.getElementById("ti").innerHTML = "%" + totalInterest;

     document.getElementById("tp").innerHTML = "N" + totalPayment;

}