import mongoose from "mongoose";

const dbUser = "";
const dbPassword = "";

const connect = () => {
  mongoose.connect();
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.log("Erro ao conectar ao MongoDB");
  });

  connection.on("open", () => {
    console.log("Conectado ao MongoDB");
  });
};

connect();
export default mongoose;
