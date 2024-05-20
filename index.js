let id = 0;

document.getElementById('add').addEventListener('click', () => {
    
    if(document.getElementById('FirstName').value !== '' && document.getElementById('LastName').value !== '' && document.getElementById('PhoneNumber').value !== '') {
        let table = document.getElementById("myTable"); 
        let row = table.insertRow(1);
       
        row.insertCell(0).innerHTML = id++;
        row.insertCell(1).innerHTML = document.getElementById('FirstName').value;
        row.insertCell(2).innerHTML = document.getElementById('LastName').value;
        row.insertCell(3).innerHTML = document.getElementById('PhoneNumber').value;
    
        document.getElementById('FirstName').value = '';
        document.getElementById('LastName').value = '';
        document.getElementById('PhoneNumber').value = '';


    } else {
        alert("Please enter all required information to add a person");
    }   

})
