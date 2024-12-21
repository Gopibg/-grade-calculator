
const calculate = () => {

    
    let tamil = document.querySelector("#tamil").value;
    let english = document.querySelector("#english").value;
    let maths = document.querySelector("#maths").value;
    let sc = document.querySelector("#sc").value;
    let ss = document.querySelector("#ss").value;
    let grades = "";

   
    let totalgrades =
        parseFloat(tamil) +
        parseFloat(english) +
        parseFloat(maths) +
        parseFloat(sc) +
        parseFloat(ss);

    
    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    
    if (tamil == "" || english == ""|| maths == "" || sc == "" || ss =="" ) {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {

        
        if (percentage >= 39.5) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 500 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Pass. `;
        } else {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 500 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Fail. `;
        }
    }
};