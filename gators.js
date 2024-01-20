function outputGator() {
  console.log("ボタンが押されたよ");
  let element = document.getElementById("textBox");
  console.log(element.value);
  let bBox = document.querySelector("#blueBox");
  bBox.innerText = "";
  for (let i = 0; i < element.value; i++) {
      let newGator = document.createElement("p");//ワニが入るパラグラフ要素を作る。<p></p>
      newGator.innerText = "🐊";
      bBox.appendChild(newGator);//bBoxの下にnewGator<p>🐊</p>をループの限り出し続ける。
  }
}
