
const caseIncrement = document.getElementById('case-increment') ; 

caseIncrement.addEventListener('click' , function(){
	productPriceHandler(true , 'case');
	
});
// for decrement
const caseDecrement  = document.getElementById('case-decrement').addEventListener('click' , function () {
	productPriceHandler(false , 'case');
}) 

var phoneIncrement = document.getElementById('phone_increment') ;
phoneIncrement.addEventListener('click', function(){
	productPriceHandler(true, 'phone');
})

var phoneDecrement = document.getElementById('phone_decrement') ;
phoneDecrement.addEventListener('click', function(){
	productPriceHandler(false , 'phone');
})


// ================================== handler function ================================


// main function

function productPriceHandler(isIncrease, productName) {
	let productValue = document.getElementById(`${productName}-value`);
	const productCount = parseInt(productValue.value);
	let newProductCount = productCount ;
	if (isIncrease == false && productCount > 0) {
		newProductCount = productCount - 1;  
	}
	if(isIncrease == true){
		newProductCount = productCount + 1 ;
	}
	productValue.value = newProductCount ;
	let productTotal = 0 ;
	if(productName== 'case'){
		productTotal = newProductCount * 59 ;
	}

	if(productName == 'phone'){
		productTotal = newProductCount * 1219 ;
	}
	document.getElementById(`${productName}TotalPrice`).innerText ="$"+productTotal;
	Calculator();
}


// calculate funciton 

function Calculator() {
	const phoneInput = document.getElementById('phone-value');
	const phoneValue = parseInt(phoneInput.value);

	const caseInput = document.getElementById('case-value');
	const caseValue = parseInt(caseInput.value);


	// for sub total
	var subTotalPrice = phoneValue * 1219 + caseValue * 59 ;
	document.getElementById('sub-total').innerText = '$'+subTotalPrice ;

	// for tax
	var tax = Math.round(subTotalPrice * 10/100); 
	document.getElementById('product-tax').innerText = '$'+tax ;

	// for totalPrice 
	var totalPrice = subTotalPrice + tax ;
	document.getElementById('totalPrice').innerText = '$'+totalPrice; 
}


