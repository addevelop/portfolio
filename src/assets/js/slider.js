var _container;
var _page;
var _scroll;
var _scrollTime;
var _transform;
var _scrollNb;
var _load = false;
document.addEventListener('DOMContentLoaded', () => {
    _scroll = 0;
    _scrollTime = true;
    _transform = 0;

    window.scrollTo(0, 0);
    document.addEventListener('wheel', (e) => {
        if(!_load)
        {
            _container = document.getElementById('ID-slider');
            _scrollNb = document.querySelectorAll('.sliderNb');
            _page = document.querySelectorAll('.page');

            _load = true;
        }
        

        scrollSlider(e)
    })
})

function scrollSlider(e)
{
    if(_scrollTime)
    {
        if(e.deltaY > 0)
        {
            scrollDown();
        }
        else
        {
            scrollUp();
        }
        _scrollTime = false;
        setTimeout(() => _scrollTime = true, 1000);
    }
    
}

function scrollDown()
{
    if(_scroll < _page.length -1)
    {
        _scroll++;
        _transform = _transform - _page[0].offsetHeight;
        _container.style.transform = 'translateY(' + _transform + 'px)';
        removeClass();
        pageAppear();
        profilAppear();
    }
    

}

function scrollUp()
{
    if(_scroll > 0)
    {
        _scroll--;
        _transform = _transform + _page[0].offsetHeight;
        _container.style.transform = 'translateY(' + _transform + 'px)';
        removeClass();
        pageAppear();
        profilAppear();
    }
    
    
}

function removeClass()
{
    console.log(_scrollNb);
    _scrollNb.forEach(nb => {
        nb.classList.remove('activeNb');
    })

    _scrollNb[_scroll].classList.add('activeNb')
}

function pageAppear()
{
    _page.forEach(page => {
        page.style.opacity = '0';
        console.log(page);

    })

    _page[_scroll].style.opacity = '1';
}

function profilAppear()
{
    var profil = document.getElementById('ID-profil');
    if(_scroll > 0)
    {
        profil.classList.remove('profilActive');
    }
    else
    {
        profil.classList.add('profilActive');
    }

}