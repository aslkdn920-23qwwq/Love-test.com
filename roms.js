function Love() {
  let name1 = document.querySelector('#name1').value.trim();
  let name2 = document.querySelector('#name2').value.trim();

  if(name1 === "" || name2 === "") {
      document.querySelector("#result").innerText = "Please enter both names!";
      document.querySelector("#result").style.color = "red";
      return;
  }
  
  let lovepercent = Math.floor(Math.random() * 100) + 1;
  let resultText = `${name1} ❤️ ${name2} = ${lovepercent}% Love`;
  
 
  let color = lovepercent > 70 ? "green" : 
              lovepercent > 30 ? "orange" : "red";
  
  document.querySelector("#result").innerText = resultText;
  document.querySelector("#result").style.color = color;
}

document.querySelector('#name2').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      Love();
  }
});
