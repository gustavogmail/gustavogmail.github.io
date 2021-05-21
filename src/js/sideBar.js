var sideBar = document.getElementById("sideBar");

function openSideBar() {
    const style = getComputedStyle(sideBar);

    console.log(style.display)
    
    if(style.display === 'block') {
        sideBar.style.display = 'none';
    } else if(style.display === 'none') {
        sideBar.style.display = 'block';
    }
}