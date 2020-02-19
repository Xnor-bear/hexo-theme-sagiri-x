const apFixed = new APlayer({
  element: document.getElementById('aplayer-fixed'),
  mutex: true,
  theme: '#97dffd',
  order: 'random',
  lrcType: 3,
  fixed: true,
  autoplay: true,
});
$.ajax({
  // 你的歌单id
  url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=29273806',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});
