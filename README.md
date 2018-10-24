* { 
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html{
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

Above code applies a natural box layout and prevents font size adjustments is orientation
*al	`ways include this in main css file
•	Also include reset-css before applying any styles to the webpage. https://www.npmjs.com/package/reset-css
•	@media only screen and (min-width:500px){}
•	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
•	Use html5 tags like header,nav,main,footer,form,table,figure,h1-h6
