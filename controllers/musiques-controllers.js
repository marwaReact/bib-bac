const uuid=require('uuid')
let MUSIQUES = [
    {
      id: "1",
      auteur: "daft punk",
      annee: "2013",
      titre: "get lucky",
      imageUrl:
        "https://bergamotte.imgix.net/uqiot3fzr65vn2pvhfghnbfiag56?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5",
    },
    {
      id: "2",
      auteur: "david sia",
      annee: "2011",
      titre: "titanium",
      imageUrl:
        "https://www.aquaportail.com/pictures1609/cosmos-bipinnatus-fleur-mauve.jpg",
    },
    {
      id: "3",
      auteur: "Shaka Ponk",
      annee: 2019,
      titre: "Smells like teen spirits",
      imageUrl:
        "https://fr.web.img6.acsta.net/pictures/210/579/21057957_20131114164954139.jpg",
    },
    {
      id: "4",
      auteur: "Imagine Dragon",
      annee: 2018,
      titre: "Natural",
      imageUrl:
        "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg",
    },
  ];

  const getMusiques =(req,res) => {
    res.json({MUSIQUES});
  }
  
  const getMusiquesById=(req, res)  =>{
    console.log("GetMusiquesByID")
    const mId=req.params.musiqueid;
    console.log({mId})
    const musique = MUSIQUES.find(m=>{
        return m.id === mId;
    })
    if (!musique){
        return res.status(404).json({"Musique":"musique non trouve pour cet Id"})
    }

 res.json({message:{musique}})
};

const createMusique =(req,res)=>{
    console.log(req.body)

const {id,auteur,annee,titre,imageUrl}=req.body
const createdMusique={id:uuid.v4(),auteur,annee,titre,imageUrl}

MUSIQUES.push(createdMusique)
res.status(201).json({musique:createdMusique})
}
const updateMusique =(req, res)=>{
    const{auteur,annee,titre,imageUrl}=req.body
    const musiqueId=req.params.musiqueid
    const updatedMusique =MUSIQUES.find(m=>{
        return (m.id === musiqueId);
    });

        const musiqueIndex= MUSIQUES.findIndex(m => m.id===musiqueId)
        updatedMusique.auteur=auteur;
        updatedMusique.annee=annee;
        updatedMusique.titre=titre;
        updatedMusique.imageUrl=imageUrl;
        MUSIQUES[musiqueIndex]=updatedMusique;
        res.status(200).json({musique :updatedMusique})

   
};
const deleteMusique =(req,res)=>{
    const musiqueId=req.params.musiqueid;
    MUSIQUES=MUSIQUES.filter(m=> m.id !== musiqueId);
    res.status(200).json({message:"musique supprimee !"});
};
exports.getMusiques= getMusiques;
exports.getMusiquesById=getMusiquesById;
exports.createMusique=createMusique;
exports.updateMusique=updateMusique;
exports.deleteMusique=deleteMusique;
  