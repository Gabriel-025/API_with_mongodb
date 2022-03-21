const mongoose = require("mongoose");

function connectToDatabase(){

     mongoose.connect(
       process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,   //novas tecnologias precisam para funcionar.
        //melhoria de conecção do mongoose, legados 
    });
                                       //não precisa dessa configuração
            const db = mongoose.connection;
            db.on("error", (error) => console.error(error)) //quando algo acontecer  = error
            db.once("open", () => console.log("📦  Conected to the database!"))  //faz algo q vez somente
                                                            // executa uma função
            }                             
module.exports = connectToDatabase;

