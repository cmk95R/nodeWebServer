import express from "express"
// const express = require("express")

import path from "path"
// const path = require("path")

export const startServer = (options) => {
    const {public_path,port = 'public'} = options
    const app = express()

    app.use(express.static(public_path)) 
    app.get('*',(req,res) => {
        const indexPath = path.join(__dirname +`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log("Escuchando puerto 3000");
    })

}

