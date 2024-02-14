export interface Work {
  id: number
  userName: string
  userSrc: string
  userPhoto: string
  title: string
  imgSrc: string
  itemLink: string
  likes: number
  views: number
}

const worksMokcData: Work[] = [
  {
    id: 0,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 1,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 2,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 3,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 4,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 5,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 6,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 7,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 8,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 9,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 10,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 11,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 12,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 13,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 14,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 15,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 16,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 17,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 18,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 19,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 20,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 21,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 22,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 23,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 24,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 25,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 26,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 27,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 28,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 29,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 30,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 31,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 32,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 33,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 34,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 35,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 36,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 37,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 38,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 39,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 40,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 41,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 42,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 43,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 44,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 45,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 46,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 47,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 48,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 49,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 50,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 51,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 52,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 53,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 54,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 55,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 56,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 57,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 58,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 59,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 60,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 61,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 62,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 63,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 64,
    userName: 'Folio Illustration Agency',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/730703/avatars/normal/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
    title: 'Sun Rays',
    imgSrc: 'https://cdn.dribbble.com/userupload/11922543/file/original-77df2660f243e7ac8def3d22cb2a40b8.jpg?resize=1200x1166',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 65,
    userName: 'Roman Klčo',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/15687/avatars/normal/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
    title: 'Back to the Future',
    imgSrc: 'https://cdn.dribbble.com/userupload/12587017/file/original-63848c8cae3b64471660ad2cd409a859.png?resize=1504x1128',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 66,
    userName: 'Purrweb UI/UX Agency Purrweb Purrweb',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879',
    title: 'Tales of The Dragon Landing Page Animation 🎬',
    imgSrc: 'https://cdn.dribbble.com/userupload/12437036/file/original-7b4ffb7f12fd2ced3f958f0c36a7b82d.jpg?crop=0x0-1920x1440&amp;resize=320x240&amp;vertical=center',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 67,
    userName: 'Paperpillar',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1047455/avatars/normal/fd251b6a71360896bee0e87d11d7868f.png?1505553932',
    title: 'Smart Bike App Exploration',
    imgSrc: 'https://cdn.dribbble.com/userupload/12603538/file/original-67dcb53b9a1d6d8fcb4af024dc1747f8.png?resize=2048x1536',
    itemLink: 'https://dribbble.com/shots/23487333-Smart-Bike-App-Exploration',
    likes: 27,
    views: 265
  },
  {
    id: 68,
    userName: 'Jessie Maisonneuve',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/903526/avatars/normal/1eefc4d1f0a4cca22e677f6bd97d2270.jpeg?1695692879',
    title: 'Celestial Willie / Mickey',
    imgSrc: 'https://cdn.dribbble.com/userupload/12600278/file/original-844d73ecbd73460321a31addc5b98094.png?resize=2048x1538',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  },
  {
    id: 69,
    userName: 'Julia Hanke',
    userSrc: 'https://dribbble.com/purrwebui',
    userPhoto: 'https://cdn.dribbble.com/users/1312595/avatars/normal/f46c55d955d621febb32ed7b2268898a.png?1611924691',
    title: 'Fireflies',
    imgSrc: 'https://cdn.dribbble.com/userupload/12596215/file/original-ec84c1c81e6c5a0114b4d7d8eb0948d4.png?resize=1504x1504',
    itemLink: 'https://dribbble.com/shots/23428893-Intruck-Welcome-Icon-Two-Clay',
    likes: 100,
    views: 999
  }
]

export default worksMokcData
