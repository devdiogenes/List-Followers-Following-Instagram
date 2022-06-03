people = ""; 
count=0; 
total=parseInt(prompt("How much people?"))-1; 
done=false;
function gerarlista(){
	if(done==false){
		document.querySelectorAll('._aaep').forEach((item)=>{
			people=(people+"\n"+item.innerText);
		});
		console.log(people);
		done=true;
	}
}
setInterval(function(){
	if(count<total){
		count = 0;
		document.querySelector('._aano').scrollTo(0,document.querySelector('._aano').scrollHeight);
		document.querySelectorAll('._aaep').forEach(function(){
			count=count+1
		});
		console.log(count)
	}else{
		gerarlista()
		clearInterval();
	}
},1000);