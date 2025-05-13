const decreaseBtn = document.getElementById("decreasebtn");
const resetBtn = document.getElementById("resetbtn");
const increastBtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


increastBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}


decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}