var images = document.getElementsByClassName('img-wrapper');

for (var i = 0; i < images.length; i++) {
  images[i].onmouseenter = showImgInfo;
  images[i].onmouseleave = hideImgInfo;
}
function showImgInfo() {
    this.getElementsByTagName('div')[0].style.visibility = 'visible';
    this.getElementsByClassName('plus')[0].style.visibility = 'visible';
  }
function hideImgInfo() {
    this.getElementsByTagName('div')[0].style.visibility = 'hidden';
    this.getElementsByClassName('plus')[0].style.visibility = 'hidden';
  }
