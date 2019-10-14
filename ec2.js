document.getElementById('version').innerHTML = 'version: 1';
document.getElementById('calc').addEventListener('click', solve_ec2);

function solve_ec2(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var delta = b * b - 4 * a * c ;
    var x1_re, x1_im, x2_re, x2_im;
    if(delta >= 0){
        x1_re = (-b - Math.sqrt(delta)) / (2*a);
        x2_re = (-b + Math.sqrt(delta)) / (2*a);
        x1_im = 0;
        x2_im = 0;
    } else {
        x1_re = -b / (2*a);
        x2_re = -b / (2*a);
        x1_im = -Math.sqrt(-delta) / (2*a);
        x2_im = Math.sqrt(-delta) / (2*a);
    }
    document.getElementById('x1').innerHTML = 'x1 = ' + x1_re + '+' + x1_im + 'i';
    document.getElementById('x2').innerHTML = 'x2 = ' + x2_re + '+' + x2_im + 'i';
}
