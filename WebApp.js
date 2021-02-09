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
	
	sumprice[i] = 0;
	sumvalue[i] = 0;
	
	For buy[0] = 0 to 1{
	 if buy[0] == 1{
	  sumprice[0] = itemprice[0];
	  sumvalue[0] = itemvalue[0];
	 }
	}
	
	For buy [1] = 0 to 1{
	 if buy[1] == 1{
	  sumprice[1] = sumprice[0] + itemprice[1];
	  sumvalue[1] = sumvalue[0] + itemvalue[1];
	 }
	}
	
	For buy [2] = 0 to 1{
	 if buy[2] == 1{
	  sumprice[2] = sumprice[1] + itemprice[2];
	  sumvalue[2] = sumvalue[1] + itemvalue[2];
	 }
	}
	
	For buy [3] = 0 to 1{
	 if buy[3] == 1{
	  sumprice[3] = sumprice[2] + itemprice[3];
	  sumvalue[3] = sumvalue[2] + itemvalue[3];
	 }
	}
	
	For buy [4] = 0 to 1{
	 if buy[4] == 1{
	  sumprice[4] = sumprice[3] + itemprice[4];
	  sumvalue[4] = sumvalue[3] + itemvalue[4];
	 }
	}
	
	For buy [5] = 0 to 1{
	 if buy[5] == 1{
	  sumprice[5] = sumprice[4] + itemprice[5];
	  sumvalue[5] = sumvalue[4] + itemvalue[5];
	 }
	}
	
	For buy [6] = 0 to 1{
	 if buy[6] == 1{
	  sumprice[6] = sumprice[5] + itemprice[6];
	  sumvalue[6] = sumvalue[5] + itemvalue[6];
	 }
	}
	
	For buy [7] = 0 to 1{
	 if buy[7] == 1{
	  sumprice[7] = sumprice[6] + itemprice[7];
	  sumvalue[7] = sumvalue[6] + itemvalue[7];
	 }
	}
	
	For buy [8] = 0 to 1{
	 if buy[8] == 1{
	  sumprice[8] = sumprice[7] + itemprice[8];
	  sumvalue[8] = sumvalue[7] + itemvalue[8];
	 }
	}
	
	For buy [9] = 0 to 1{
	 if buy[9] == 1{
	  sumprice[9] = sumprice[8] + itemprice[9];
	  sumvalue[9] = sumvalue[8] + itemvalue[9];
	 }
	}
	
	var element = document.createElement("p");
        var text = document.createTextNode("合計金額:" + sumprice[9] + ",合計人気度:"　+　sumvalue[9]);
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
        var text = document.createTextNode("合計金額:" + psum + ",合計人気度:"　+　vsum);
	document.body.appendChild(element).appendChild(text);
}



