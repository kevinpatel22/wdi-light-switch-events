document.addEventListener('DOMContentLoaded', function() {
    const status = document.querySelector('.status');
    const swtch = document.querySelector('.switch');
    const background = document.querySelector('.light');

    swtch.addEventListener('click', function() {
        console.log(swtch.classList);
        if (swtch.classList.contains('on')) {
            // console.log('on')
            swtch.classList.remove('on');
            swtch.classList.add('off');
            background.classList.remove('light');
            background.classList.add('dark');
            background.style.backgroundColor = 'black';
            status.innerText = "Bed time! zzzz zzzz";
            status.style.color = 'white';
        } else if (swtch.classList.contains('off')) {
            // console.log('off')
            swtch.classList.add('on');
            swtch.classList.remove('off');
            background.classList.add('light');
            background.classList.remove('dark');
            background.style.backgroundColor = 'white';
            status.innerText = "It's so bright in here!";
            status.style.color = 'black';
        }
        console.log('Clicked')
    })

});


