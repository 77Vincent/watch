function prefix0 (number, length) {
  var diff = length - String(number).length
  return Array(diff + 1).join(0) + number
}

function getTime ()  {
  var time = new Date()
  var s = time.getSeconds()
  var m = time.getMinutes()
  var h = time.getHours()
  var ms = time.getMilliseconds().toString()[0]

  return {
    whole: prefix0(h,2) + ':' + prefix0(m,2) + ':' + prefix0(s,2) + ':' + ms,
    ms: ms,
    s: s,
    m: m,
    h: h
  }
}

setInterval(() => {
  $('#time').html(getTime().whole)
}, 100);

setInterval(() => {
  var s = getTime().s + '.' + getTime().ms

  $('.hand-second').css({
    transform: 'rotate(' + s * 6 + 'deg)'
  })
}, 200);