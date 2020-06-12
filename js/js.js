// slider
var cont1=document.getElementById('1'),
    cont2=document.getElementById('2'),
    cont3=document.getElementById('3');
var but1=document.getElementById('n1'),
    but2=document.getElementById('n2'),
    but3=document.getElementById('n3');

but1.onclick=function ()
{
    if(!but1.classList.contains('active'))
    {
        but1.classList.add('active');
        if(!cont1.classList.contains('active'))
            cont1.classList.add('active');
    }
    if(but2.classList.contains('active')&&cont2.classList.contains('active'))
    {
        but2.classList.remove('active');
        cont2.classList.remove('active');
    }
    if(but3.classList.contains('active')&&cont3.classList.contains('active'))
    {
        but3.classList.remove('active');
        cont3.classList.remove('active');
    }
}

but2.onclick=function ()
{
    if(!but2.classList.contains('active'))
    {
        but2.classList.add('active');
        if(!cont2.classList.contains('active'))
            cont2.classList.add('active');
    }
    if(but1.classList.contains('active')&&cont1.classList.contains('active'))
    {
        but1.classList.remove('active');
        cont1.classList.remove('active');
    }
    if(but3.classList.contains('active')&&cont3.classList.contains('active'))
    {
        but3.classList.remove('active');
        cont3.classList.remove('active');
    }
}
but3.onclick=function ()
{
    if(!but3.classList.contains('active'))
    {
        but3.classList.add('active');
        if(!cont3.classList.contains('active'))
            cont3.classList.add('active');
    }
    if(but2.classList.contains('active')&&cont2.classList.contains('active'))
    {
        but2.classList.remove('active');
        cont2.classList.remove('active');
    }
    if(but1.classList.contains('active')&&cont1.classList.contains('active'))
    {
        but1.classList.remove('active');
        cont1.classList.remove('active');
    }
}

// linkes

var home=document.getElementById('home'),
    about=document.getElementById('abo'),
    serves=document.getElementById('ser'),
    por=document.getElementById('por'),
    con=document.getElementById('con');

function check()
{
    if(home.classList.contains('active'))
        home.classList.remove('active');
    if(about.classList.contains('active'))
        about.classList.remove('active');
    if(serves.classList.contains('active'))
        serves.classList.remove('active');
    if(por.classList.contains('active'))
        por.classList.remove('active');
    if(con.classList.contains('active'))
        con.classList.remove('active');

} 
home.onclick=function()
{
    check();
    home.classList.add('active');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
}
about.onclick=function()
{
    check();
    about.classList.add('active');
    window.scrollTo({
        top: document.getElementById('about1').offsetTop,
        left: 0,
        behavior: 'smooth'
        });
   

}
serves.onclick=function()
{
    check();
    serves.classList.add('active');
    window.scrollTo({
        top: document.getElementById('s').offsetTop,
        left: 0,
        behavior: 'smooth'
        });
    console.log("dasd");
}
por.onclick=function()
{
    check();
    por.classList.add('active');
    window.scrollTo({
        top: document.getElementById('p').offsetTop,
        left: 0,
        behavior: 'smooth'
        });
    console.log("dasd");
}
con.onclick=function()
{
    check();
    con.classList.add('active');
    window.scrollTo({
        top: document.getElementById('c').offsetTop,
        left: 0,
        behavior: 'smooth'
        });
    console.log("dasd");
}
window.onscroll =function()
{
    if(scrollY<=document.getElementById('about1').offsetTop)
    {
        check();
        home.classList.add('active');
    }
    if(scrollY>=document.getElementById('about1').offsetTop-200)
    {
        check();
        about.classList.add('active');
    }
    if(scrollY>=document.getElementById('s').offsetTop-700)
    {
        check();
        serves.classList.add('active');
    }
    if(scrollY>=document.getElementById('p').offsetTop-350)
    {
        check();
        por.classList.add('active');
    }
    if(scrollY>=document.getElementById('c').offsetTop-350)
    {
        check();
        con.classList.add('active');
    }

    
}