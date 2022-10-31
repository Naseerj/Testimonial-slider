console.log('Hello')

 let next = document.querySelector('.next')
 let prev =document.querySelector('.prev')
 let tanya = document.querySelector('.tanya')
 let john = document.querySelector('.tanya')
 let slider = document.querySelector('.parentdiv')

 next.addEventListener('click', ()=>{
    console.log('Hello')
    
    if(tanya.style.display == 'none')  {
      tanya.style.display = 'block' 
      john.classList.add('active')
    }  else{
      tanya.style.display = 'none' 
    }
 })

  // slider.forEach((item, i) =>{
  //   let containerDimensions = item.getBoundingClientRect()
  //   let containerWidth = containerDimensions.containerWidth
  //   next[1].addEventListener('click', ()=>{
  //     item.scrollLeft += containerWidth

  //   })
  //   prev[1].addEventListener('click', ()=>{
  //     item.scrollLeft -= containerWidth
      
  //   })
  // })