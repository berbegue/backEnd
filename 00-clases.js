class Usuario{
    constructor(nombre,apellido,libros=[{}],mascotas=[]){
        this.name = nombre;
        this.lastname = apellido;
        this.books = libros;
        this.pets = mascotas;
    }
    getFullName() {
        console.log(`${this.name} ${this.lastname}`);
    } 
    addMascota(masc) {
        this.pets.push(masc);
    } 
    countMascotas(){
        console.log(this.pets.length);
    }
    addBook(nom,aut){
        this.books.push({nombre: nom,autor: aut});
    }
    getBookNames(){
        console.log(this.books.map((misLibros) => misLibros.nombre));
    }
}
const usuario1 = new Usuario('Bernardo', 'Begue Aliaga',[
                                                    {
                                                        nombre:'El padriono', 
                                                        autor:'Mario Puzo'
                                                    },
                                                    {
                                                        nombre:'El exorcista', 
                                                        autor:'William P. Blatty'
                                                    }
                                                ],['Vittorio', 'Gatu'] );
usuario1.getFullName();
usuario1.addMascota('Romeo');
usuario1.countMascotas();
usuario1.addBook('Juan Salvador Gaviota','Richard Bach');
usuario1.getBookNames();

