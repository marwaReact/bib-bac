let FILMS=[
    {
    
    id:"1",
    auteur:"daft punk",
    annee:"2013",
    titre :"scooby",
    imageUrl:"https://fr.web.img4.acsta.net/pictures/20/06/24/14/34/3337477.jpg"
    
    
    },{
    
      id:"2",
      auteur:"david sia",
      annee:"2011",
      titre :"tom and jerry",
      imageUrl:"https://imgsrc.cineserie.com/2017/05/1811979.jpg?ver=1"
      
      
      },
          {
            id : "3",
            auteur: "Shaka Ponk",
            annee: 2019,
            titre: "cendrillon",
            imageUrl: "https://aws1.vdkimg.com/film/1/1/2/0/112056_poster_scale_480x640.jpg"
        },
        {
            id : "4",
            auteur: "Imagine Dragon",
            annee: 2018,
            titre: "raya",
            imageUrl: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/11/10/35/1825655.jpg"
        }
    ]
    const getFilms =(req,res) => {
        res.json({FILMS});
      }
      
      const getFilmsById=(req, res)  =>{
        console.log("GetFilmsByID")
        const fId=req.params.filmid;
        console.log({fId})
        const film = FILMS.find(f=>{
            return f.id === fId;
        })
        if (!film){
            return res.status(404).json({"film":"films non trouve pour cet Id"})
        } 
     res.json({message:{film}})
    };
    exports.getFilms= getFilms;
    exports.getFilmsById=getFilmsById;