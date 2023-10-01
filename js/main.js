window.onload = function () {
    loading();
    menuAction();
    goTop();
    top_click();


}

function top_click() {
    var top_btn = document.querySelector("#scroll-top");
    top_btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
}

function menuAction() {
    const menu = document.getElementById('menu');
    const action = document.getElementById('action');
    menu.addEventListener('click', () => {
        handelMenu();
    });
}
function handelMenu() {
    menu.classList.toggle('is-active');
    action.classList.toggle('is-active');
}


function loading() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#loading-overlay").style.display = "none";
}
function goTop() {
    var top_btn = document.querySelector("#scroll-top");
    document.onscroll = function () {
        if (document.documentElement.scrollTop > 100)
            top_btn.classList.add('show');
        else
            top_btn.classList.remove('show');
    }
}