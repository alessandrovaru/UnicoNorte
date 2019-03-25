console.log('hola');

function showMenu() {
  let menu = document.getElementById('menu')
  if (menu.getAttribute("style")==null) {
    menu.style.marginLeft = "0px"
  }
  else {
    menu.removeAttribute("style")
  }
}
