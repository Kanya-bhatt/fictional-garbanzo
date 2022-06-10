function login() {
	
	if (document.getElementById('username').value== "KanyaBhatt" && document.getElementById('password').value== "baba5000"){
        return true;

	}
	if(document.getElementById('username').value!= "KanyaBhatt" && document.getElementById('password').value!= "baba5000"){
		alert("Enter a valid username and password");
		return false;
	}
	 
	if(document.getElementById('username').value!= "KanyaBhatt"){
		alert("Enter a valid username");
		return false;
	}
	if(document.getElementById('password').value!= "baba5000"){
		alert("Enter a valid password");
		return false;
	}

}