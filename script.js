function Signup() {
  let Email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;


  if (Email && password) {
    let userData = JSON.parse(localStorage.getItem("users")) || [];
    userData.push({ Email, password });
    localStorage.setItem("users", JSON.stringify(userData))
    alert("Data submit sucessfully....");
    window.location.href = "login.html"
  }
  else {
    alert("Check the info")
  }

  Email = document.getElementById("email").value = "";
  password = document.getElementById("pass").value = "";

}


function login() {
  let EmailLogin = document.getElementById("emailE").value;
  let passwordLogin = document.getElementById("passP").value;
  let data = JSON.parse(localStorage.getItem("users")) || [];
  let matched = data.find(x => x.Email === EmailLogin && x.password === passwordLogin)
  if (matched) {
    alert("Login Sucessful....")
    window.location.href = "main.html";
  } else {
    alert(" Login info not matched....")
  }
}

function forget(){
  let inputEmail=prompt("Enter Email...");
  console.log(inputEmail);
  let getdata=JSON.parse(localStorage.getItem("users"))||[]
  console.log(getdata);
 
getdata.forEach(e => {
  if(inputEmail===e.Email){
    alert(`Your email is : ${e.Email} and Your password is: ${e.password}`)
  }
  
})
 }


const api = 'https://ecommerce-api3.p.rapidapi.com/books';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'cf904d6abfmsh0eed0c9e41bc310p157aa3jsnff2f7543c5e3',
    'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
  }
};


var allData = [];
let container = document.getElementById("cardsContainer")

function display(b) {
  container.textContent = "";
  b.forEach(x => {
    let card = document.createElement("div");

    card.innerHTML = `
               <div style=" height:300px;width:250px; padding:6px;">
                 <img  style="height:200px;width:200px;"src="${x.Image}"/>
               <p>${x.Description}</p>
               <span>${x.Price}</span>
               </div>
             <div style="height:40px;width:250px;align-items:center; margin-top:20px;padding:10px">
               <button class="addtocart"; style="height:30px;width:80px;border:none; background: #C6E7FF;">Add</button>&nbsp;&nbsp;&nbsp;
                <button class="buynow"; style="height:30px;width:80px;border:none; background: #C6E7FF;">Buy Now</button>
             </div>
                `
    card.style.boxShadow = "3px 3px 3px 3px white"
    card.style.height = "400px";
    card.style.backgroundColor = "white"
    card.style.display = "flex";
    card.style.flexDirection = "column"
    card.style.gap = "10px"
    card.style.alignItems = "center"
    card.style.width = "250px"
    card.style.padding = "10px"
    container.appendChild(card);

    card.querySelector(".addtocart").addEventListener("click", () => {
      addTocart(x);

    })
    card.querySelector(".buynow").addEventListener("click", () => {
      window.location.href = "addTocart.html"

    })

  })
}
async function getbooks() {
  try {
    var a = await fetch(api, options);
    var b = await a.json();
    allData = b
    searchItem(allData)
  }
  catch {
    // console.log("err");

  }
}
getbooks()
function searchItem() {
  getbooks();
  let i = document.getElementById("find").value.trim().toLowerCase();
  let find = allData.filter(x => x.Description.toLowerCase().includes(i))
  display(find)
}

function addTocart(item) {
  let data = JSON.parse(localStorage.getItem("items")) || [];
  data.push(item);
  alert("Added To Cart")
  localStorage.setItem("items", JSON.stringify(data))
}



// var readmoreBtn = document.querySelector("#readmore");
// var readmoreBtn1 = document.querySelector("#readmore1");
// var readmoreBtn2 = document.querySelector("#readmore2");
// var text = document.querySelector(".text");
// var text1 = document.querySelector(".text1");
// var text2 = document.querySelector(".text2");

// readmoreBtn.addEventListener('click', (e) => {
//   text.classList.toggle("show-more");
// })
// readmoreBtn1.addEventListener('click', (e) => {
//   text1.classList.toggle("show-more");
// })
// readmoreBtn2.addEventListener('click', (e) => {
//   text2.classList.toggle("show-more");
// })

// var heart = document.querySelector("#i")
// function message() {
//   heart.style.color = "red"
// }
// function message1() {
//   heart.style.color = "black"
// }