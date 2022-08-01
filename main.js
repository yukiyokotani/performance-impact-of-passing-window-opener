function sleep (second){
  const startTime = new Date();
  while (new Date() - startTime < second);
  console.log("done sleep");
};

!function main(){
  // 専有ボタン
  const exclusiveButton = document.getElementById('exclusive');
  exclusiveButton.addEventListener('click', () => sleep(10000));

  // カウンターボタン
  const count = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  incrementButton.addEventListener('click', () => {
    count.innerText = (Number(count.innerText) + 1).toString();
  })
}();