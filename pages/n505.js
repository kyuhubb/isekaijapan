document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 5</h2>"+
		"<a href='index.html?p=n5/goi5' target='_blank'>第５語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #5</a>"+
		"<a href='index.html?p=n5/41' target='_blank'><span class='num'>#41</span>en préparation...</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);