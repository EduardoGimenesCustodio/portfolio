const express = require("express");
const path = require("path");
const app = express();

const configs = {
    caminho: "public", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    port: process.env.PORT || 3000
}

app.use(express.static(configs.caminho)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("*", (req, res) => {// O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
    console.log('Escutando na porta '+ configs.port +'!');
});