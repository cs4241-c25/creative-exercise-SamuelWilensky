const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">\n' +
        '<defs>\n' +
        '    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">\n' +
        '      <stop offset="0%" stop-color="red" />\n' +
        '      <stop offset="100%" stop-color="blue" />\n' +
        '    </radialGradient>\n' +
        '  </defs>  ' +
        '<circle id="circle1" cx="50" cy="50" r="25" fill="url(#grad1)" />\n' +
        '</svg><svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <rect id="square" width="50" height="50" style="fill:teal;" />\n' +
    '</svg><br/><button onclick="widenSquare()">enlarge</button><script>' +
        'const widenSquare = function(){\n' +
        '    console.log( "widenSquare()" );\n' +
        '    document.getElementById("square").setAttribute("width", "100");\n' +
        '}' +
        '</script>');
})

const widenSquare = function(){
    console.log( "widenSquare()" );
    document.getElementById("square").setAttribute("width", "100");
}


app.use(express.static('public'))

app.listen(3000);
//document.getElementById("square").setAttribute("width", 100)