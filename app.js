// Projects Requirements
// change the background color by genaratting random rgb color by clicking a button


// Step-1: create onload handler or function
window.onload = () => {
    main()
}
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const h1 = document.getElementById('h1');
    const output = document.getElementById('output');


    btn.addEventListener('click', function(){
        const bgColor = genaratorHexColor();
        root.style.backgroundColor = bgColor;
        h1.style.color = bgColor;
        output.value = bgColor;
    })

}
// step-2: random color genarator function
function genaratorHexColor(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue= Math.floor(Math.random()*255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step-3:collect all nesessery referance
// step-4: handle the click event

