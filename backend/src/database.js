const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/prueba';

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect(URI);
}

//////////CREAR EL ESQUEMA ////////////
const Personas = new Schema({
    Nombre:  String, // String is shorthand for {type: String}
    Apellido: String,
    Identificacion: String,
    Email:String,
    FotoPerfil:URI,
    FechaRegistro:Date,
    FechaModificado:Date,
    Estado:Boolean
  });


  /////////////CREAR EL MODELO/////////////////7


  const persona = mongoose.model('Personas', Personas);

  const andres = new personas({ name: 'andres' });
  console.log(andres.name);

///////////////////

Personas.methods.speak = function speak(){
    const variable = this.variable?
    "Mi nombre es " + this.name:
    "No tengo nombre";
    console.log(variable);
};
const personas = mongoose.model('personas', Personas);
  




/* mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true
}); */
/* 
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');

}); */