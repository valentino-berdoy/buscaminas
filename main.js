//Constantes del juego
const COLUMNAS = 3;
const FILAS = 3;
const CANTIDAD_MINAS = 2;

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
        mostrarMinas();
        perder();
      }
      else{
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
        descubrirCasillero(columnaPresionada, filaPresionada); //pinta el casillero clickeado. Modificar/completar
        contarMinasAlrededor();
        ganoElJuego();
      }

  
    }
    else {
     pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO)
    }
    
      
    }
    hizoClick = false; 
  }



function ganoElJuego(){
  if (casillerosSinDescubrir==CANTIDAD_MINAS){
    ganar()
    } 


}
function ponerMinasTablero()
{
  for (let contador =0; contador < CANTIDAD_MINAS; contador++){
    filaAleatoria = Math.floor(random(0,FILAS));
    columnaAleatorio = Math.floor(random(0,COLUMNAS));
    if (!tieneMinaCasillero(columnaAleatorio, filaAleatoria)){
      ponerMinaCasillero(columnaAleatorio, filaAleatoria);
    }
    else 
      contador--
    


  }
}

function mostrarMinas()
{
  for (let i=0; i < FILAS; i++)
  {
    for (let j =0; j < COLUMNAS; j++)
    {
      if(tieneMinaCasillero(j,i))
      {
        pintarCasillero(j, i, COLOR_CASILLERO_CON_MINA);
      }
    }
  }
}

function contarMinasAlrededor(columnaPresionada, filaPresionada){
  let cont = 0;

  for (let i = columnaPresionada-1; i <= columnaPresionada+1; i++){
    for (let j = filaPresionada-1; j <= filaPresionada+1; j++){

      if (i >= 0 && i < COLUMNAS && j >= 0 && j < FILAS) {

        if (tieneMinaCasillero(i, j)) {
          cont ++;
        }
      }    
    } 
  }
  return cont;   
}