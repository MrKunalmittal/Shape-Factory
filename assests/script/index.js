/*------------------------------------------------
    object oriented js
    Kunal mittal

    Assignment 02
    
-------------------------------------------------- */

'use strict';


import { Shapes } from './Shapes.js';
import { select , onEvent, getElement, print} from './utilis.js';


const optionColors = {
    Blue: '#09f',
    Green: '#9f0',
    Orange: '#f90',
    Pink: '#f09',
    Purple: '#90f'
}
const shapes = select('.shapes');
const colors = select('.colors');
const button = select('.btn');
const grid = select('.grid');
const data = select('.data p');
const dataOne = select('.data-1 p');

const arrrayOfShapes = [];



onEvent('click' ,button, function(){
    if(arrrayOfShapes.length > 23){
        return;
    }
        const shape = new Shapes();

        shape.name = shapes.value;

        const box = document.createElement("div");
        box.classList.add(shape.name);
        box.style.backgroundColor = optionColors[colors.value];
        
        grid.appendChild(box);
        arrrayOfShapes.push(box);
    // } else {
    //     data.innerText = 'Container is full';
    // }

    onEvent('click', box, function(){
        
        dataOne.innerText = `${arrrayOfShapes.indexOf(box) + 1}`;
    });
    
});



