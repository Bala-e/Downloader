function redirect(){
	var doi = document.getElementById('doi').value;
	var customer = document.getElementById('customer').value;
	var project = document.getElementById('project').value;
	console.log(doi);
	location.replace('https://kriya2.kriyadocs.com/api/getxml/?apiKey=cde4c89b-e452-4ba5-b493-01c691033b72&doi='+ doi +'&customer='+ customer +'&project='+ project +'&xmltype=raw')
    }
	function final_xml(){
	var doi = document.getElementById('doi').value;
	var customer = document.getElementById('customer').value;
	var project = document.getElementById('project').value;
	console.log(doi);
	location.replace('https://kriya2.kriyadocs.com/api/getxml/?apiKey=cde4c89b-e452-4ba5-b493-01c691033b72&doi='+ doi +'&customer='+ customer +'&project='+ project +'&xmltype=final')
    }