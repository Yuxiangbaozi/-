var result = `
/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

#bocode{
  background: #eee;
  border: 1px solid #aaa;
}

/* 我需要边框加点阴影 */
#bocode{
  box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.75);
}

/* 再来点立体效果 */
#warper{
  transform: perspective(2500px) rotateY(20deg);
}

/* 我需要一点代码高亮 */
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #dd4a68;
}
`

var result2 =`
/* 然后我需要一块黑板 */
#paper{
  border: 5px solid #888;
  background: black;
}
/* 接下来自我介绍一下 */
`

var markdown = `
<h2>李仲谦</h2>
<hr>
age：30
广东食品药品职业学院毕业
自学前端半年
希望应聘贵公司前端开发职位

<h2>技能介绍</h2>
<hr>
熟悉 JavaScript HTML CSS

<h2>项目介绍</h2>
<hr>
1...
2...
3...

<h2>联系方式</h2>
<hr>
<b>Tel</b>：13422011279
<b>E-mail</b>：378928394@qq.com
`


writecode('' , result , ()=>{
  writecode(result , result2,()=>{
    writeMarkdown(markdown)
  })
})

function writecode(precode,code,fn){
  bocode.innerHTML = precode || ''
  let n = 0
  let times = setInterval(()=>{
      bocode.innerHTML = Prism.highlight(precode + code.substring(0 , n), Prism.languages.css)
      bostyle.innerHTML = precode + code.substring(0 , n)
      n++
      bocode.scrollTop = bocode.scrollHeight
      if(n > code.length){
          window.clearInterval(times)
          fn.call()
      }
  },10)
}
function writeMarkdown(markdown,fn){
  let code = marked(markdown)
  let n = 0
  let times = setInterval(()=>{
      paper.innerHTML = code.substring(0 , n)
      n++
      paper.scrollTop = paper.scrollHeight
      if(n > code.length){
          window.clearInterval(times)
          fn.call()
      }
  },10)
}