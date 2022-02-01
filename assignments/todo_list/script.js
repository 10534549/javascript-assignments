var add_btn = document.querySelector("button")
var div_container= document.querySelector('.todos')
var input = document.querySelector("input[name='todo_input']") 
// var remove_btn= document.querySelector("#btn_2")
var count=0

function addtodo(){
    var p_element=document.createElement('p')
    var p_text=document.createTextNode(input.value)
    p_element.appendChild(p_text)
    p_element.setAttribute('key',count)
    div_container.appendChild(p_element)
    count+=1
    
    p_element.addEventListener('click',function(){
        div_container.removeChild(p_element)
    })
}
add_btn.addEventListener('click',addtodo) 




function dataFalse() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => {
        return Response.json()
      })
      .then((completedata) => {
        console.log("completedata", completedata)
  
        const dataFalse = completedata.filter((data) => !data.completed)
  
        console.log("dataTrue", dataTrue)
        console.log("dataFalse", dataFalse)
      })
  }