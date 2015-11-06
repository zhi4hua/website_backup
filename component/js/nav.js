/* 作者:志华
 * ---------
 * 时间:2015/11/5 PM
 */

// 重写一次
window.onload = function() {
	var myUl = document.getElementsByTagName('ul')[1];
	var myLi = myUl.getElementsByTagName('li');

	for(var i = 0; i < myLi.length; ++i) {
			myLi[i].onmouseover = function() {
				document.getElementsByTagName('p')[1].style.display = 'block';
			}
			myLi[i].onmouseout = function() {
				document.getElementsByTagName('p')[1].style.display = 'none';
			}
	}
}

// 自动计算二级菜单的宽度
// 思路:长度值通过计算一级菜单的该项的宽度 X 二级菜单的项数

// 显示指定参数
function showTag(tag) {
	tag.style.display = 'block';
}

// 不显示指定参数
function hideTag(tag) {
	tag.style.display = 'none';
}

function set(value1, value2) {
	value1.style.background = value2;
}