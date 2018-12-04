document.addEventListener("DOMContentLoaded", function() {
    var menuItem = document.querySelector('.menu-item a');
    console.log(menuItem);

    menuItem.addEventListener('click', function() {
        var submenu = document.querySelector('.submenu');
        submenu.classList.toggle('active');
    });
});

function fireOnReady() {
  document
    .getElementById('video-html')
    .addEventListener('ended', cvdVideoEndHandler, false);

  var countDown = document.getElementById('video-countdown');
  countDown.style.display = 'none';

  var seconds = 10;
  var secondsPast = 0;
  function cvdCountDown() {
    if (secondsPast >= seconds) {
      countDown.style.display = 'none';
      document.getElementById('video-html').play();
      secondsPast = 0;
    } else {
      countDown.innerText = seconds - secondsPast;
      setTimeout(cvdCountDown, 2000);
      secondsPast++;
    }
  }

  function cvdVideoEndHandler(e) {
    secondsPast = 0;
    countDown.style.display = 'block';
    cvdCountDown();
  }
}

if (document.readyState === 'complete') {
  fireOnReady();
} else {
  document.addEventListener('DOMContentLoaded', fireOnReady);
}
