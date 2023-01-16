
const express = require('express');
const router = express.Router();


const musiquesControllers=require('../controllers/musiques-controllers')


 router.get("/",musiquesControllers.getMusiques)
 router.get("/:musiqueid",musiquesControllers.getMusiquesById);
 router.post("/",musiquesControllers.createMusique);
 router.patch("/:musiqueid",musiquesControllers.updateMusique);
 router.delete("/:musiqueid",musiquesControllers.deleteMusique);

 module.exports=router;


