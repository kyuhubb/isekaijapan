document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
	"<h1>Résultats pour : "+decodeURI($_GET('q')).toLowerCase()+"</h1>"+
	"</div>"+
"</div>";

var res = "";
var q = decodeURI($_GET('q'));
q = q.toLowerCase();
q = q.replace(/\s/g, '');
switch(q){
	case 'は':case'wa':case'ha':
	res += "<a href='index.html?p=n5/1'><span class='numw red red'>N5</span>は　｜　wa</a>";
	break

	case'です':case'desu':case'da':case'だ':
	res += "<a href='index.html?p=n5/2'><span class='numw red'>N5</span>です　｜　desu</a>";
	res += "<a href='index.html?p=n5/18'><span class='numw red'>N5</span>だろう　｜　darou</a>";
	break

	case'を':case'wo':case'o':
	res += "<a href='index.html?p=n5/3'><span class='numw red'>N5</span>を　｜　wo</a>";
	break

	case'か':case'ka':
	res += "<a href='index.html?p=n5/4'><span class='numw red'>N5</span>か　｜　ka</a>";
	res += "<a href='index.html?p=n5/27'><span class='numw red'>N5</span>か～か　｜　ka～ka</a>";
	res += "<a href='index.html?p=n5/28'><span class='numw red'>N5</span>から　｜　kara</a>";
	res += "<a href='index.html?p=n5/29'><span class='numw red'>N5</span>かた　｜　kata</a>";
	break

	case'も':case'mo':
	res += "<a href='index.html?p=n5/5'><span class='numw red'>N5</span>も　｜　mo</a>";
	res += "<a href='index.html?p=n5/13'><span class='numw red'>N5</span>でも　｜　demo</a>";
	res += "<a href='index.html?p=n5/26'><span class='numw red'>N5</span>いつも　｜　istumo</a>";
	res += "<a href='index.html?p=n5/34'><span class='numw red'>N5</span>もう　｜　mou</a>";
	break

	case'で':case'de':
	res += "<a href='index.html?p=n5/6'><span class='numw red'>N5</span>で　｜　de</a>";
	res += "<a href='index.html?p=n5/13'><span class='numw red'>N5</span>でも　｜　demo</a>";
	res += "<a href='index.html?p=n5/17'><span class='numw red'>N5</span>でしょう　｜　deshou</a>";
	res += "<a href='index.html?p=n5/33'><span class='numw red'>N5</span>まで　｜　made</a>";
	break

	case'ga':case'が':
	res += "<a href='index.html?p=n5/7'><span class='numw red'>N5</span>が　｜　ga</a>";
	res += "<a href='index.html?p=n5/20'><span class='numw red'>N5</span>があります　｜　ga arimasu</a>";
	res += "<a href='index.html?p=n5/22'><span class='numw red'>N5</span>がいます　｜　ga imasu</a>";
	res += "<a href='index.html?p=n5/21'><span class='numw red'>N5</span>がほしい　｜　ga hoshii</a>";
	break

	case'no':case'の':
	res += "<a href='index.html?p=n5/8'><span class='numw red'>N5</span>の　｜　no</a>";
	break

	case'ni':case'に':
	res += "<a href='index.html?p=n5/9'><span class='numw red'>N5</span>に　｜　ni</a>";
	res += "<a href='index.html?p=n5/25'><span class='numw red'>N5</span>一緒に　｜　issho ni</a>";
	res += "<a href='index.html?p=n5/35'><span class='numw red'>N5</span>前に　｜　mae ni</a>";
	break

	case'to':case'と':
	res += "<a href='index.html?p=n5/10'><span class='numw red'>N5</span>と　｜　to</a>";
	break

	case'he':case'へ':
	res += "<a href='index.html?p=n5/11'><span class='numw red'>N5</span>へ　｜　he</a>";
	break

	case'だけ':case'dake':
	res += "<a href='index.html?p=n5/12'><span class='numw red'>N5</span>だけ　｜　dake</a>";
	break

	case'でも':case'demo':
	res += "<a href='index.html?p=n5/13'><span class='numw red'>N5</span>でも　｜　demo</a>";
	break

	case'どんな':case'donna':
	res += "<a href='index.html?p=n5/14'><span class='numw red'>N5</span>どんな　｜　donna</a>";
	break

	case'どうして':case'doushite':
	res += "<a href='index.html?p=n5/15'><span class='numw red'>N5</span>どうして　｜　doushite</a>";
	break

	case'どう':case'dou':
	res += "<a href='index.html?p=n5/15'><span class='numw red'>N5</span>どうして　｜　doushite</a>";
	res += "<a href='index.html?p=n5/16'><span class='numw red'>N5</span>どうやって　｜　dou yatte</a>";
	break

	case'どうやって':case'douyatte':
	res += "<a href='index.html?p=n5/16'><span class='numw red'>N5</span>どうやって　｜　dou yatte</a>";
	break

	case'でしょう':case'deshou':
	res += "<a href='index.html?p=n5/17'><span class='numw red'>N5</span>でしょう　｜　deshou</a>";
	break

	case'だろう':case'darou':
	res += "<a href='index.html?p=n5/18'><span class='numw red'>N5</span>だろう　｜　darou</a>";
	break

	case'ちゃいけない':case'じゃいけない':case'chaikenai':case'jaikenai':case'ちゃいけません':case'じゃいけません':case'chaikemasen':case'jaikemasen':case'ikenai':case'ikemasen':
	res += "<a href='index.html?p=n5/19'><span class='numw red'>N5</span>ちゃいけない・じゃいけない　<br class='br'><span class='tate'>｜</span>　cha ikenai・ja ikenai</a>";
	break

	case'があります':case'がある':case'gaarimasu':case'gaaru':case'aru':case'ある':
	res += "<a href='index.html?p=n5/20'><span class='numw red'>N5</span>があります　｜　ga arimasu</a>";
	break

	case'がほしい':case'が欲しい':case'gahoshii':case'欲しい':case'hoshii':case'ほしい':
	res += "<a href='index.html?p=n5/21'><span class='numw red'>N5</span>がほしい　｜　ga hoshii</a>";
	break

	case'がいます':case'gaimasu':case'imasu':case'がいる':case'gairu':case'iru':
	res += "<a href='index.html?p=n5/22'><span class='numw red'>N5</span>がいます　｜　ga imasu</a>";
	break

	case'hougaii':case'ほうがいい':case'方が良い':case'方がいい':case'ほうが良い':
	res += "<a href='index.html?p=n5/23'><span class='numw red'>N5</span>ほうがいい　｜　hou ga ii</a>";
	break

	case'いちばん':case'ichiban':case'一番':
	res += "<a href='index.html?p=n5/24'><span class='numw red'>N5</span>一番　｜　ichiban</a>";
	break	

	case'isshoni':case'一緒に':case'いっしょに':case'issho':case'いっしょ':
	res += "<a href='index.html?p=n5/25'><span class='numw red'>N5</span>一緒に　｜　issho ni</a>";
	break

	case'itsumo':case'いつも':case'何時も':
	res += "<a href='index.html?p=n5/26'><span class='numw red'>N5</span>いつも　｜　istumo</a>";
	break

	case'か～か':case'かか':case'kaka':
	res += "<a href='index.html?p=n5/27'><span class='numw red'>N5</span>か～か　｜　ka～ka</a>";
	break

	case'から':case'kara':
	res += "<a href='index.html?p=n5/28'><span class='numw red'>N5</span>から　｜　kara</a>";
	break

	case'かた':case'kata':case'方':
	res += "<a href='index.html?p=n5/29'><span class='numw red'>N5</span>かた　｜　kata</a>";
	break

	case'けど':case'kedo':
	res += "<a href='index.html?p=n5/30'><span class='numw red'>N5</span>けど　｜　kedo</a>";
	res += "<a href='index.html?p=n5/31'><span class='numw red'>N5</span>けれども　｜　keredomo</a>";
	break

	case'けれど':case'keredo':case'けれども':case'keredomo':
	res += "<a href='index.html?p=n5/31'><span class='numw red'>N5</span>けれども　｜　keredomo</a>";
	break

	case'まだ':case'mada':case'未だ':
	res += "<a href='index.html?p=n5/32'><span class='numw red'>N5</span>まだ　｜　mada</a>";
	break

	case'まで':case'made':case'迄':
	res += "<a href='index.html?p=n5/33'><span class='numw red'>N5</span>まで　｜　made</a>";
	break

	case'もう':case'mou':
	res += "<a href='index.html?p=n5/34'><span class='numw red'>N5</span>もう　｜　mou</a>";
	break

	case'前に':case'まえに':case'まえ':case'前':case'mae':case'maeni':
	res += "<a href='index.html?p=n5/35'><span class='numw red'>N5</span>前に　｜　mae ni</a>";
	break

	case'ませんか':case'masenka':
	res += "<a href='index.html?p=n5/36'><span class='numw red'>N5</span>ませんか　｜　masen ka</a>";
	break

	case'ましょう':case'mashou':case'ましょ':case'masho':
	res += "<a href='index.html?p=n5/37'><span class='numw red'>N5</span>ましょう　｜　mashou</a>";
	res += "<a href='index.html?p=n5/38'><span class='numw red'>N5</span>ましょうか　｜　mashou ka</a>";
	break

	case'ましょうか':case'mashouka':case'ましょか':case'mashoka':
	res += "<a href='index.html?p=n5/38'><span class='numw red'>N5</span>ましょうか　｜　mashou ka</a>";
	break

	case'なあ':case'な':case'naa':case'na':
	res += "<a href='index.html?p=n5/39'><span class='numw red'>N5</span>なあ　｜　naa</a>";
	break

	case'ないで':case'ない':case'nai':case'naide':
	res += "<a href='index.html?p=n5/40'><span class='numw red'>N5</span>ないで　｜　naide</a>";
	break

	default :
	res = "<h3>aucun resultat</h3>"; 
}

res += "<br><br><br>";
document.getElementById('chapbox').innerHTML += res;