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
    if(arrrayOfShapes.length < 24){
  
        let shape2 = new Shapes (colors.value,shapes.value);

        // shape.name = shapes.value;

        let box = document.createElement("div");
        box.classList.add(shapes.value);
        box.style.backgroundColor = optionColors[colors.value];
        
        arrrayOfShapes.push(shape2);
        grid.appendChild(box);
        onEvent('click', box, function(){
            console.log('hello')
            dataOne.innerText = `Info: ${arrrayOfShapes.indexOf(shape2) + 1} ${shape2.getInfo()}`;
        });
    } else {
        data.innerText = 'Container is full';
    }


   

    
});



