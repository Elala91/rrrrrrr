function myFunction() {
  var x = document.getElementById("minmenu");

      x.style.display = "block";

}

function setElem(){elem={'name':'flower kimono','material':'silk','cost':450};
    localStorage.setItem(elem,JSON.stringify(elem));
    console.log(elem)

  };
  function getall(){
    alert("jjj");
    var retElem=JSON.parse(localStorage.getItem(elem))
    console.log(retElem);
  }

// document.getElementById("buy-1").setAttribute('onclick', setElem);

// function setElem(){ alert(1);
//   let elem={name:'flower kimono',material:'silk',cost:450, amount:1};
// window.localStorage.setItem("elem",elem);
// console.log(elem);

// };
// function getall(){
// console.log(window.localStorage.getItem("elem"));
// alert(elem.amount);

// }