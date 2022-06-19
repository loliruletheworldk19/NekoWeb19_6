console.log('main.js is running');
//window.location.href = './loginPage.html'
var getRoot = document.querySelector(':root');

/////////////////////////////////////////////////////////////


cck.addEventListener('mouseover',(e) => {
    console.log('BTN was click');
    cck();
    function cck() {
        var cckConst = document.getElementById('cck');
        console.log('function cck run:')
        cckConst.style.animationName = 'leftTOrightShowControlMode'
        cckConst.style.animationDuration = '0.5s';
        setTimeout(function(){
            //document.getElementById('sliderRound').style.visibility = 'visible'
            //document.getElementById('test').style.visibility = 'visible'
            document.getElementById('test').style.display = 'flex'
            cckConst.style.display = 'none';
        }, 488);
    }
})
cch.addEventListener('mouseover',(e) => {
    console.log('BTN was click');
    cch();
    function cch() {
        var cchConst = document.getElementById('cch');
        console.log('function cck run:')
        cchConst.style.animationName = 'leftTOrightShowControlMode'
        cchConst.style.animationDuration = '0.5s';
        setTimeout(function(){
            //document.getElementById('sliderRound').style.visibility = 'visible'
            //document.getElementById('test').style.visibility = 'visible'
            document.getElementById('test').style.display = 'flex'
            cchConst.style.display = 'none';
        }, 488);
    }
})
function functionSetMode() {
    var checkMode = document.getElementById('SetMode');
    var cckConst = document.getElementById('cck');
    var cchConst = document.getElementById('cch');
    var changeMode = document.getElementById('test');

    console.log('Event Set mod was Run!!')
    if(checkMode.checked == true) {
        console.log('Checked = true')
        //sliderRound.style.backgroundColor = 'var(--black-color)';
        setTimeout(function(){
            changeMode.style.backgroundColor = 'var(--black-color)';
            getRoot.style.setProperty('--white-color', '#222222');
            getRoot.style.setProperty('--font-color', '#888888');
            getRoot.style.setProperty('--black-to-main', '#fefefe');
            document.getElementById('tests').style.display = 'block';
        }, 123);
        setTimeout(function(){
            getRoot.style.setProperty('--white-color', '#222222');
            getRoot.style.setProperty('--font-color', '#888888');
            getRoot.style.setProperty('--black-to-main', '#fefefe');
            changeMode.style.display = 'none';
            document.getElementById('btnDarkMode').style.display = 'block';
            document.getElementById('btnLightMode').style.display = 'none';
        }, 400);
        setTimeout(function(){
            //changeMode.style.visibility = 'hidden';
            cchConst.style.display = 'block'
            cchConst.style.animationName = 'rightTOleftShowControlMode'
            cchConst.style.animationDuration = '0.7s'
        }, 411);
    } else {
        console.log('Checked = false')
        //sliderRound.style.backgroundColor = 'var(--white-color)';
        setTimeout(function(){
            changeMode.style.backgroundColor = 'var(--white-color)';
            getRoot.style.setProperty('--white-color', '#fefefe');
            getRoot.style.setProperty('--font-color', '#323232');
            getRoot.style.setProperty('--black-to-main', '#323232');
            document.getElementById('tests').style.display = 'none';
        }, 123);
        setTimeout(function(){
            getRoot.style.setProperty('--white-color', '#fefefe');
            getRoot.style.setProperty('--font-color', '#323232');
            getRoot.style.setProperty('--black-to-main', '#323232');
            changeMode.style.display = 'none';
            document.getElementById('btnDarkMode').style.display = 'none';
            document.getElementById('btnLightMode').style.display = 'block';
        }, 400);
        setTimeout(function(){
            //changeMode.style.visibility = 'hidden';
            cckConst.style.display = 'block';
            cckConst.style.animationName = 'rightTOleftShowControlMode'
            cckConst.style.animationDuration = '0.7s'
        }, 411);
    }
}

    // console.log('Checked!!!')
    // cckConst.style.display = 'block';
    // cckConst.style.animationName = 'rightTOleftShowControlMode'
    // cckConst.style.animationDuration = '0.6s';
    // setTimeout(function(){
    //     document.getElementById('sliderRound').style.visibility = 'hidden' 
    //     document.getElementById('test').style.visibility = 'hidden'
    // }, 500);