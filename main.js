var proname=document.getElementById("proname");
var price=document.getElementById("price");
var arrofproduct;
var themaster=0;
var themasternum=-1;
if(localStorage.getItem("ourpro")==null){
     arrofproduct=[]; 
}else{
    arrofproduct=JSON.parse(localStorage.getItem("ourpro"));
    showpro();
}
function addproduct(){

    if(proname.value==""||price.value==""){
document.getElementById("errorss").innerHTML="please fill all the fields";

    }else{
    if(themaster==0){
    objofproduct={
        nameofproduct:proname.value,
        proprice:price.value,
    };
    arrofproduct.push(objofproduct);
    localStorage.setItem("ourpro",JSON.stringify(arrofproduct));
    showpro();
    clearNow();
}else{
    arrofproduct[themasternum].nameofproduct=proname.value;
    arrofproduct[themasternum].proprice=price.value;
    localStorage.setItem("ourpro",JSON.stringify(arrofproduct));
    themasternum=-1;
    showpro();
    clearNow(); 
}
document.getElementById("errorss").innerHTML="";
}

}

function showpro(){
var container =``;
var theid=0;
for(var i=0;i<arrofproduct.length;i++){

    container+=`<tr>
    <td>-0${theid+=1}</td>
    <td>${arrofproduct[i].nameofproduct}</td>
    <td><button><a href="${arrofproduct[i].proprice}" target="_blank">VISIT IT</a></button></td>
    <td><button onclick="del(${i})" class="redback">Remove</button></td>
    <td><button onclick="edi(${i})">Edit</button></td>
  </tr>`;
}
document.getElementById("thebodyoftable").innerHTML=container;
}





function clearNow(){
    document.getElementById("proname").value="";
    document.getElementById("price").value="";
    document.getElementById("addandup").innerHTML="ADD";
  themaster=0;
 themasternum=-1;
 document.getElementById("addandup").classList.remove("orangebox");

}



function del(index){

    arrofproduct.splice(index,1); 
    localStorage.setItem("ourpro",JSON.stringify(arrofproduct));  
    showpro();
}

function edi(index){
    document.getElementById("errorss").innerHTML="";
document.getElementById("addandup").innerHTML="upDate";
proname.value=arrofproduct[index].nameofproduct;
price.value=arrofproduct[index].proprice;
themaster=1;
themasternum=index;
document.getElementById("addandup").classList.add("orangebox");

}