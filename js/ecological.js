		var bjbj=document.getElementById("bjbj");
		var debj=document.getElementById("debj");
		window.onscroll=function(){
			var top=document.documentElement.scrollTop || document.body.scrollTop;
			if(top>5){
				bjbj.style.height=400+"px";
				bjbj.innerHTML="<img src=\"img/xt.jpg\" >"
			}
		};
		var lbtp=document.getElementById("lbtp");
		var lbxwz=document.getElementsByClassName("lbxwz");
		var a=0;
		dsqa();
		var zsyg;
		function dsqa(){
				zsyg=setInterval(function(){
						var lbtpleft=lbtp.offsetLeft;
						lbtpleft-=735;
						lbtp.style.left=lbtpleft+"px";
						
						
						
						for(var y=0;y<lbxwz.length;y++){
							lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
						}
						
						
						if (lbtpleft==-3675) {
							lbtp.style.left=0+"px";
							a=0;
							lbxwz[0].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
						}else{
							a++;
							lbxwz[a].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
							
							
						}
						
						
						
						
					},2000);
		};
		
		var aaa=document.getElementById("xyyx");
		var bbb=document.getElementById("dyhel");
		var ccc=document.getElementById("lplsc");
		var ddd=document.getElementById("tocpt");
		var eee=document.getElementById("mzxs");
		
		
		eee.onmousemove=function(){
			// alert("hahaha")
			clearInterval(zsyg);
			lbtp.style.left=-2940+"px";
			for(var y=0;y<lbxwz.length;y++){
				lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
			};
			lbxwz[4].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
			a=4;
			dsqa();
		};
		aaa.onmousemove=function(){
			// alert("hahaha")
			clearInterval(zsyg);
			lbtp.style.left=0+"px";
			for(var y=0;y<lbxwz.length;y++){
				lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
			};
			lbxwz[0].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
			a=0;
			dsqa();
		};
		bbb.onmousemove=function(){
			// alert("hahaha")
			clearInterval(zsyg);
			lbtp.style.left=-735+"px";
			for(var y=0;y<lbxwz.length;y++){
				lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
			};
			lbxwz[1].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
			a=1;
			dsqa();
		};
		ccc.onmousemove=function(){
			// alert("hahaha")
			clearInterval(zsyg);
			lbtp.style.left=-1470+"px";
			for(var y=0;y<lbxwz.length;y++){
				lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
			};
			lbxwz[2].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
			a=2;
			dsqa();
		};
		ddd.onmousemove=function(){
			// alert("hahaha")
			clearInterval(zsyg);
			lbtp.style.left=-2205+"px";
			for(var y=0;y<lbxwz.length;y++){
				lbxwz[y].style.cssText="background-color: #e3e2e2;border:none;"
			};
			lbxwz[3].style.cssText="border-bottom:2px solid #bb9a6c;color: #bb9a6c;background-color: white;";
			a=3;
			dsqa();
		};
		
		
		var hga=document.getElementById("bga");
		var bgb=document.getElementById("bgb");
		var bgc=document.getElementById("bgc");
		var bgd=document.getElementById("bgd");
		var bge=document.getElementById("bge");
		
		var bgzh=document.getElementById("bgzh");
		var bggg=document.getElementById("bggg");
		var bgss=document.getElementById("bgss");
		var bggl=document.getElementById("bggl");
		var bgsq=document.getElementById("bgsq");
		
		var ulzh=document.getElementsByClassName("ulzh");
		var tablea=document.getElementsByClassName("tablea");
		bggg.onmousemove=function(){
			for(var t=0;t<ulzh.length;t++){
				ulzh[t].style.cssText="color:black;border-bottom:none;"
				tablea[t].style.visibility="hidden";
				// tablea[t].style.zindex="0";
				// tablea[t].style.backgroundColor="blanchedalmond";
				
			};
			bggg.style.cssText="color: #1DA6BA; border-bottom:2px solid #1DA6BA;";
			// bgb.style.display="block";
			bgb.style.zindex="10000";
			bgb.style.visibility="visible";
			
		};
		bgzh.onmousemove=function(){
			for(var t=0;t<ulzh.length;t++){
				ulzh[t].style.cssText="color:black;border-bottom:none;"
				tablea[t].style.visibility="hidden";
				// tablea[t].style.zindex="0";
				// tablea[t].style.backgroundColor="blanchedalmond";
				
			};
			bgzh.style.cssText="color: #1DA6BA; border-bottom:2px solid #1DA6BA;";
			// bgb.style.display="block";
			bga.style.zindex="10000";
			bga.style.visibility="visible";
			
		};
		bgss.onmousemove=function(){
			for(var t=0;t<ulzh.length;t++){
				ulzh[t].style.cssText="color:black;border-bottom:none;"
				tablea[t].style.visibility="hidden";
				// tablea[t].style.zindex="0";
				// tablea[t].style.backgroundColor="blanchedalmond";
				
			};
			bgss.style.cssText="color: #1DA6BA; border-bottom:2px solid #1DA6BA;";
			// bgb.style.display="block";
			bgc.style.zindex="10000";
			bgc.style.visibility="visible";
			
		};
		bggl.onmousemove=function(){
			for(var t=0;t<ulzh.length;t++){
				ulzh[t].style.cssText="color:black;border-bottom:none;"
				tablea[t].style.visibility="hidden";
			};
			bggl.style.cssText="color: #1DA6BA; border-bottom:2px solid #1DA6BA;";
			bgd.style.zindex="10000";
			bgd.style.visibility="visible";
			
		};
		bgsq.onmousemove=function(){
			for(var t=0;t<ulzh.length;t++){
				ulzh[t].style.cssText="color:black;border-bottom:none;"
				tablea[t].style.visibility="hidden";
			};
			bgsq.style.cssText="color: #1DA6BA; border-bottom:2px solid #1DA6BA;";
			bge.style.zindex="10000";
			bge.style.visibility="visible";
			
		};
		var acttpzimgb=document.getElementById("acttpzimgb");
		var qsp=document.getElementById("qsp");
		acttpzimgb.onmousemove=function(){
			
			qsp.style.height=160+"px";
			
		};
		qsp.onmousemove=function(){
			qsp.style.height=160+"px";
		};
		acttpzimgb.onmouseout=function(){
			
			qsp.style.height=0+"px";
			
		};
		qsp.onmouseout=function(){
			qsp.style.height=0+"px";
		};
		var ydtlw=document.getElementById("ydtlw");
		var xian=document.getElementsByClassName("xian");
		var xianx=document.getElementsByClassName("xianx");
		var b=1;
		ydtlw.onmousemove=function(event){
			var x=event.clientX;
			var y=event.clientY;
			xian[0].style.display="block";
			xianx[0].style.display="block";
			
			if (x>=20 && x<=44) {
				xian[0].style.width=12.5+"%";
				b=1;
			} else if(x>=45 && x<=67){
				xian[0].style.width=25+"%";
				b=2;
			} else if(x>=68 && x<=90){
				xian[0].style.width=37.5+"%";
				b=3;
			} else if(x>=91 && x<=113){
				xian[0].style.width=50+"%";
				b=4;
				// alert("hahaha")
			} else if(x>=114 && x<=136){
				xian[0].style.width=62.5+"%";
				b=5;
			} else if(x>=137 && x<=160){
				xian[0].style.width=75+"%";
				b=6;
			} else if(x>=161 && x<=183){
				xian[0].style.width=87.5+"%";
				b=7;
				console.log(b)
			} else if(x>=184 && x<=200){
				xian[0].style.width=100+"%";
				b=8;
			}
			console.log(b)
			ydtlw.src="img/c"+b+".jpg";
		}
		ydtlw.onmouseout=function(){
			xian[0].style.display="none";
			xianx[0].style.display="none";
			xian[0].style.width=0+"%";
			ydtlw.src="img/c"+1+".jpg";
		}
		// var apyza=document.getElementById("apyza");
		
		
		// apyza.onmousemove=function(){
		// 	apyza.
		// }
		