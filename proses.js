function insert(num){
	document.form.layar.value = document.form.layar.value+num; 
}

function hasil(){
	var hasil = document.form.layar.value;
	if(hasil){
		document.form.layar.value = eval(hasil);
	}
}

function bersih(){
	document.form.layar.value = "";
}

function info(){
	alert("Terima kasih atas masukan anda!");
}