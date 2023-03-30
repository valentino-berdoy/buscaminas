//Constantes del juego
const COLUMNAS = 5;
const FILAS = 5;
const CANTIDAD_MINAS = 5;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir=FILAS*COLUMNAS;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");
 ponerMinasTablero();
  // Modificar/completar
}


function draw() {
  if (hizoClick == true)
  {
    if (mouseButton == LEFT){
      if (tieneMinaCasillero(columnaPresionada,filaPresionada)== true){
        perder();
      }
      else{
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
        descubrirCasillero(columnaPresionada, filaPresionada); //pinta el casillero clickeado. Modificar/completar
      }

  
    }
    else{
     pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO)
    }
    
      
    }
if(ganoElJuego==true){
  gano()
}
    
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }



function ganoElJuego(){
  if (casillerosSinDescubrir==CANTIDAD_MINAS){
    return true;  
    } 
  else{
    return false;
  }

}
function ponerMinasTablero(ponerMinaCasillero)
{
  for (let contador =0; contador<CANTIDAD_MINAS; contador++);{
    filaAleatoria = Math.floor(random(0,FILAS));
    columnaAleatorio = Math.floor(random(0,COLUMNAS));
    ponerMinaCasillero(numeroAleatorio1, numeroAleatorio2);

    //ToDo: no se repitan las minas en el mismo casillero
  }
}

function mostrarMinas(){

}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}