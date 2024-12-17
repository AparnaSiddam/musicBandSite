const bar = document.querySelector('.bar');

     bar.addEventListener('click', function(){
        let x = document.querySelector('#myNav');
        if(x.className === 'navBar'){
            x.className += ' responsive';
        }else{
            x.className = 'navBar';
        }
     });


    const myArray = [];
    let i = 0;
    myArray[0] = 'images/chicago.jpg';
    myArray[1] = 'images/la.jpg';
    myArray[2] = 'images/ny.jpg';

    const city = ['Chicago', 'Los Angeles', 'New York'];
    const greet = ['Thank you, Chicago', 'Thank you, Los Angeles', 'Thank you, New York'];
    

    const imgTag = document.querySelector('img');
    const cityTag = document.querySelector('.city');
    const greetTag = document.querySelector('.greet');
    

    function slideImages(){
        imgTag.src = myArray[i];
        cityTag.textContent = city[i];
        greetTag.textContent = greet[i];

        if(i < myArray.length - 1){
            i++;
        }else{
            i = 0;

        }
        setTimeout(function(){
            slideImages();
        }, 2000)

    }

    window.onload = slideImages;

    // buy tickets


    const ticketBuy = document.querySelectorAll('.ticketBuy');

    const overLay = document.querySelector('.overlay');

    const buyTickets = document.querySelector('.buyTickets');
    
    const close1 = document.querySelector('.close');
    const close2 = document.querySelector('.ticketClose button');

    ticketBuy.forEach(function(ticket){
        
            ticket.addEventListener('click', function(){
          
                overLay.style.bottom = '0%';
                overLay.style.height = '100%';
                buyTickets.style.width = '70vw';
                buyTickets.style.marginTop = '50px';
        })

    });


    close1.addEventListener('click', function(e){
        buyTickets.style.width = '0vw';
        overLay.style.height = '0%';
        overLay.style.bottom = '100%';
        buyTickets.style.marginTop = '0px';
        
    });
    
    close2.addEventListener('click', function(e){
        buyTickets.style.width = '0vw';
        overLay.style.height = '0%';
        overLay.style.bottom = '100%';
        buyTickets.style.marginTop = '0px';

    })