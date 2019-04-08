let sidebar = document.getElementById('sidebar');
let initBut = document.getElementsByClassName('initial_but')[0];
let sidebarWrap = document.getElementsByClassName('sidebar_wrapper')[0];
function initMobileMenu() {
    initBut.addEventListener('click', (e) => {
        if (sidebarWrap.style.left !== '0px') {
            sidebarWrap.style.cssText = 'left: 0; transition: 0.5s';
        } else { sidebarWrap.style.cssText = 'left: -100%; transition: 0.5s' }
    });
};

function changeMobileMenuPages() {
    sidebar.addEventListener('click', (e) => {
        if (e.target.className.indexOf('button') !== -1) {
            let but = e.target;
            if (but.className.indexOf('next') !== -1) {
                let selectedList = but.nextSibling.nextSibling;
                selectedList.style.cssText = ' display: flex; right: 0; transition: 0.5s';
            }
            if (e.target.className.indexOf('back') !== -1) {
                but.parentNode.parentNode.style.cssText = 'right: -100%; transition: 0.5s';
            }
        }
    })
};
changeMobileMenuPages()
