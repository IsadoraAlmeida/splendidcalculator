function insert(val){
    if(val == 'c') {
        document.screen.visor.value = ''
    } else if (val == '=') {
        let str = document.screen.visor.value 
        if(str != ''){
            document.screen.visor.value = eval(str)
        }
    } else if (val == '<') {
        let len = document.screen.visor.value.length
        document.screen.visor.value = document.screen.visor.value.substring(0, len-1);
    } else {
        document.screen.visor.value = document.screen.visor.value + val;
    }
}

function typeWriter(element) {
    const textArray = "Just a perfectly splendid calculator!".split('');
    element.innerHTML = '   ';
    textArray.forEach((c, i) => {
        setTimeout(() => {
            element.innerHTML += c;
        }, 150 * i); 
    });
}

typeWriter(document.querySelector('h1'));
