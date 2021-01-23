/* This makes our form visible*/
function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

/*This check every field is field if yes then submit and add data on table*/
function addData() {
    if(document.getElementById("ename").value=="" || document.getElementById("eid").value=="" ||
    document.getElementById("edept").value=="" || document.getElementById("eemailid").value=="" ||
    document.getElementById("edoj").value=="") {
        var para = document.createElement("p");
        var node = document.createTextNode("All fields are required.Kindly fill all of them");
        para.id="warn";
        para.appendChild(node);
        var element = document.getElementById("fcon");
        var child = document.getElementById("submit");
        element.insertBefore(para,child);
    }
    else {
    var tbl = document.getElementById("etable");
    var row = tbl.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML='<button type="button" class="btr" onclick="deleteData(this)">🧩</button>';
    cell2.innerHTML=document.getElementById("ename").value;
    cell3.innerHTML=document.getElementById("eid").value;
    cell4.innerHTML=document.getElementById("edept").value;
    cell5.innerHTML=document.getElementById("eemailid").value;
    cell6.innerHTML=document.getElementById("edoj").value;
    clearForm();
    closeForm();
    }
}

/*Set all the field to empty */
function clearForm() {
    document.getElementById("ename").value="";

    document.getElementById("eid").value="";

    document.getElementById("edept").value="";

    document.getElementById("eemailid").value="";

    document.getElementById("edoj").value="";

    if(document.getElementById("warn")!=null)
         document.getElementById("warn").remove();
}

/* This removes data row from our table*/
function deleteData(element) {
    document.getElementById("etable").deleteRow(element.parentNode.parentNode.rowIndex);
}

/* Set display property of form to be none*/
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/*Dropdown design*/
var DepObj = ["Administration", "Advertisement", "Engineering", "Marketing","Human Resources"];

window.onload = function() {
    var deptSel = document.getElementById("edept");
    var z=DepObj;
    for (var i = 0; i < z.length; i++) {
        deptSel.options[deptSel.options.length] = new Option(z[i], z[i]);
    }
}