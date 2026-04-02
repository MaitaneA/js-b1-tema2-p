//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.3 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.2, ampliar la definición de la clase "Triangle" que representará los distintos triángulos 
	de un app de geometría , de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Sabemos que, dados dos triángulos rectangulos, si los enfrentamos juntándolos por sus ángulos rectos formarán un polígono, de manera que el perímetro 
	exterior de	este nuevo polígono será la suma del perímetro de ambos rectángulos más el valor absoluto de la resta de ambas alturas, con esto necesitamos, 
	dados dos triángulos rectángulos, obtener el perímetro exterior del polígono que conforman definiendo un nuevo método llamado rightTriangleUnion.
	- Tambien es necesario saber, dado un Polígono formado por una serie de triángulos (que nos llegarán en un Array), obtener cuál es el área de ese polígono
	con un nuevo médodo llamado areaPoligon. (Nota: el área de la superficie de un polígono formado por triángulos es la suma de las áreas de estos triángulos).
	- Así mismo, nos piden, con el fin de poder saber si un triángulo es equilátero o no, un método (al que llamaremos isEquilateral) que accediendo a sus propiedades 
	base y height, nos devuelva	si el triángulo es equilátero; NOTA: una propiedad de los triángulos equiláteros es que su altura siempre es igual a la base por la raiz 
	cuadrada de tres dividido entre dos (height = (base*√3) / 2 ). Para comprobarlo, un ejemplo de triángulo equilátero sería uno con una base de 10 y una altura de 10 * √3 / 2.
	como este por ejemplo:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
  
	En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
	Finalmente, crea al menos 3 objetos de la clase Triangle y haz 3 llamadas a estos nuevos métodos.
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Triangle{
  constructor(base, height, rightTriangle) {
    this.base = base;
    this.height = height;
    this.rightTriangle = rightTriangle;
  };

  get areaTriangle() {
    return (this.base * this.height) / 2;
  };

  get rightHypotenuse() {
    if (!this.rightTriangle) return undefined;

    function hypotenuse(a,b) {
      function square(x) {
        return x*x;
      }

      return Math.sqrt(square(a) + square(b));
    }

    return hypotenuse(this.base, this.height);
  };

  get rightPerimeter() {
    return this.rightTriangle ? this.rightHypotenuse + this.base + this.height : undefined;
  };

  isEquilateral() {
	if (this.height === (this.base * Math.sqrt(3)) / 2) return true;
	else return false;
  };

  static rightTriangleUnion(triangle1, triangle2) {
	if (triangle1.rightTriangle && triangle2.rightTriangle) {
		return triangle1.rightPerimeter + triangle2.rightPerimeter + Math.abs(triangle1.height - triangle2.height);
	} else return undefined;
  };

  static areaPoligon(triangles) {
	let totalArea = 0;
	triangles.forEach((triangle) => {
		totalArea += triangle.areaTriangle;
	});

	return totalArea;
  };
};

const myTriangle1 = new Triangle(10, 5, true);
const myTriangle2 = new Triangle(15, 7, false);
const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);

console.log(Triangle.rightTriangleUnion(myTriangle1, myTriangle2));
console.log(Triangle.areaPoligon([myTriangle1, myTriangle2, myEquilateral]));
console.log(myEquilateral.isEquilateral());
console.log(myTriangle1.isEquilateral());

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Triangle;
}