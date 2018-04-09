(function(){
	function JS_PIC(container){
		var me = this;
		me.container = container;
		me.allpic = document.getElementsByTagName('img');
		me.piclist = document.getElementById('pic_list');
		me.BEGIN();
		me.INIT();
	};

	JS_PIC.prototype.BEGIN = function(){
		var me = this;
		for(var i = 0;i<5;i++){
			var myDiv = me.allpic[i].cloneNode(true);
			me.piclist.appendChild(myDiv);
		}
	}

	JS_PIC.prototype.INIT = function(){
		var me = this;
		var pic_zindex = 9;
		var pic_left = 0;
		var pic_top = 0;
		var pic_opacity = 1;
		var pic_scale = 1;
		var i;
		for(i = 0;i<me.allpic.length;i++){
			//console.log(i);
			if(i<me.allpic.length/2){
				me.allpic[i].style.zIndex = pic_zindex--;
				me.allpic[i].style.left = pic_left+'px';
				pic_left -= 80;
				me.allpic[i].style.top = pic_top+'px';
				pic_top += 0;
				me.allpic[i].style.opacity = pic_opacity;
				pic_opacity -= 0.15;
				me.allpic[i].style.transform = 'scale('+pic_scale+')';
				pic_scale-=0.15;
			}
			else if(i>me.allpic.length/2){
				pic_scale+=0.15;
				pic_opacity+=0.15;
				pic_top-=0;
				pic_left+=80;
				//console.log(me.allpic[i]);
				me.allpic[i].style.zIndex = pic_zindex++;
				me.allpic[i].style.left = -pic_left+'px';
				me.allpic[i].style.top = pic_top+'px';
				me.allpic[i].style.opacity = pic_opacity;
				me.allpic[i].style.transform = 'scale('+pic_scale+')';
			}
		}
		
	}

	JS_PIC.prototype.CHANGELEFT = function(){
		var me = this;
		//console.log(me.piclist);
		var myDiv = me.piclist.removeChild(me.allpic[me.allpic.length-1]);
		me.piclist.insertBefore(myDiv,me.allpic[0]);
		console.log(me.piclist);
		me.INIT();
	}

	JS_PIC.prototype.CHANGERIGHT = function(){
		var me = this;
		//console.log(me.piclist);
		var myDiv = me.piclist.removeChild(me.allpic[0]);
		me.piclist.appendChild(myDiv);
		console.log(me.piclist);
		me.INIT();
	}

	window.JS_PIC = JS_PIC;
}())