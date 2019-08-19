


let wands = [ {
    id: 1,
    wood: 'Blackwood',
    core: "Pheonix Feather",
    flexability: 'Brittle',
    length: 10
    },
    {id: 2,
        wood: 'Elder Wood',
        core: "Thestral Tail Hair",
        flexability: 'Rigid',
        length: 15
    },
    
]

module.exports={

getWands: (req, res) => {
    res.status(200).send(wands)
},


postWands: (req, res) => {
    const {wood, core, flexability, length} = req.body;
    let id;
    if(wands.length === 0){
        id = 1
    }
    else {id = wands[wands.length - 1].id + 1}
    const newWand = {
        wood,
        core,
        flexability,
        length,
        id
    }

    wands.push(newWand)

    res.status(200).send(wands)
},

// putWands: (req, res) => {
//     const {id} = req.params
// },

updateWands: (req,res) => {
    const {id} = req.params
    const {wood, core, flexability, length} = req.body
    console.log('5')
    wands = wands.map((e) => {
        if(e.id === +id){
            e.wood = wood
            e.core = core
            e.flexability = flexability
            e.length = length

        }
        return e
    })
    console.log('hey')
    res.status(200).send(wands)
    
},

deleteWands: (req, res) => {
    const {id} = req.params;
    wands = wands.filter(wand => {
        if(wand.id !== +id) return wand
    })
    res.status(200).send(wands)
}





}