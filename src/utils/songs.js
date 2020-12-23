import { v4  } from 'uuid'

const songs = [
    {
        name:'Snowstalgia',
        artist:'invention_',
        cover:'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
        source:'https://mp3.chillhop.com/serve.php/?mp3=10305',
        active:true,
        colors:["#4e4464","#c76785"],
        id:v4()
    },
    {
        name:'Sugarless',
        artist:'The Field Tapes, Aviino',
        cover:'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
        source:'https://mp3.chillhop.com/serve.php/?mp3=11243',
        active:false,
        colors:["#b8c288","#af9472"],
        id:v4()
    },
    {
        name:'Hereafter',
        artist:'Makzo',
        cover:'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
        source:'https://mp3.chillhop.com/serve.php/?mp3=11770',
        active:false,
        colors:["#e08c77","#4a609f"],
        id:v4()
    },
    {
        name:'Slim Bobby',
        artist:'Aviino',
        cover:'https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg',
        source:'src="https://mp3.chillhop.com/serve.php/?mp3=10448',
        active:false,
        colors:["#d7668c","#164673"],
        id:v4()
    },
    {
        name:'Maple Leaf',
        artist:'Philanthrope',
        cover:'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
        source:'https://mp3.chillhop.com/serve.php/?mp3=10243',
        active:false,
        colors:["#ca7b5b","#3e2220"],
        id:v4()
    },
]

export default songs