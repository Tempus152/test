// function func1() {
//   let select = document.querySelector("#oneid").value
//   console.log(select)
//   fetch("https://acnhapi.com/v1a/" + select)
//       .then((res) => {
//           if (res.ok) {
//               return res.json();
//           }
//       })
//       .then((data) => {
//           for (i = 0; i < 10; i++) {
//               for (i = 0; i < 10; i++) {
//                   let image = document.createElement("img");
//                   let text = document.createElement("p");
//                   let raritytext = document.createElement("p");
//                   let pricetext = document.createElement("p");
//                   let availibilitytext = document.createElement("p");

//                   if ("location" in data[i]){
//                     availibilitytext.textContent = data[i].availibility["location"];
//                 }

//                   if (select == "houseware") {
//                       text.textContent = data[i][0].name["name-USen"];
//                       pricetext.textContent = data[i][0].price;
//                       raritytext.textContent = data[i][0].rarity;
//                       image.src = data[i][0].image_uri;
//                       body.append(image, text , raritytext, pricetext);
                      
//                   } else {
//                       text.textContent = data[i].name["name-USen"];
//                       pricetext.textContent = data[i].price;
//                       raritytext.textContent = data[i].rarity;

//                       image.src = data[i].image_uri;
//                   }
//                   body.append(image, text , raritytext, pricetext);
//               }
//               text.textContent = data[i].name["name-USen"];
//               pricetext.textContent = data[i].price;
//               raritytextss.textContent = data[i].rarity;

//               image.src = data[i].image_uri;
//           }

//       });
// }


// let body = document.querySelector("body");
// let button_check = document.querySelector(".press")
// button_check.addEventListener("click", func1)



const up = document.querySelector('.up')
const lang = document.querySelector('#lang')
let search = document.querySelector('#search')

// const press2 = document.querySelector('.press2')
// press2.addEventListener('click', del())

// function del(){
//   let live = document.querySelectorAll('#firstname')
//   live.parentNode.removeChild(live)
// }

function del(){
  up.innerHTML = ''
}

function func1() {
  del()
  let select = document.querySelector("#oneid").value
  // console.log(select)
  fetch("https://acnhapi.com/v1a/" + select)
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
      })
      .then((data) => {
          // for (i = 0; i < 10; i++) {
            let i;
              for (i in data) {
                  let image = document.createElement("img");
                  let text = document.createElement("p");
                  let raritytext = document.createElement("p");
                  let pricetext = document.createElement("p");
                  let locationtext = document.createElement("p");
                  let personalitytext = document.createElement("p");
                  let birthday_stringtext = document.createElement("p");
                  let birthdaytext = document.createElement("p");
                  let speciestext = document.createElement("p");
                  let gendertext = document.createElement("p");
                  // let catch_phrasetext = document.createElement("p");

                  let shadow = document.createElement("p");


                //   if ("location" in data[i]){
                //     locationtext.textContent = data[i].availibility["location"];
                // }

                  // if (select == "fish"){
                  //   image.src = data[i].image_uri;
                  //   text.textContent = data[i].name[lang.value];
                  //   locationtext.textContent = data[i].availability['location'];
                  //   shadow.textContent = data[i].shadow;
                  //   pricetext.textContent = data[i].price;
                  //   let down = document.createElement('div');
                  //   // down.setAttribute('class', text.textContent)
                  //   up.appendChild(down);
                  //   down.append(image, text, locationtext, shadow, pricetext);
                  // }

                  if (select == "houseware") {
                    // let indatai;
                    // for (indatai in data[i]){
                      // text.textContent = data[i][indatai].name[lang.value];
                      // image.src = data[i][indatai].image_uri;
                      const e = data.flat(Infinity)
                      text.textContent = e[i]['name'][lang.value];
                      image.src = e[i].image_uri;
                      let down = document.createElement('div')
                      // down.setAttribute('class', text.textContent)
                      up.appendChild(down)
                      down.append(image, text);
                    // }
                  }
                  if (select == "villagers") {
                    //   text.textContent = data[i].name["name-USen"];
                      text.textContent = data[i].name[lang.value];
                      image.src = data[i].image_uri;
                      personalitytext.textContent = data[i].personality;
                      birthday_stringtext.textContent = data[i]['birthday-string'];
                      birthdaytext.textContent = data[i].birthday
                      speciestext.textContent = data[i].species
                      gendertext.textContent = data[i].gender

                      let down = document.createElement('div')
                      // down.setAttribute('class', text.textContent)
                      up.appendChild(down)
                      down.append(image, text, personalitytext,birthday_stringtext, birthdaytext, speciestext, gendertext);
                  }
                  if (select == "songs") {
                    //   text.textContent = data[i].name["name-USen"];
                      text.textContent = data[i].name[lang.value];
                      image.src = data[i].image_uri;
                      let down = document.createElement('div')
                      // down.setAttribute('class', text.textContent)
                      up.appendChild(down)
                      down.append(image, text);
                  }
                  if (select == "fish"){
                    image.src = data[i].image_uri;
                    text.textContent = data[i].name[lang.value];
                    locationtext.textContent = data[i].availability['location'];
                    shadow.textContent = data[i].shadow;
                    pricetext.textContent = data[i].price;
                    let down = document.createElement('div');
                    // down.setAttribute('class', text.textContent)
                    up.appendChild(down);
                    down.append(image, text, locationtext, shadow, pricetext);
                  }
              }
              // let s = document.querySelectorAll('.up div')
              // console.log(s)

              // text.textContent = data[i].name["name-USen"];
            //   pricetext.textContent = data[i].price;
            //   raritytextss.textContent = data[i].rarity;

            //   image.src = data[i].image_uri;
        //   }

      });
}


