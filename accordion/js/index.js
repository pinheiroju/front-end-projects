document.addEventListener('DOMContentLoaded', function(){
    const accordionItem = document.querySelectorAll('.accordion-item');  

    accordionItem.forEach(item =>{
        const buttonAccordion = item.querySelector('.accordion-header');
        const accordionContent = item.querySelector('.accordion-content');
        if(buttonAccordion){
            buttonAccordion.addEventListener('click', function(){
                console.log('Botao clicado');
                if(accordionContent.style.display === 'block'){
                    accordionContent.style.display = 'none';
                }
                else{
                    accordionContent.style.display = 'block';
                }
            })
        }
    
    })

    


})


