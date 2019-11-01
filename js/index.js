// Your code goes here


const mainNavigation = document.querySelector('.main-navigation')

mainNavigation.addEventListener('mouseover', () => {
    mainNavigation.style.backgroundColor = 'green';
    mainNavigation.style.transitionDuration = '2s';
});

mainNavigation.addEventListener('mouseout', () => {
    mainNavigation.style.backgroundColor = 'white';
});


const logo = document.querySelector('.logo-heading');

window.addEventListener('mousemove', () => {
    logo.style.color = "red";
    logo.style.transform = 'scale3d(1.5, 1.5, 1.5)';
    logo.style.transitionDuration = '1s';
    logo.style.fontWeight = "bold";
});

window.addEventListener('mouseout', () => {
    logo.style.fontWeight = 'normal';
    logo.style.color = "black";
    logo.style.transform = 'scale3d(1, 1, 1)'
});


const AllNavLink = document.querySelectorAll('.nav-link');
console.log(AllNavLink);
AllNavLink.forEach(element => {
    element.addEventListener('drag', (event) => {
        event.target.style.transform = 'scale3d(2, 2, 2)';
        event.target.style.color = 'red';
        event.target.style.transitionDuration = '1s';
    }
    )
}
)

AllNavLink.forEach(element => {
    element.addEventListener('dragend', (event) => {
        event.target.style.transform = 'scale3d(1, 1, 1)'
        event.target.style.color = 'black';
    }
    )
}
)

AllNavLink.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale3d(1.3, 1.3, 1.3)';
        event.target.style.color = 'white';
        event.target.style.transitionDuration = '1s'; 
    }
    )
}
)

AllNavLink.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale3d(1, 1, 1)';
        event.target.style.color = 'black';
        event.target.style.transitionDuration = '1s'; 
    }
    )
}
)


AllNavLink.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.transform = 'scale3d(2, 2, 2)';
        event.target.style.opacity = '0.0';
        event.target.style.transitionDuration = '.5s'; 
    }
    )
}
)
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

const btn = document.createElement("BUTTON");
btn.setAttribute('onclick','topFunction()')
btn.textContent = 'TOP';
btn.style.fontSize ='500 rem';
btn.style.cursor ='pointer';
btn.style.padding ='1.2em 2em';
btn.style.color = 'white';
btn.style.fontWeight= 'bold';
 btn.style.borderRadius = '30px';
 btn.style.transition = 'box-shadow .5s ease, transform .2s ease';
 btn.style.willChange = 'transform';
 btn.style.transform = 'translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px)';
 btn.style.position = 'fixed';
 btn.style.bottom = '10px';
 btn.style.right = '10px';
 btn.style.boxShadow = '0 2px 5px rgba(0, 0, 0, .2)';
 btn.style.background = "linear-gradient(135deg, #6e8efb, #a777e3)";



const HT = document.querySelector('body');




window.addEventListener('wheel', () => {
    HT.appendChild(btn);
    
});

const allimg = document.querySelectorAll('img');
console.log(allimg);

allimg.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.transform = 'scale3d(1.5, 1.5, 1.5)';
        event.target.style.color = 'linear-gradient(135deg, #6e8efb, #a777e3)';
        event.target.style.transitionDuration = '1s';
    }
    )
}
)

allimg.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale3d(1, 1, 1)';
        event.target.style.color = 'black';
        event.target.style.transitionDuration = '1s';
    }
    )
}
)
