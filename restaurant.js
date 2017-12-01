      var foodArray =[];
      function addFoodOne() {
        foodArray.push(document.getElementById('food1').value);
        document.getElementById('food1').value = "";
      }
      function addFoodTwo() {
        foodArray.push(document.getElementById('food2').value);
        document.getElementById('food2').value = "";
      }
      function addFoodThree() {
        foodArray.push(document.getElementById('food3').value);
        document.getElementById('food3').value = "";
      }
      function addFoodFour() {
        foodArray.push(document.getElementById('food4').value);
        document.getElementById('food4').value = "";
      }
      function addFoodFive() {
        foodArray.push(document.getElementById('food5').value);
        document.getElementById('food5').value = "";
      }
      function addFoodSix() {
        foodArray.push(document.getElementById('food6').value);
        document.getElementById('food6').value = "";
      }
      function allDone() {
        var a = JSON.stringify(foodArray);
        localStorage.setItem('list',a);
        location.href="restaurant2.html";
      }
      function showFood() {
        var b = JSON.parse(localStorage.getItem('list'));
        document.getElementById('showAll').innerHTML = b[1];
      }
