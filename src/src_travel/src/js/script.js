require('es6-promise').polyfill();    
require('nodelist-foreach-polyfill');
require('formdata-polyfill'); // that's it   

    window.addEventListener('DOMContentLoaded', function() {
        "use strict";
    
        let calc = require('./parts/calc'),
            modal = require('./parts/modal'),
            slider = require('./parts/slider'),
            tabs = require('./parts/tabs'),
            timer = require('./parts/timer'),
            forum = require('./parts/forum');

            calc();
            modal();
            slider();
            tabs();
            timer();
            forum();
            
    });
    

    // es6 modul
//export let one = 1;
// let two = 2;

// export {two);


//  export function sayHi() {
//      console.log('Hello')
//  }   
    
//  for import

//  import {one, two} from './script';


