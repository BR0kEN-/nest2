const common = {
  floor: 'url(https://viopol.com.ua/content/images/17/1280x1280l80bc0/ivcroots22326_marsh_wood-18649234950929.webp)',
};

const rooms = [
  {
    name: 'Bedroom',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#F5EDDD',
      backwall: '#D8BEA4',
      floor: common.floor,
    },
  },
  {
    name: 'Master Bedroom',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#E8EAE3',
      backwall: '#A8AF97',
      floor: common.floor,
    },
  },
  {
    name: 'Office',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#EAEAEA',
      backwall: '#7A7F87',
      floor: common.floor,
    },
  },
];

function positionBackwall() {
  const x = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;

  backwall.style.transform = `translateZ(-${x - 1}px)`;
}

/**
 * @param {HTMLElement} element
 * @param {string} value
 */
function setBackground(element, value) {
  if (value.startsWith('url(')) {
    element.style.backgroundColor = '';
    element.style.backgroundImage = value;
  } else {
    element.style.backgroundImage = '';
    element.style.backgroundColor = value;
  }
}

positionBackwall();

window.addEventListener('resize', positionBackwall);

for (const room of rooms) {
  const button = document.createElement('button');

  button.type = 'button';
  button.title = room.name;
  button.innerText = room.name;
  button.style.marginRight = '8px';

  button.addEventListener('click', () => {
    document.title = room.name;

    setBackground(ceiling, room.backgrounds.ceiling);
    setBackground(backwall, room.backgrounds.backwall);
    setBackground(sidewall_left, room.backgrounds.sidewall);
    setBackground(sidewall_right, room.backgrounds.sidewall);
    setBackground(floor, room.backgrounds.floor);

    for (const switcher of rooms_switcher.children) {
      switcher.disabled = switcher === button;
    }
  });

  rooms_switcher.appendChild(button);
  button.click();
}
