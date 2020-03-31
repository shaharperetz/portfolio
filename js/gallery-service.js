gPortFolios = [
    {
        id: 'sweepminer',
        name: 'sweepminer',
        title: 'dont blow this mines',
        desc: 'dont blow your mines ! pic a cell and know how much mines around him, after picking try to find all the mines and win the game !',
        url: 'https://shaharperetz.github.io/firstSprint/',
        publishedAt: 'March 22',
        labesls: ['Mouse events', 'mines'],
        Img: 'img/projs/minesweeper.jpg'


    },
    {
        id: 'bookGalery',
        name: 'Book Shop',
        title: 'Book store - Add your book!',
        desc: 'a gallery of books , you can add your own book and updates books prices!',
        url: '',
        publishedAt: 'March 26',
        labesls: ['Mouse events', 'books'],
        Img: 'img/projs/bookshop.jpg'


    },
    {
        id: 'whatinpic',
        name: 'what is in the pic',
        title: 'guessing what in the pic',
        desc: 'the game showed you picture and you should guess whats in it.',
        url: '',
        publishedAt: 'March 16',
        labesls: ['Mouse events', 'animal-pics'],
        Img: 'img/projs/whatinpic.jpg'


    },
    {
        id: 'chess',
        name: 'Chess',
        title: 'Play Chess!',
        desc: 'The ultimative chess game',
        url: '',
        publishedAt: 'March 20',
        labesls: ['Mouse events', 'thinking game'],
        Img: 'img/projs/chess.jpg'


    }


]


function ClickContactSubmit(email , subject , textBody , container){
    debugger

   window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shaharp2@gmail.com&su=${subject}&b
ody=${textBody}` , '_blank')

$('.spinner-border').show()


}



function init() {
    console.log('stam mashu')
    createPortfolio()

}





function getProjById(id){
   var proj = gPortFolios.find(project => {
        return project.id === id
   })
    return proj
}


function getPortfolio(){
    return gPortFolios
}