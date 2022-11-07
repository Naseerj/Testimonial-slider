console.log('Hello')

 let next = document.querySelector('.next')
 let prev =document.querySelector('.prev')
 let tanya = document.querySelector('.tanya')
 let john = document.querySelector('.tanya')
 let john1 = document.querySelector('#john')
 let text3 = document.querySelector('#text2')
 let text1 = document.querySelector('.textdiv')
 let slider = document.querySelector('.parentdiv')

 next.addEventListener('click', ()=>{
    console.log('Hello')
    
    if(tanya.style.display == 'block')  {
      // tanya.style.display = 'block' 
      tanya.style.display = 'none' 
      john1.style.display = 'block'
      // john1.style.display = 'block'
      text1.style.display ='none'
      text3.style.display = 'block'
      // john.classList.add('active') 
      console.log('hmmm')
    }
      else if(john1.style.display == 'block') {
      john1.style.display = 'none'
      tanya.style.display = 'block'
      text1.style.display ='block'
      text3.style.display = 'none'
      console.log('yay')
    } 
    else{
      tanya.style.display = 'block' 
      john1.style.display = 'none'
      console.log('yo')
        // console.log('Hello')
    }

    // if( text1.style.display == 'block'){
    //   text3.style.display = 'block'

    // }else{

    // }
 })
 prev.addEventListener('click', ()=>{
  
  if(tanya.style.display == 'block')  {
    // tanya.style.display = 'block' 
    tanya.style.display = 'none' 
    john1.style.display = 'block'
    // john1.style.display = 'block'
    text1.style.display ='none'
    text3.style.display = 'block'
    // john.classList.add('active') 
    console.log('hmmm')
  }
    else if(john1.style.display == 'block') {
    john1.style.display = 'none'
    tanya.style.display = 'block'
    text1.style.display ='block'
    text3.style.display = 'none'
    console.log('yay')
  } 
  else{
    tanya.style.display = 'block' 
    john1.style.display = 'none'
    console.log('yo')
      // console.log('Hello')
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