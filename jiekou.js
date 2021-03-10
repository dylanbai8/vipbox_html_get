
function jiekou(){

document.writeln("<div>");
document.writeln("<form method=\'post\' action=\'\'>");
document.writeln("<div style=\'vertical-align:top;\'>");
document.writeln("<!-- 视频解析接口 -->");
document.writeln("<select name=\'jk\' id=\'jk\' onchange=\'onPlay()\'>");


document.writeln("<option value=\'https://z1.m1907.cn?jx=\' >不能播点我</option>");
// document.writeln("		<option value=\'xxx\' >切换线路01</option>");


document.writeln("		<option value=\'https://okjx.cc/?url=\' >切换线路01</option>");
document.writeln("		<option value=\'https://jx.618g.com/?url=\' >切换线路02</option>");
document.writeln("		<option value=\'http://jqaaa.com/jx.php?url=\' >切换线路03</option>");
document.writeln("		<option value=\'http://api.myzch.cn/?url=\' >切换线路04</option>");
document.writeln("		<option value=\'https://www.nxflv.com/?url=\' >切换线路05</option>");
document.writeln("		<option value=\'http://api.baiyug.vip/index.php?url=\' >切换线路06</option>");


document.writeln("</select>");
document.writeln("<!-- 左上角 选择下拉框+提示框 -->");
document.writeln("<input type=\'button\' onclick=window.open(\'http://vipbox.ml\') value=\'免责声明\'>");
document.writeln("</div>");
document.writeln("</form>");
document.writeln("</div>");
document.writeln("<!-- 视频播放框架 -->");
document.writeln("<iframe src=\'\' name=\'play\' id=\'play\' width=\'100%\' height=\'90%\' frameborder=\'0\' marginheight=\'0\' marginwidth=\'0\' allowfullscreen=\'true\' scrolling=\'no\'></iframe>");

}