// let body = document.querySelector("body");
let button_check = document.querySelector(".press")
button_check.addEventListener("click", func1)

// search.addEventListener('keyup', function(){
//   let ser;
//   ser = search
//   var q = document.querySelector(".up").childNodes;
//     Array.from(q).forEach(function(elem){
//         if (elem.className != ser.value){
//             elem.style.display = 'none'
//         }
//         if (elem.className == ser.value){
//             elem.style.display = 'block'
//         }
//         // if (elem.className == ''){*
//         //   func1()*
//         // }*
//       })
//   // if (up === ""){*
//   //   funk1()*
//   // }*
//   // ser.style.display = 'none'*
// })

// search.addEventListener("keyup", function(){
//   let keyy;
//   let divs = document.querySelector('.up')
//   for (keyy in divs){
    
//   }

//   // let key2;
//   // for(key2 in divs){
//   //   var divs2 = divs[key2].split('').slice(0,l).join('');
//   //   if('id' != search){
      
//   //   }
//   // }
// })

// let divs = document.querySelector('.up')
// console.log(divs)

// search.addEventListener('keyup', function(){})

document.querySelector('#search').oninput = function(){
  let val = this.value.trim();
  let allitemsinup = document.querySelectorAll('.up div')
  if (val != ''){
    allitemsinup.forEach(function(elem){                      // эта честно сп7*54;;ая серия строчек ищет не по id или class, как я думал изначально, а по всему тексту, что имеется в объекте;
      if (elem.innerText.search(RegExp(val,"gi")) == -1){    // -1 - не нашёл, а 1 - наоборот; .search() - ищет подстроку в строке (ищет по бугвам);
        elem.style.display = "none"                          // RegExp(val,"gi") - позволяет закрыть клаза на регистр; innerText - получает чистый текст без html тэгов;
      }
      else{
        elem.style.display = "block"
      }
    })
  }
  else {
    allitemsinup.forEach(function(elem){
      elem.style.display = "block"
    })
  }
}

// let s = document.querySelectorAll('.up div') 
//"получает div(только как название?) с классом" - неверно
// получает все div из .up - правда
