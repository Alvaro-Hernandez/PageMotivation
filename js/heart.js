document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let mouseheart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    mouseheart.style.left = x+'px';
    mouseheart.style.top = y+'px';

    let size = Math.random() * 80;
    mouseheart.style.width= 20 + size+'px';
    mouseheart.style.height= 20 + size+'px';

    let transformVal = Math.random() * 360;
    mouseheart.style.transform= 'rotate('+transformVal+'deg)';

    body.appendChild(mouseheart);
    setTimeout(function(){
        mouseheart.remove();
    },1000)
})