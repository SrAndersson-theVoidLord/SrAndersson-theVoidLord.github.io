function calculateYearsPassed(date) {
    const currentDate = new Date();
    const differenceInMs = currentDate - date;
    const yearsPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365.25));
    return yearsPassed;
  }
  
  const date = new Date("July 24, 1996");
  setInterval(function() {
    const yearsPassed = calculateYearsPassed(date);
    const resultElement = document.getElementById("result");
    const resultElement2 = document.getElementById("result2");
    if(document.title == "Home"){
    resultElement.innerHTML = `${yearsPassed}`;
    resultElement2.innerHTML = `${yearsPassed}`;
  }
  }, 1000);