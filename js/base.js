window.onload = function(){
	console.log
	var items = document.getElementsByClassName('xiao');
		for (var i = 0; i < items.length; i++) {
			if(Math.random()>0.8){
				items[i].textContent = '1';
			}else{
				items[i].textContent ='0';
			}
			items[i].onclick= function(){
				this.style.background = 'red';
				if (this.textContent=='1') {
					items.style.background='red';
				};
			}
		}
}