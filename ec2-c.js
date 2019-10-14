document.getElementById('version').innerHTML = 'version: 4';
document.getElementById('calc').addEventListener('click', solve_ec2);


class t_ec2 {
    a; b; c;
    x1_re; x1_im; x2_re; x2_im;

    read_coefficients(){
        this.a = document.getElementById('a').value;
        this.b = document.getElementById('b').value;
        this.c = document.getElementById('c').value;
    }


    compute_this(){
        var delta = this.b * this.b - 4 * this.a * this.c ;

        if(delta >= 0){
            this.x1_re = (-this.b - Math.sqrt(delta)) / (2*this.a);
            this.x1_im = (-this.b + Math.sqrt(delta)) / (2*this.a);
            this.x2_re = 0;
            this.x2_im = 0;
        } else {
            this.x1_re = -this.b / (2*this.a);
            this.x1_im = -this.b / (2*this.a);
            this.x2_re = -Math.sqrt(-delta) / (2*this.a);
            this.x2_im = Math.sqrt(-delta) / (2*this.a);
        }
    }


    print_solutions(){
        document.getElementById('x1').innerHTML = 'x1 = ' + this.x1_re + ' + ' + this.x1_im + ' i';
        document.getElementById('x2').innerHTML = 'x2 = ' + this.x2_re + ' + ' + this.x2_im + ' i';
    }
}


function solve_ec2(){
    var ec2 = new t_ec2();
    ec2.read_coefficients();
    ec2.compute_solutions();
    ec2.print_solutions();
}
