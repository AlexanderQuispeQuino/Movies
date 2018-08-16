import React, {Component} from 'react';

import { hydrate } from 'react-dom';
import tshirt from '../resources/images/tshirt.jpg';
import heartPopup from '../resources/Icons/heart.svg';


import data from '../api.json';
console.log(data);





class Home extends Component{
  render(){
    const playlist = [
        {
          "title": "Storm y la carta prohibida de Lutero ",
          "genero": "ficcion",
          "type": "video",
          "heart":"8.5",
          "popularity":"90",
          "votos":"1300",
          "fecha":"27 Nov",
          "sinopsis":"El padre de Storm es atrapado por la Inquisición por imprimir un panfleto secreto de Martin Luther. Su hijo, se escapa con la plancha original y se sabe las letras impresas originales, convirtiéndose en el objetivo de la cacería de la Inquisición. Marieke, una chica huérfana y misteriosa que vive en las alcantarillas subterráneas de Amberes le ayuda a esconderse y a intentar salvar a su padre.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Storm_Letters_van_Vuur_poster_holanda.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 1
        },
        {
          "title": "The Unity of Heroes",
          "genero": "accion",
          "type": "video",
          "heart":"8.1",
          "popularity":"80",
          "votos":"1500",
          "fecha":"15 Set",
          "sinopsis":"Durante la dinastía Ching, un extraño llega a la ciudad para ayudar a los drogadictos. Sin embargo, el hombre lleva a cabo en secreto pruebas poco ortodoxas sobre sus pacientes, transformándolos en guerreros de increíble fuerza y ​​locura. Uno de ellos huye y termina en la escuela del maestro Wong Fei-Hung.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/The_Unity_of_Heroes_poster_china.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 2
        },

       {
          "title": "Ouija Seance: The Final Game",
          "genero": "Terror",
          "type": "video",
          "heart":"10.5",
          "popularity":"100",
          "votos":"2300",
          "fecha":"1 Dic",
          "sinopsis":"Sarah y sus amigos deciden pasar el fin de semana en una antigua villa que Sarah heredó misteriosamente. Después de encontrar una tabla Ouija en el ático, Sarah y sus amigos, sin saberlo, despiertan una fuerza maléfica relacionada con los secretos ocultos que hay en la villa.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Ouija_Seance_The_Final_Game_poster_italia.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 3
        },
        {
          "title": "The Lodgers ",
          "genero": "Drama",
          "type": "video",
          "heart":"7.5",
          "popularity":"60",
          "votos":"1000",
          "fecha":"10 Agos",
          "sinopsis":"Año 1920, Irlanda rural. Los gemelos Rachel y Edward llevan un extraño estilo de vida junto con su familia. Cada noche, la propiedad donde viven se convierte en el dominio de una presencia siniestra, los “lodgers”, que obligan a los gemelos a cumplir 3 reglas: deben estar en la cama a medianoche; no pueden permitir que un forastero pase el umbral de la vivienda; si alguien intenta escapar, la vida de otra persona estará en peligro.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/02/The_Lodgers_poster_irlanda.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 4
        },
        {
          "title": "I Kill Giants ",
          "genero": "ficcion, suspenso",
          "type": "video",
          "heart":"9.5",
          "popularity":"90",
          "votos":"2300",
          "fecha":"20 Oct",
          "sinopsis":"La historia versa sobre una joven inadaptada que lucha tanto contra monstruos reales como imaginarios. Ella está convencida de que los gigantes son reales y están llegando, y se siente responsable de evitar que esto suceda. Saldana interpretará a la psicóloga escolar Mrs. Mollé, quien juega un papel clave a la hora de ayudar a Bárbara tanto con sus amenazas internas como externas, formándose un vínculo inspirador entre ambas durante el proceso.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/03/I_Kill_Giants_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 5
        },
        {
          "title": "Boonie Bears 3 : El gran secreto",
          "genero": "Animado, Aventura ",
          "type": "video",
          "heart":"7.5",
          "popularity":"97",
          "votos":"1500",
          "fecha":"23 Sep",
          "sinopsis":"El oso Briar no está contento con su vida y decide unirse al circo. Éste está dirigido por Hugo el Gorila y allí hace nuevos amigos y consigue sentirse plenamente feliz. Bramble, el hermano de Briar y sus amigos están desesperados por encontrarle y, por fin, lo localizan actuando una noche. El problema está en que Briar no quiere ser encontrado ni abandonar su nueva vida.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Boonie_Bears_3_poster_china.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 6
        },
        {
          "title": "Bad Samaritan (Latidos en la oscuridad) ",
          "genero": "Terror",
          "type": "video",
          "heart":"7.3",
          "popularity":"90",
          "votos":"1520",
          "fecha":"23 Ago",
          "sinopsis":"Un par de jóvenes utilizan su trabajo para robar en las casas de sus ingenuos clientes. Todo va bien para estos dos ladrones hasta que un día entran en el lugar equivocado y se encuentran a una mujer que ha sido secuestrada.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Bad_Samaritan_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 7
        },
        {
          "title": "Jóvenes Titanes en acción!",
          "genero": "Animado, Aventura ",
          "type": "video",
          "heart":"3.9",
          "popularity":"90",
          "votos":"1560",
          "fecha":"28 Nov",
          "sinopsis":"Cuando los Jóvenes Titanes se enteran de que otros superhéroes de DC han realizado sus propias películas, estos buscaran encontrar en un viaje épico un director perfecto para su debut en la gran pantalla, pero un viejo enemigo tiene otras ideas planeadas para ellos.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Teen_Titans_Go_To_the_Movies_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 8
        },
        {
          "title": "The Yellow Birds ",
          "genero": "Acción, Aventura",
          "type": "video",
          "heart":"3.9",
          "popularity":"90",
          "votos":"1560",
          "fecha":"28 Nov",
          "sinopsis":"Sigue a John Bartle y las dificultades a las que se enfrenta para mantener su humanidad, sus ganas de sobrevivir y a su amigo Murph vivo durante la guerra en Irak, así como su vida y luchas internas con sus recuerdos de la guerra después de que vuelva a Virginia.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/The_Yellow_Birds_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 9
        },
        {
          "title": "The Tale",
          "genero": "Suspenso ",
          "type": "video",
          "heart":"5.9",
          "popularity":"80",
          "votos":"1360",
          "fecha":"28 Oct",
          "sinopsis":"Una exploración de la memoria de una mujer cuando ésta se ve obligada a revaluar su primera relación sexual y sus historias basadas en el autoengaño.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/06/The_Tale_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 10
        },
        {
          "title": "JShow Dogs(Superagente canino)",
          "genero": "Comedia",
          "type": "video",
          "heart":"9.9",
          "popularity":"95",
          "votos":"1300",
          "fecha":"20 Diciembre",
          "sinopsis":"Después de su fallido intento para rescatar a un bebé de panda robado, el oficial canino Max (un solitario y fuerte Rottweiler) deberá trabajar junto a Frank (un agente humano del FBI) e infiltrarse en el siguiente objetivo de los ladrones: un certamen canino en Las Vegas.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/08/Show_Dogs_poster_usa.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 11
        },
        {
          "title": "Lean on Pete ",
          "genero": "ficcion, suspenso",
          "type": "video",
          "heart":"9.5",
          "popularity":"99",
          "votos":"1100",
          "fecha":"20 Oct",
          "sinopsis":"Charlie Thompson, un chico de quince años que es abandonado a su suerte por su padre, emprende junto a un caballo de carreras robado un peligroso viaje en busca de su tía, de la cual no tiene noticias desde hace tiempo, y un nuevo hogar.",
          "cover": "http://gnula.nu/wp-content/uploads/2018/05/Lean_on_Pete_poster_inglaterra.jpg",
          "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
          "id": 12
        }
      ]
      return (
        <div className="container">

          <div className="container-centro">
            <div className="container-layout-peliculas">
            {
              playlist.map((video)=>{

                return  (
              <div className="item level-1 zoom" >
                  <img src={video.cover} alt="pelicula"/>
                    <div className="container-pelicula">
                      <h3 className="nombre-pelicula">{video.title}</h3>
                      <h4 className="genero">{video.genero}</h4>
                    <div className="rating-button-detalle">
                      <div className="rating">
                        <img className="icono-rating" src={heartPopup} alt="heart"/>
                        <span className="rating-numero">{video.heart}</span>
                      </div>
                      <div className="button-detalle">
                        <label htmlFor="3" className="open">Detalle</label>
                      </div>
                    </div>
                  </div>

              
              </div>

                  )
              

              })
            }



       </div>
      </div>
    </div>
  
    );
  }
}



export default Home;

      
