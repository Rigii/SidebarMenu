let sidebar = document.getElementById('sidebar');
let initBut = document.getElementsByClassName('initial_but')[0];
let sidebarWrap = document.getElementsByClassName('sidebar_wrapper')[0];
/*
function initMobileMenu() {
    initBut.addEventListener('click', (e) => {
         if (sidebarWrap.style.left !== '0px') {
         sidebarWrap.style.cssText = 'left: 0; transition: 0.5s';
       } else { sidebarWrap.style.cssText = 'left: -100%; transition: 0.5s' }
    });
};
*/

function changeMobileMenuPages() {
    sidebar.addEventListener('click', (e) => {
        if (e.target.className.indexOf('button') !== -1) {
            let but = e.target;
            let step = 0;

            if (but.className.indexOf('next') !== -1) {
                
                let selectedList = but.nextSibling.nextSibling;
                let prevList = but.parentNode.parentNode;
                prevList.style.cssText = prevList === sidebar ? 'right: 50%; visibility: hidden' :
                'z-index: 0; right: 0%; transition: 1s; visibility: hidden';
                selectedList.style.cssText = 'z-index: 1; visibility: visible; right: -50%; transition: 0.5s';
            }
            if (e.target.className.indexOf('back') !== -1) {
                let selectedList = but.parentNode.parentNode;
                let prevList = selectedList.parentNode.parentNode;

                selectedList.style.cssText = 'right: -100%; transition: 0.7s; ';
                prevList.style.cssText = prevList === sidebar ? 'z-index: 1; right: 0%; transition: 0.5s; visibility: visible' :
                 'z-index: 1; right: -50%; transition: 0.5s; visibility: visible';
                
                console.log(prevList.parentNode.parentNode)
            }
        }
    })
};
changeMobileMenuPages()
