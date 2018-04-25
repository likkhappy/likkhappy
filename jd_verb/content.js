let verbBtn = document.getElementById('clockLink');

verbFun = ()=> {
  verbBtn.children[0].click();
}

if (verbBtn) {
  setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let ms = date.getSeconds();
    if ((hours == 21 || hours==8) && mins ==40 && ms==20) {
      verbFun();
    }
  },1000)

}

