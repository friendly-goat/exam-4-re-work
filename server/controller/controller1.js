const users = [
    {
        id:1,
        name:'Danny',
        favPet:'Dog'
    },
    {
        id:2,
        name:'Miranda',
        favPet:'Dog'
    },
    {
        id:3,
        name:'Trey',
        favPet:'Cat'
    },
    {
        id:4,
        name:'Nelson',
        favPet:'Dog'
    },
    {
        id:5,
        name:'Connor',
        favPet:'Cat'
    }
    
]
let globleID = 6
module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
      },

      getFortune: (req, res) => {
        const fortunes = ["A soft voice may be awfully persuasive.",
                           "A short pencil is usually better than a long memory any day.",
                           "All your hard work will soon pay off.",
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
      },
      getUsers: (req,res) => {
        console.log('here')
        res.status(200).send(users)
      },
      addUser: (req,res) => {
          const {userName,favoritePet} = req.body
          const newUser = {
              id:globleID,
              name: userName,
              favPet: favoritePet
          }
          globleID++
          users.push(newUser)
          // console.log(users)
          res.status(200).send(users)
      },
      deleteUsr: (req,res) => {
          const { id } = req.params
          // console.log(id)
          const index = users.findIndex(e => e.id === +id)
          //console.log(index)
          users.splice(index,1)
          res.status(200).send(users)
      },
      reIndexFunc: (req,res) => {
          console.log('here')
          for(let i = 0; i < users.length; i++){
              users[i].id = i + 1
              globleID = i
          }
          globleID = globleID + 2
          res.status(200).send(users)
      },
      genNewUsr: (req,res) => {
          const names = ["Liam","Noah","Oliver","Elijah","William","James","Benjamin","Lucas","Henry","Alex"];
          let randomIndex1 = Math.floor(Math.random() * names.length);
          let randomName = names[randomIndex1];
          const pets = ["Fish","Birds","Rabbits","Poultry","Hamsters","Guinea pigs","Turtles","Ferrets","Reptiles","Horses"];
          let randomIndex2 = Math.floor(Math.random() * pets.length);
          let randomPet = pets[randomIndex2];
          const newUser = {
              id:globleID,
              name: randomName,
              favPet: randomPet
          }
          globleID++
          users.push(newUser)
          res.status(200).send(users)
      },
      changeAnimal: (req,res) => {
          const {index} = req.params
          if((index < 1) || (index > users.length)){
              res.status(400).send(users)
          }
          const pets = ["Fish","Birds","Rabbits","Poultry","Hamsters","Guinea pigs","Turtles","Ferrets","Reptiles","Horses"];
          let randomIndex2 = Math.floor(Math.random() * pets.length);
          let randomPet = pets[randomIndex2];
          console.log(index)
          for(let i = 0; i < users.length; i++){
            // users[i].id = i + 1
            if(+index == +users[i].id){
                users[i].favPet = randomPet
            }
        }
          res.status(200).send(users)
      }
}