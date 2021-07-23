//Author Ruslan Svetlichnyy Coop_Dev
//https://github.com/coopwork
document.body.onload = function () {
    setTimeout(function() {
      var preloader = document.getElementById('preloader');
      if( !preloader.classList.contains('preloader__done') )
      {
        preloader.classList.add('preloader__done');
      }
    }, 500); //delay, default none or 0, my default settings 500
  }
  // if preloader don't show on display, watching preloader need comment all code in JS or add infinity delay.