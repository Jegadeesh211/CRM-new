let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
var adminbox1=document.getElementById('adminbox1');
var adminbox2=document.getElementById('adminbox2');
var form1=document.getElementById('form');
var formtable=document.getElementById("formtable")
var back1=document.getElementById('back');
var callog=document.getElementById('calllog');
var sidebar=document.getElementById("sidenav")
var menu=document.getElementById("menu")
var readData=document.getElementById("readData")
// document.addEventListener("submit", myFunction());
function myFunction(){
    menu.style.display='none'
    adminbox1.style.display='none'
    adminbox2.style.display='none'
    callog.style.display='none'
    form1.style.display='grid'
    formtable.style.display='flex'
    back1.style.display='inline-block'
}


document.addEventListener("click", back());
function back(){
    adminbox1.style.display='flex'
    adminbox2.style.display='flex'
    callog.style.display=''
    form1.style.display='none'
    back1.style.display='none'
    menu.style.display='flex'
    formtable.style.display='none'



    
}

let username = id("fullName"),
    lastname = id("lastname"),
    title = id("title"),
    email0 = id("email0"),
    phone0=id("Phone0"),
    fax=id("Fax"),
    mobile=id("mobile"),
    Leadsource=id('Leadsource'),
    Leadstatus=id("Leadstatus"),
    Industry=id("Industry"),
    Rating=id("Rating"),
    Secondary=id("Secondary"),
    Twitter=id("Twitter"),
    Street=id('Street'),
    City =id("city"),
    State=id('State'),
    Zip=id('Zip')
    password = id("password"),
    form = id("form"),
    
    errorMsg = classes("error"),
    errorMsg1 = classes("error1"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault(e)
    console.log("Hello")
    engine(username, 0, "Username cannot be blank");
    engine(lastname, 1, "Username cannot be blank");
    engine(title, 2, "Username cannot be blank");
    engine(email, 3, "Email cannot be blank");
    engine(Phone, 4, "Username cannot be blank");
    engine(fax, 5, "Username cannot be blank");
    engine(mobile, 6, "Email cannot be blank");
    engine(Leadsource, 7, "Username cannot be blank");
    engine(Leadstatus, 8, "Username cannot be blank");
    engine(Industry, 9, "Username cannot be blank");
    engine(Employees,10, "Username cannot be blank");
    engine(Rating,11, "Username cannot be blank");
    engine(Secondary,12, "Username cannot be blank");
    engine(Twitter,13, "Username cannot be blank");
    engine(Street,14, "Username cannot be blank");
    engine(City,15, "Username cannot be blank");
    engine(State,16, "Username cannot be blank");
    engine(Zip,17, "Username cannot be blank");



    // engine(password, 3, "Password cannot be blank");
});

let engine = (id, serial, message) => {

    if (id.value.trim() == "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        
     
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
       
        button= (id,serial,message) => {
            logout.style.display="flex";
        } 
    }
    else {
        errorMsg[serial].innerHTML = "";

        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        button= (id,serial,message) => {
            model.style.display="flex";
        }
    }
}
// * pop*//
var show=document.getElementById("mybtn");
var close=document.getElementById("closebtn");
var model=document.getElementById("modelCon");
var sumb=document.getElementById("btn")
var logout=document.getElementById("faill")
// var close1=document.getElementById("log")




 // add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".container1");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


var show=document.getElementById("mybtn");
var close=document.getElementById("closebtn");
var model=document.getElementById("modelCon");
 
showpop = () => {
    model.style.display="flex";
    readData.style.display='none'

}
 let closepop=()=>{
    model.style.display="none"
 }




//  form valid 

 
// crud

//***Notification Form***//
 
var box  = document.getElementById('box');
var down = false;


function toggleeNotifii(){
	if (down) {
		box.style.height  = '0px';
		box.style.display = 'none';
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.display = 'block';
		down = true;
	}
}
 
//***Notification Form End***//


//****Model Form****//

var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    age = document.getElementById("age"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    post = document.getElementById("post"),
    sDate = document.getElementById("sDate"),
    textarea=document.getElementById('textarea'),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")
    readdata=document.getElementById('readData')

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "./image/profile.png"
    form.reset()
})



file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}


function showInfo(){
    
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails table-responsive">
            <td>${index+1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeeName}</td>
            <td>${element.employeeAge}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeePhone}</td>
            <td>${element.employeePost}</td>
            <td>${element.startDate}</td>
            <td>
            <button class="btn btn-success "  onclick="view(),readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}','${element.lastDate}','${element.employeeLcstatus}','${element.employeeCall}','${element.employeeCoustatus}','${element.employeeTextarea}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye" style="color:black"></i></button>                    
            <button class="btn btn-primary" onclick="view(),editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>

            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()
function view(){
    readData.style.display='block'

}
function profile(){
    readData.style.display='none'
}
// *** View Form
function readInfo(pic, name, age, city, email, phone, post, sDate, lDate, lcstatus,  time, coustatus, textarea){
    document.querySelector('.showImg').src = pic,
    document.querySelector('#showName').value = name,
    document.querySelector("#showAge").value = age,
    document.querySelector("#showCity").value = city,
    document.querySelector("#showEmail").value = email,
    document.querySelector("#showPhone").value = phone,
    document.querySelector("#showPost").value = post,
    document.querySelector("#showsDate").value = sDate,
    document.querySelector("#showLDate").value=lDate,
    document.querySelector("#showCoustatus").value=coustatus,
    document.querySelector("#showLcstatus").value=lcstatus,
    document.querySelector("#showCall").value = time,
    document.querySelector("#showTextarea").value=textarea;
    };
    
//*** Edit Form ***//
function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate, LDate, Lcstatus,Time,Coustatus,Textarea){
    isEdit = true
    editId = index
    imgInput.src = pic
    userName.value = name
    age.value = Age
    city.value =City
    email.value = Email,
    phone.value = Phone,
    post.value = Post,
    time.value=Time,
    textarea.value=Textarea,
    lcstatus.value=Lcstatus,
    coustatus.value=Coustatus,
    lDate.value=LDate,
    sDate.value = Sdate
    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}

//*** Delete Form ***/
function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/profile.png" : imgInput.src,
        employeeName: userName.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
        employeeCall:time.value,
        employeeCoustatus:coustatus.value,
        employeeLcstatus:lcstatus.value,
        employeeTextarea:textarea.value,
        lastDate:lDate.value,
        startDate: sDate.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "./image/profile.png"  

})

//****Model Form End****//

 