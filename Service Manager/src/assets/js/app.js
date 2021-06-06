const ServiceContent=document.querySelectorAll('.service__content'),
	ServiceBtn=document.querySelectorAll('.service__right');

let index=0;




const Serviceitem= function(){
		ServiceContent.forEach(function(item){


			if(item.classList.contains('active')){
				item.classList.remove('active');
				
			}
			else {
				item.classList.add('active');
				
			}
		})	
}
ServiceBtn.forEach(function(items){
	
	items.addEventListener('click',Serviceitem)
})


