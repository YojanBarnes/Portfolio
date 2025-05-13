const submitBtn = document.getElementById("submitBtn");

//Burger Icon Toggle
function toggle() {
    const items = document.querySelectorAll('.nav-links');
    const navDiv = document.querySelectorAll('.nav-div');

    items.forEach(item => {
        item.style.display = item.style.display === 'none' ? 'flex' : 'none';
        
    });
}
