export default {
  navItems: [
    {
      name: 'HOME',
      url: '/home'
    },
    {
      name: 'DETAIL',
      url: '/detail'
    },
    {
      name: 'PUBLICATIONS',
      url: '/publications'
    },
    {
      name: 'WORKS',
      url: '/works'
    },
    {
      name: 'VALORANT',
      url: '/valorant',
      children: [
        {
          name: 'Introduction',
          url: '/valorant'
        },
        {
          name: 'Study',
          url: '/valorant/study'
        }
      ]
    }
  ]
}
