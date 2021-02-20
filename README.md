# prompt.js
## install
JQuery
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```
Google Fonts(Suggest)
```
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
```
prompt.js
```
<script src="https://erichsia7.github.io/prompt.js/prompt.min.js"></script>
```
## use
1.script
```
$('body').prompt({'message':'message','time':time,'animate':'slide'});
```
animate: slide(default),fade,show
## example
```
<meta charset="UTF-8">
<title>Demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
<style>
body {
background:url(https://source.unsplash.com/random);
}
</style>
<body>
<a href="javascript:test('slide')">slide</a>
  <a href="javascript:test('fade')">fade</a>
  <a href="javascript:test('show')">show</a>
  <script src="https://erichsia7.github.io/prompt.js/prompt.min.js"></script>
<script>
function test(an) {
$('body').prompt({'message':'message(' + an + ')','time':1800,'animate':an});
}
</script>
</body>
```
[Demo](https://erichsia7.github.io/prompt.js/demo.html#)
## download
[prompt.js](https://github.com/EricHsia7/prompt.js/raw/main/prompt.js)
