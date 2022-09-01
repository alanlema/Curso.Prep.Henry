/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
} = require('../homework.js');

describe('nuevaString', function() {
  it('Deberia ser un string', function() {
    expect(typeof nuevaString).toBe('string');
  });
});

var string='Hola';

describe('nuevoNum', function() {
  it('Deberia ser un numero', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

var number=8;

describe('nuevoBool', function() {
  it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

var bool=true;

describe ('nuevaResta', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaResta).toBe(true);
  });
});

const diferencia = 5-1===4;

describe('nuevaMultiplicacion', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaMultiplicacion).toBe(true);
  });
});

const multiplicacion = 5*4===20;

describe('nuevoModulo', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

const modulo = 21%5===1

describe('devolverString(str)', function() {
  it('Deberia devolver el string provisto', function() {
    let string = 'Henry';
    expect(devolverString(string)).toBe(string);
  });
});

var strings = 'Henry'
console.log(strings)

describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
    expect(suma(5, 5)).toBe(10);
    expect(suma(-1, 5)).toBe(4);
  });
});

var y = 5;
y + 5=== 10;

var x = 5;
-1 +5===4;



describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(5, -5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});

var x = 5;
x = x - 5===0;

x = -x -1===-6;

x = x-(-5)===10;

var y = 0;

y - 0===0;


describe('divide(x, y)', function() {
  it('Deberia devolver la division de los dos argumentos', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

var x = 5;
x / 5===1
10 / x===2

var y=11
y / 2===5.5

describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});

var x = 5;
x * 5===25;
10 * -x===-50

var y = 11
y * 0===0
describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

if (15===15) {
console.log(true);
} else {
  (false);
}
 if (90===50) {
  console.log(true);
} else {
  console.log(false);
} 
if (test===test) {
  console.log(true);
} else {
  console.log(false);
}


describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});
let hi = 'hi'
let there = 'there'
if(hi.length===there.lenght) {
  console.log(true);
} else {
  console.log(false);
}

let javascript = 'javascript'
let bumfuzzled = 'bumfuzzled'
if(javascript.lenght===bumfuzzled.lenght) {
  console.log(true);
} else {
  console.log(false);
}



describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

if (15<90) {
  console.log(true);
} else {
  console.log(false);
}

if (90<90) {
  console.log(true);
} else {
  console.log(false);
}

if (100<90) { 
  console.log(true);
} else {
  console.log(false);
}

