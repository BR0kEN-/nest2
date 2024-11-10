const common = {
  floor: 'url(https://viopol.com.ua/content/images/17/1280x1280l80bc0/ivcroots22326_marsh_wood-18649234950929.webp)',
};

const rooms = {
  bedroom: {
    name: 'Bedroom',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#F5EDDD',
      backwall: '#D8BEA4',
      floor: common.floor,
    },
  },
  bedroom_master: {
    name: 'Master Bedroom',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#E8EAE3',
      backwall: '#A8AF97',
      floor: common.floor,
    },
  },
  office: {
    name: 'Office',
    backgrounds: {
      ceiling: '#F9F9F7',
      sidewall: '#EAEAEA',
      backwall: '#7A7F87',
      floor: common.floor,
    },
  },
};

function positionBackwall() {
  const x = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;

  backwall.style.transform = `translateZ(-${x - 1}px)`;
}

positionBackwall();

window.addEventListener('resize', positionBackwall);

for (const [roomId, roomConfig] of Object.entries(rooms)) {
  const button = document.createElement('button');

  button.id = roomId;
  button.type = 'button';
  button.title = roomConfig.name;
  button.innerText = roomConfig.name;
  button.style.marginRight = '8px';

  button.addEventListener('click', () => {
    document.title = roomConfig.name;
    ceiling.style.background = roomConfig.backgrounds.ceiling;
    backwall.style.background = roomConfig.backgrounds.backwall;
    sidewall_left.style.background = roomConfig.backgrounds.sidewall;
    sidewall_right.style.background = roomConfig.backgrounds.sidewall;
    floor.style.background = roomConfig.backgrounds.floor;
  });

  rooms_switcher.appendChild(button);
  button.click();
}
