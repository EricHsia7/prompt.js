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
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://erichsia7.github.io/prompt.js/prompt.min.js"></script>
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">

<style>
body {
background:url(https://source.unsplash.com/random);
}
</style>
<a href="javascript:test()">pp</a>
<script>
function test() {
$('body').prompt({'message':'message','time':1800,'animate':'slide'});
}
</script>
```
[Demo](https://erichsia7.github.io/addtohome.js/demo.html#)

![example](https://erichsia7.github.io/addtohome.js/obJxVL3ZAOjwX3l19RKwJ2Xcx0ypBbEh.jpeg)
## download
[default_explanation.html](https://github.com/EricHsia7/addtohome.js/raw/main/default_explanation.html)

[addtohome.js](https://github.com/EricHsia7/addtohome.js/raw/main/addtohome.js)