describe('mayorQueCincuenta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

if (15>50) {
  console.log (true);
} else {
  console.log (false);
}
 if (50>50) {
  console.log (true);
} else {
  console.log (false);
}

if (60>50) {
  console.log (true);
} else {
  console.log (false);
}

describe('obtenerResto(x, y)', function() {
  it('Deberia devolver el resto de dividir x sobre y', function() {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
});

var x=5
15%5===0
21%5===1
22%5===2

describe('esPar(num)', function() {
  it('Deberia devolver true si el numero es par sino false', function() {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

if (6%2===0) {
  console.log (true);
} else {
  console.log (false)
}

if (7%2===0) {
  console.log (true);
} else {
  console.log (false)
}

if (0%2===0) {
  console.log (true)
} else {
  console.log (false);
}
describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});
if (6%2!==2) {
  console.log (true);
} else {
  console.log (false);
}

if (7%2!==2) {
  console.log (true);
} else {
  console.log (true);
}

if (0%2!==2) {
  console.log (true);
} else {
  console.log (false);
}

describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

console.log(Math.pow(6,2));
console.log(Math.pow(7,2));
console.log(Math.pow(0,2));
console.log(Math.pow(-5,2));

describe('elevarAlCubo(num)', function() {
  it('Deberia devolver el numero elevado al cubo', function() {
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

console.log(Math.pow(3,3));
console.log(Math.pow(0,3));
console.log(Math.pow(-5,3));

describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

 console.log(Math.pow(2,2));
 console.log(Math.pow(2,3));
 console.log(Math.pow(0,5));
 console.log(Math.pow(10,1));

describe('redondearNumero(num)', function() {
  it('Deberia devolver el numero redondeado', function() {
    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});

console.log(Math.round(1.5));
console.log(Math.pow(2));
console.log(Math.pow(0.1));

describe('redondearHaciaArriba(num)', function() {
  it('Deberia devolver el numero redondeado para arriba', function() {
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

console.log(Math.ceil(1.5));
console.log(Math.ceil(2));
console.log(Math.ceil(0.1));

describe('numeroRandom()', function() {
  it('Debería devolver un número entre 0 y 1', function() {
    expect(typeof numeroRandom()).toBe('number');
    expect(numeroRandom()).toBeGreaterThanOrEqual(0);
    expect(numeroRandom()).toBeLessThan(1);
  });
});

var aleatorio = Math.random();
function getRandom() {
  return Math.random
}

describe('esPositivo(numero)', function() {
  it('Debería devolver el string \Es positivo ó Es negativo\ según corresponda', function() {
    expect(esPositivo(0)).toBe(false);
    expect(esPositivo(23)).toBe('Es positivo');
    expect(esPositivo(-2)).toBe('Es negativo');
  });
});

if (0===0) {
  console.log (false)
} else {
  console.log (true)
}

if (23>0) {
  console.log ("Es positivo")
} else {
  console.log ("Es negativo")
}

if (-2<0) {
  console.log ("Es positivo")
} else {
  console.log ("Es negativo")
}

describe('agregarSimboloExclamacion(str)', function() {
  it('Deberia agregar un signo de exclamacion al final del string', function() {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});

var a = 'Hello World';
var b = '!';
a = a + b;
console.log(a);

var x = 'Soy Henry';
var y = '!';
x = x + y;
console.log(x);

describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

var a = 'hello';
var b = '';
var c = 'world';
var combinado = a + b + c;
console.log(combinado);

var x = 'Soy';
var y = '';
var z = 'Henry'
var combinado = x + y + z;
console.log(combinado);

describe('obtenerSaludo(name)', function() {
  it('Deberia devolver el string \'Hola {name}!\'', function() {
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});

var a = 'Hola';
var b = 'Martin';
var c = '!';
var saludo = a + b + c;
console.log(saludo);

var x = 'Hola';
var y = 'Antonio';
var z = '!';
var casa = x + y +z;
console.log(casa);
 
describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('Deberia retornar el area correcta del rectangulo', function() {
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});

arearectangulo = 2*2;
console.log(arearectangulo);

arearectangulo = 3*6;
console.log(arearectangulo);

arearectangulo = 0*2;
console.log(arearectangulo);

describe('retornarPerimetro(lado)', function() {
  it('Deberia retornar el perímetro correcto del cuadrado', function() {
    expect(retornarPerimetro(2)).toBe(8);
    expect(retornarPerimetro(8)).toBe(32);
    expect(retornarPerimetro(0)).toBe(0);
  });
});

perimetro = 2*4;
console.log(perimetro);

perimetro = 8*4;
console.log(perimetro);

perimetro = 0*4;
console.log(perimetro);

describe('areaDelTriangulo( base, altura)', function() {
  it('Deberia retornar el area correcta del triángulo', function() {
    expect(areaDelTriangulo(10, 5)).toBe(25);
    expect(areaDelTriangulo(20, 10)).toBe(100);
    expect(areaDelTriangulo(0, 10)).toBe(0);
  });
});

Triangulo = 10*5;
console.log(Triangulo);

Triangulo = 20*10;
console.log(Triangulo);

Triangulo = 0*10;
console.log(Triangulo);

describe('deEuroAdolar(euro)', function() {
  it('Deberia retornar el valor correcto de euro a dolar', function() {
    expect(deEuroAdolar(100)).toBe(120);
    expect(deEuroAdolar(200)).toBe(240);
    expect(deEuroAdolar(50)).toBe(60);
  });
});

dolar = 100*1.2;
console.log(dolar);

dolar = 200*1.2;
console.log(dolar);

dolar = 50*1.2;
console.log(dolar);

describe('esVocal(letra)', function() {
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function() {
    expect(esVocal("la")).toBe("Dato incorrecto");
    expect(esVocal("pero")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function() {
    expect(esVocal("l")).toBe("Dato incorrecto");
    expect(esVocal("p")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Es vocal", si el valor ingresado lo es', function() {
    expect(esVocal('a')).toBe('Es vocal');
    expect(esVocal('e')).toBe('Es vocal');
    expect(esVocal('i')).toBe('Es vocal');
    expect(esVocal('o')).toBe('Es vocal');
    expect(esVocal('u')).toBe('Es vocal');
  });
});
let la = 'la'

if (la.lenght>1) {
  console.log ("Dato incorrecto");
}

let pero= 'pero'
if (pero.lenght>1) {
  console.log ("Dato incorrecto");
}

let l='l'
if (l==!a) {
  console.log ("Dato incorrecto");
}
let p='p'
if (p==!a) {
  console.log ("Dato incorrecto");
}
let letra= 'a, e, i, o, u'
if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log ("Es vocal");
}