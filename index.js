var time = new Date()

var d = time.getDate()
var s = time.getSeconds() * 6
var m = time.getMinutes() * 6 + time.getSeconds() / 60 * 6
var h = time.getHours() % 12 * 30 + time.getMinutes() / 60 * 30

var size = 240

$('.watch').css({
  width: size + 'px',
  height: size * 1.6 + 'px'
})
$('.hand').css({
  width: size + 'px',
  height: size + 'px',
  'margin-top': 0 - size / 2 + 'px'
})

$('.hand-second').css({
  transform: 'rotate(' + s + 'deg)'
})
$('.hand-minute').css({
  transform: 'rotate(' + m + 'deg)'
})
$('.hand-hour').css({
  transform: 'rotate(' + h + 'deg)'
})

setInterval(function () {
  s += 6
  $('.hand-second').css({
    transform: 'rotate(' + s + 'deg)'
  })
}, 1000);

// second hand
setInterval(function () {
  m += 0.3 
  $('.hand-minute').css({
    transform: 'rotate(' + m + 'deg)'
  })
}, 3000);

// hour hand
setInterval(function () {
  h += 0.25
  $('.hand-hour').css({
    transform: 'rotate(' + h + 'deg)'
  })
}, 30000);
