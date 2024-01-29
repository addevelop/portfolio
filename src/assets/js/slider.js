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
            if(_scroll < _page.length -1)
            {
                _scroll++;
            }
        }
        else
        {
            if(_scroll > 0)
            {
                _scroll--;
                    
            }
        }
        removeClass();
        pageAppear();
        profilAppear();
        _scrollTime = false;
        setTimeout(() => _scrollTime = true, 1000);
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
        page.style.display = 'none';

    })
    if(_scroll > 1)
    {
        document.querySelector('body').style.transitionDuration = "1s";
        document.querySelector('body').style.backgroundColor = "black";
    }
    else
    {
        document.querySelector('body').style.backgroundColor = "#3586ff";
    }
    _page[_scroll].style.display = 'block';
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
export function getScroll()
{
    return _scroll;
}