# Tailwind CSS Converter px-to-rem

## Installation

    npm install tailwindcss-convert-px-to-rem
    //or
    yarn add tailwindcss-convert-px-to-rem

### Tailwind Config

    module.exports  =  { 
	    content:  ["./src/**/*.{html,js}"],
	    theme:  { 
		    extend:  {}, 
		}, 
		plugins:  [require('@tailwindcss-convert-px-to-rem')], //add here a plugin
	}

## Usage
You need add variant "rem:" before class. For, example:

    <div class="rem:mt-[16px]">Hello World!</div> //convert to 1rem
    <div class="rem:-top-[2px]">Hello World!</div> //convert to -0.125rem
    
    <div class="mt-[16px]">Hello World!</div> //not convert to rem
    
