const express = require("express");
const Animals = require("./animals-model.js");
const server = express();
server.use(express.json());


// Extra get request just for fun -----------------------------------

server.get('/animals', (req, res) => {

    Animals.find()
        .then(animals => {
            res.json(animals);
        })
        .catch(err => {
             res.status(500).json({ message: `Failed to get animals because ${err.message}` });
        });

})

//------------------------------------------------------

server.post("/animals", (req, res) => {
    if (req.body.animal_name) {
        Animals.insert(req.body)
            .then(animal => {
                res.status(201).json({ data: animal });
            })
            .catch(error => {
              res.status(500).json({ message: error.message })
            });
    } else {
        res.status(400).json({ message: "Please provide an animal name!" });
    }
});


server.delete('/animals/:id', (req, res) => {
    const { id } = req.params;
  
    Animals.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'Animal deleted!' });
      } else {
        res.status(404).json({ message: 'Could not find animal with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to delete animal because ${err.message}.` });
    });
  });


  module.exports = server