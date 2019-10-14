document.getElementById('version').innerHTML = 'version: 2';
document.getElementById('calc').addEventListener('click', solve_ec2);


function read_coefficients(){
    var coefficients = {};
    coefficients.a = document.getElementById('a').value;
    coefficients.b = document.getElementById('b').value;
    coefficients.c = document.getElementById('c').value;

    return coefficients;
}


function compute_solutions(coefficients){
    solutions = [];
    var delta = coefficients.b * coefficients.b - 4 * coefficients.a * coefficients.c ;

    if(delta >= 0){
        solutions.x1_re = (-coefficients.b - Math.sqrt(delta)) / (2*coefficients.a);
        solutions.x1_im = (-coefficients.b + Math.sqrt(delta)) / (2*coefficients.a);
        solutions.x2_re = 0;
        solutions.x2_im = 0;
    } else {
        solutions.x1_re = -coefficients.b / (2*coefficients.a);
        solutions.x1_im = -coefficients.b / (2*coefficients.a);
        solutions.x2_re = -Math.sqrt(-delta) / (2*coefficients.a);
        solutions.x2_im = Math.sqrt(-delta) / (2*coefficients.a);
    }

    return solutions;
}


function print_solutions(solutions){
    document.getElementById('x1').innerHTML = 'x1 = ' + solutions.x1_re + ' + ' + solutions.x1_im + ' i';
    document.getElementById('x2').innerHTML = 'x2 = ' + solutions.x2_re + ' + ' + solutions.x2_im + ' i';
}


function solve_ec2(){
    var coefficients = read_coefficients();
    var solutions = compute_solutions(coefficients);
    print_solutions(solutions);
}
