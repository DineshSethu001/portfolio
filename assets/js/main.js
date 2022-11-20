// toggle or show menu
const showMenu=(toggleId, navId) => {
    const togglee=document.getElementById(toggleId),nav=document.getElementById(navId)

        if(togglee && nav){
            togglee.addEventListener('click', () => {
                nav.classList.toggle('show')

            }); 
        }
}


showMenu('nav_toggle','nav_menu') 

//active & remote active
//QueryselectorAll('.nav_link')=>it represents al class

const navLink=document.querySelectorAll('.nav_links')
navLink.forEach(n => n.classList.remove('active'))
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n => n.addEventListener('click',linkAction))
