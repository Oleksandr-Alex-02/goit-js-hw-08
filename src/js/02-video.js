import Player from '@vimeo/player';
import throttle from '../../node_modules/lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(assaaes, 1000));

function assaaes({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
