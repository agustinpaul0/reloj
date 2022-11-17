const inicioReloj = () => {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    ap = (hr < 12) ? '<span>A.M</span>' : '<span>P.M</span>';
    hr = (hr == 0) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.querySelector('.hrs').innerHTML = hr;
    document.querySelector('.mins').innerHTML = min;
    document.querySelector('.secs').innerHTML = sec;
    document.querySelector('.time').innerHTML = ap;

    let tiempo = setTimeout(function() { inicioReloj() }, 500);

    function checkTime (i) {
        if( i < 10 ) {
            i = "0" + i;
        }

        return i;
    }
}