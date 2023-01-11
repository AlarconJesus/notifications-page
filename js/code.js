const mark = document.getElementById('mark-viewed');
const notiNumber = document.getElementById('noti-number');

mark.addEventListener('click', markAsViewed);

function markAsViewed(){
  const notifications = document.querySelectorAll('.not-viewed');

  for(let i = 0; i<notifications.length; i++){
    let noti = notifications[i];

      noti.classList.remove('not-viewed');
  }

  notiNumber.innerHTML = '0';

}
