/*
 * readBySoftalk
 * 
 * Meryで選択した文章をSoftalkで読み上げるマクロ
 * 
 */

// SofTalk.exeのフルパスを指定
const pathToSofTalk = "D://softalk//softalk.exe";

// エディタ上で文字列が選択されていない場合は全文を選択する
if (Document.Selection.IsEmpty){
  document.selection.StartOfLine(false, mePosLogical);
  document.selection.EndOfLine(true, mePosLogical);
}

let selectedText = Document.Selection.Text;

/*
 * SofTalk引数リファレンス
 * SofTalk > ヘルプ > 引数指定
 * 
 * Meryのマクロでは`と${}を用いた文字列展開ができなかった(2021/09/05)
 */
let shell = new ActiveXObject('WScript.shell');
const startCommand = pathToSofTalk + " /W:" + selectedText;
const endCommand = pathToSofTalk + " /close2";
shell.Run(startCommand);
shell.Run(endCommand);
