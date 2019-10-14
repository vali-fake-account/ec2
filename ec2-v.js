document.getElementById('version').innerHTML = 'version: 2';
document.getElementById('calc').addEventListener('click', solve_ec2);


function read_coefficients(){
    var coefficients = [];
    coefficients.push(document.getElementById('a').value);
    coefficients.push(document.getElementById('b').value);
    coefficients.push(document.getElementById('c').value);

    return coefficients;
}


function compute_solutions(coefficients){
    solutions = [];
    var delta = coefficients[1] * coefficients[1] - 4 * coefficients[0] * coefficients[2] ;

    if(delta >= 0){
        solutions.push((-coefficients[1] - Math.sqrt(delta)) / (2*coefficients[0]));
        solutions.push((-coefficients[1] + Math.sqrt(delta)) / (2*coefficients[0]));
        solutions.push(0);
        solutions.push(0);
    } else {
        solutions.push(-coefficients[1] / (2*coefficients[0]));
        solutions.push(-coefficients[1] / (2*coefficients[0]));
        solutions.push(-Math.sqrt(-delta) / (2*coefficients[0]));
        solutions.push(Math.sqrt(-delta) / (2*coefficients[0]));
    }

    return solutions;
}


function print_solutions(solutions){
    document.getElementById('x1').innerHTML = 'x1 = ' + solutions[0] + ' + ' + solutions[1] + ' i';
    document.getElementById('x2').innerHTML = 'x2 = ' + solutions[2] + ' + ' + solutions[3] + ' i';
}


function solve_ec2(){
    var coefficients = read_coefficients();
    var solutions = compute_solutions(coefficients);
    print_solutions(solutions);
}
