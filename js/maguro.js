
const depth = document.getElementById('depth');
const wai = document.getElementById('wai');
//スクロールをトリガーにしたイベント
window.addEventListener('scroll', () => {
	//高さを取得
	let scrollTop = Math.round(document.scrollingElement.scrollTop);
	let msg = "";
	var text_array = ['＜わいはアンコウちゃんやで！よろしくな！','＜わいの出番じゃないな','＜わいがこの深海を照らしてやるで!','＜うわぁ！酸素うっす！た、たすけてくれぇ〜','＜これが噂の無光層やな、全く光が届かんねんで','＜ここが深海や！地球の表面積の半分ぐらいを占めてるで！','＜6000m超えてもうたな・・・この深さは海全体でも２％だけやで'];
	var depth_array = [-10,0,2,6,10,30,60,100];
	
	var scroll_100 = scrollTop / 100;
	for(var i=0;i<7;i++){
		//depth_arrayのi番目<深さの１００分の１<=depth_arrayのi+1番目の時、それにあったセリフを格納
		//例 1001mの場合 : 10 < 10.01 < 30 に適するので、これが噂の無光層　の文字列が適用される。
		if(depth_array[i] < scroll_100 && scroll_100 <= depth_array[i+1]){
			msg = text_array[i];
			break;
		}
	}
	depth.textContent = 'depth:' + scrollTop + 'm';
	wai.textContent = msg;
}, false);
