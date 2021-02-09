let btnstart4 = document.getElementById("mybtn4");
let btnstart2 = document.getElementById("mybtn2");
let btnstart3 = document.getElementById("mybtn3");

btnstart4.addEventListener("click",full_search2_start);
btnstart2.addEventListener("click",full_search_start);
btnstart3.addEventListener("click",calculation_start);

var startTime;

var itemprice = [30,50,80,90,100,110,120,130,150,160];
var itemvalue = [8,6,8,9,7,7,8,5,8,9];
var limitprice = 300;
var choicenumber = 0;
var maxvalue = 0;



function full_search2_start(){
	
	sumprice = 0;
	sumvalue = 0;
	buy[j] = [0,1];
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[0];
		sumvalue += itemvalue[0];	
		}
}

	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[1];
		sumvalue += itemvalue[1];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[2];
		sumvalue += itemvalue[2];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[3];
		sumvalue += itemvalue[3];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[4];
		sumvalue += itemvalue[4];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[5];
		sumvalue += itemvalue[5];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[6];
		sumvalue += itemvalue[6];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[7];
		sumvalue += itemvalue[7];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[8];
		sumvalue += itemvalue[8];	
		}
}
	
	for(j=0;j<2;i++){
	 if(j=0){
		sumprice = sumprice;
		sumvalue = sumvalue;
		}
	 if(j=1) {
		sumprice += itemprice[9];
		sumvalue += itemvalue[9];	
		}
}
	
	var element = document.createElement("p");
        var text = document.createTextNode("合計金額:" + sumprice + ",合計人気度:" + sumvalue);
	document.body.appendChild(element).appendChild(text);
}
	
	
	
	  




function full_search_start(){
	startTime = performance.now();

	for(var cnt = 0; cnt < Math.pow(2, itemprice.length) ;cnt++){
		var sumprice = 0;
		var sumvalue = 0;
		for(var s = 0; s < itemprice.length; s++){
			if((cnt >> s) & 1 == 1){
				sumprice += itemprice[s];
				sumvalue += itemvalue[s];
			}
		}

		if((maxvalue < sumvalue) && (sumprice <= limitprice)){
			maxvalue = sumvalue;
			choicenumber = cnt;
		}
	}
	const endTime = performance.now();
	var element = document.createElement("p");
	var text = document.createTextNode("人気度の合計：" + maxvalue + ", 選べるパターン：" + choicenumber + "通り，実行時間：" + (endTime-startTime) + "/1000秒！");
	document.body.appendChild(element).appendChild(text);
}


function calculation_start(){
	
	var snacklist = document.getElementsByName("snack");
	var psum = 0;
	var vsum = 0;

        for(i=0;i<10;i++){
	     if(snacklist[i].checked){
		psum = psum+itemprice[i];
	        vsum = vsum+itemvalue[i];
	}
}
	
	var element = document.createElement("p");
        var text = document.createTextNode("合計金額:" + psum + ",合計人気度:" + vsum);
	document.body.appendChild(element).appendChild(text);
}



