class Movies {

    constructor(name = '', studio = '', rating){
        this.name = name;
        this.studio = studio;
        this.rating = rating || 'PG'; 
    }
    getPg(data = []){
        return data.filter((d) => d.rating === 'PG');
    }
}

const movieUtils = new Movies();

var movieList = [
    new Movies('PS2', 'Lyca', 'PG'),
    new Movies('FAST & FURIOUS X', 'American', 'PG'),
    new Movies('Good night', 'Red giant', 'PG13'),
    new Movies('Pichaikaran', 'Vijay antony studio', ''),
    new Movies('Casino Royale', 'EON Production', 'PG13')

];
console.log(movieUtils.getPg(movieList))