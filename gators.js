function outputGator() {
  console.log("ボタンが押されたよ");
  let element = document.getElementById("textBox");
  let bBox = document.querySelector("#blueBox");
  console.log(element.value);
  bBox.innerText = "";


  let nodes = document.getElementsByName("items");
  for (let i = 0; i < nodes.length; i++){
    console.log(nodes[i].checked);
    if (nodes[i].checked === "🐊") {
      let newGator = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
      newGator.innerText = "🐊";
      bBox.appendChild(newGator);//bBoxの下にnewGator<p>🐊</p>をループの限り出し続ける。
    } 
  }
    
    const num = ( Math.floor( Math.random (element) * 10 ));
    console.log(num);
    for (let i = 0; i < element.value; i++) {
      if ( num < 3 ) {
        let newBomb = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
        newBomb.innerText = "💣";
        bBox.appendChild(newBomb);//bBoxの下にnewBomb<p>💣</p>をループの限り出し続ける。
      } else if ( 3 <= num, num <= 4) {
        let neweXplosin = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
        neweXplosin.innerText = "💥";
        bBox.appendChild(neweXplosin);//bBoxの下にneweXplosin<p>💥</p>をループの限り出し続ける。
      } else if ( 5 <= num, num <= 7) {
        let newGator = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
        newGator.innerText = "🐊";
        bBox.appendChild(newGator);//bBoxの下にnewGator<p>🐊</p>をループの限り出し続ける。
      } else if ( 8 < num) {
        let newWhale = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
        newWhale.innerText = "🐳";
        bBox.appendChild(newWhale);//bBoxの下にnewWhale<p>🐳</p>をループの限り出し続ける。
      }
    }
  }
  
  // function randomStopLight () {
    //   const num = ( Math.floor( Math.random () * 10 ));
//   if ( num < 3 ) {
//       return "🔴Red" ;
//   } else if ( 3 <= num , num <= 6 ) {
//       return "🟡Yello" ;
//   } else if ( 6 < num ) {
//       return "🟢Green" ;
//   }
// }
// console.log ( randomStopLight ());

// 💣💥🐩🐯🦄🦅🐵🐾🐢🐊🐉🐳🍀🍁💫🔀❓
