empForm.onsubmit =  e => (
e. preventDefault() , [...e.target.elements] . forEach(
    elements => console.log (`${elements} : ${elements.value}`)
  ) 
  
  
) 

