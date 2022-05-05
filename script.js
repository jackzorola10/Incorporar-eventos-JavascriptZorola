
// Eventos de click, input, mouse in con imagenes a los lados y teclados cuando ingresas el tiempo en el song submit. Key down para "aplaudirle a tu cacncion favorita"


const songs = [
    {   id:1 , name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 228   },
    {   id:2 , name: "En cuatro", autor: "Amigos Invisibles", genero:"Rock", tiempo: 240   },
    {   id:3 , name: "Toxic", autor: "Britney Spears", genero:"Pop", tiempo: 190      },
    {   id:4 , name: "The Feels", autor: "TWICE", genero:"KPOP", tiempo: 190      },
    {   id:5 , name: "Patiently Waiting (ft Eminem)", autor: "50 Cent", genero:"Rap", tiempo: 270  },
    {   id:6 , name: "Sunny Afternoon", autor: "Drake Bell", genero:"Rock", tiempo: 198     },
    {   id:7 , name: "Till I Collapse", autor: "Eminem", genero:"Rap", tiempo: 298    },
    {   id:8 , name: "Bad Habits", autor: "Ed Sheeran", genero:"Pop", tiempo: 234  },
    {   id:9 , name: "Lie", autor: "BTS", genero:"KPOP", tiempo: 144   },
    {   id:10 , name: "I Will Survive", autor: "Hermes House Band", genero:"Pop", tiempo: 318   },
    {   id:11 , name: "Still D.R.E. (ft. Snoop Dog)", autor: "Dr. Dre", genero:"Rap", tiempo: 201  },
    {   id:12 , name: "Love Again", autor: "Dua Lipa", genero:"Pop", tiempo: 168    },
    {   id:13 , name: "Come With Me Now", autor: "Kongos", genero:"Rock", tiempo: 204   },
    {   id:14 , name: "Bellacoso", autor: "Residente", genero:"Rap", tiempo: 246    },
    {   id:15 , name: "Close Up On Your Lips", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 144    },
    {   id:16 , name: "Torero", autor: "Chayanne", genero:"Pop", tiempo: 225     },
    {   id:17 , name: "How u like that", autor: "BLACKPINK", genero:"KPOP", tiempo: 246     },
    {   id:18 , name: "Energetic", autor: "Wanna One", genero:"KPOP", tiempo: 222    },
    {   id:19 , name: "Ko Ko Bop", autor: "EXO", genero:"KPOP", tiempo: 288    },
    {   id:20 , name: "The Bidding", autor: "Tally Hall", genero:"Rock", tiempo: 192   },
]

let stringsOfArrayOfSongs = [] // Se llenará de strings que podemos aventar dentro de la sección "PlaylistSelection"
 
function printTableOfSongs(arrayOfObj) {
    stringsOfArrayOfSongs.splice(0, stringsOfArrayOfSongs.length);
    for (let i = 0; i < arrayOfObj.length; i++) {
        stringsOfArrayOfSongs.push(
        "<div class='row'>" +
            "<p class='songTable tableId'>" + arrayOfObj[i].id + ' - </p>' +
            "<p class='songTable tableName'>" + arrayOfObj[i].name + '</p>' +
            "<p class='songTable tableAutor'> by " + arrayOfObj[i].autor + '</p>' +
            "<p class='songTable tableGenero'>" + arrayOfObj[i].genero + '</p>' + 
            "<p class='songTable tableTiempo'>" + arrayOfObj[i].tiempo + '</p>' +
        "</div>"
        );
    }
}

printTableOfSongs(songs);
console.log(stringsOfArrayOfSongs);

const bandNames = [
    "Tally Hall", "Dr. D.R.E.", "Kongos", "EXO", "Hermes House Band", "Dua Lipa", "Kay Vs the Moon", "Eminem", "Drake Bell", "Amigos Invisibles", "TWICE", "Ed Sheeran", "50 Cent", "Britney Spears", "BLACKPINK", "BTS", "Wanna One", "Chayanne", "Residente"
]


// ########################################################################################################################

    let initialPlaylist = document.getElementById("PlaylistSelection");
    let stringify = stringsOfArrayOfSongs.join("");
    initialPlaylist.innerHTML = stringify;

// ########################################################################################################################

let songFilter = [];
const userGenre = document.getElementById("selectDeGenero");
userGenre.addEventListener('change', () => {
    console.log("Genre obtained = " + event.target.value);
    songFilter = songs.filter(   (el) => el.genero.includes(event.target.value)  ); 
    console.log("songFilter value = " + songFilter);
    printTableOfSongs(songFilter);
    console.log(stringsOfArrayOfSongs);
    printFilteredPlaylist ();
})


// ########################################################################################################################

function printFilteredPlaylist () {
    genreFilteredPlaylist = document.getElementById("FinalPlaylist")
    stringify = stringsOfArrayOfSongs.join("");
    genreFilteredPlaylist.innerHTML = stringify;
}

// ########################################################################################################################

let bandImage = document.getElementById('imageForTest');
let bandEres = document.getElementById('eres');
let imgV = parseInt(0);

bandImage.onmousemove = () => {
    imgV++
    console.log("mousemove")
    bandImage.src="images/band" + imgV + ".jpg"
    bandEres.innerText = "Eres: " + bandNames[imgV-1];
    
    if (imgV > bandNames.length-1) {
        imgV = parseInt(0);
    }
}