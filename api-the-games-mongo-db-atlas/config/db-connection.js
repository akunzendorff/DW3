import mongoose from "mongoose";

const dbUser = "anaflavia5522";
const dbPassword = "Aninha1210";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.cpwxo.mongodb.net/api-the-games?retryWrites=true&w=majority&appName=Cluster0`
  );

  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar ao MongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao MongoDB com sucesso!");
  });
};

connect();
export default mongoose;
