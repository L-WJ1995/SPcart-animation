function equation_fly(startEl) {  //一元二次方程曲线
  let target = document.querySelector("#S-buy")
  let buy_num = target.querySelector(".buy_num")
  let node = document.createElement("div")
  let start = {}, end = {}
  startEl.appendChild(node)
  node.className = "buy_action"
  start.x = ((startEl.getBoundingClientRect().left + startEl.getBoundingClientRect().right) / 2) - 0 
  start.y = ((startEl.getBoundingClientRect().top + startEl.getBoundingClientRect().bottom) / 2) - 0
  end.x = ((target.getBoundingClientRect().left + target.getBoundingClientRect().right) / 2) - 0
  end.y = ((target.getBoundingClientRect().top + target.getBoundingClientRect().bottom) / 2) - 0
  
  let lastTime = null, 
      a = -0.006,   //曲线的。。。开口方向及大小(一元二次方程抛物线)   
      move = 0,     //初始移动距离   
      zoom = 0.5,   //放大倍数，不需要可以重置为0 
      pathlength = end.x - start.x, //移动距离
      movetime = 1000, //动画时间(毫秒)
      movepathlength = pathlength / movetime //每毫秒移动距离
  let b = ((start.y - end.y - a * Math.pow(end.x - start.x,2)) / (end.x - start.x))

  requestAnimationFrame(fly)

  function fly(time) {     // 抛物线动画
    if (lastTime) move += (time - lastTime) * movepathlength
    x = move + start.x - node.offsetWidth / 2
    y = start.y - a * move ** 2 - b * move - node.offsetHeight / 2
    lastTime = time
    if (move < pathlength) {
      if (move < pathlength / 2) {
        zoom += 0.01
      } else {
        zoom -= 0.01
      }
      node.style.transform = `scale(${zoom})`
      node.style.left = x + "px"
      node.style.top = y + "px"
      var time_count = requestAnimationFrame(fly)
    } else {
        startEl.removeChild(node)
        buy_num.textContent = buy_num.textContent - 0 + 1
        cancelAnimationFrame(time_count)
    }
  }
}

let num_top = document.querySelector(".top")
let num_down = document.querySelector(".down")
let num_input_div = document.querySelector(".input-div").firstChild
num_top.addEventListener("click",()=>{
  num_input_div.value = num_input_div.value - 0 + 1
})
num_down.addEventListener("click",()=>{
  num_input_div.value = num_input_div.value >=2 ? num_input_div.value - 0 - 1 : 1
})

function change(num) {
   document.querySelector(".image-display-first").firstChild.setAttribute("src",`picture/x${num}.jpg`)
}

