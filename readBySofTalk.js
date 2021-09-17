/*
 * readBySoftalk
 * 
 * Meryで選択した文章をSoftalkで読み上げるマクロ
 * 
 */

// SofTalk.exeのフルパスを指定
const pathToSofTalk = "D://softalk//softalk.exe";

/* エディタ上で文字列を選択していないときの挙動
 * true : カーソルのある行のみ読む
 * false : 文章全体を読む
 */
let readLineWithCursor = false;

if (Document.Selection.IsEmpty) {
  if (readLineWithCursor) {
    document.selection.StartOfLine(false);
    document.selection.EndOfLine(true);
  } else {
    document.selection.StartOfDocument(false);
    document.selection.EndOfDocument(true);
  }
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
