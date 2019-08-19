import React, {Component} from 'react';
import './Wands.css'

//swtich to class.
class Wands extends Component{
    constructor(){
        super()

        this.state ={
            isEdit: false,
            Wood: '',
            Core: "",
            Flexability: '',
            Length: '',

        }
    }

    updateWood = (wood) => {
        this.setState({
            Wood: wood
        })
    }

    updateCore = (core) => {
        this.setState({
            Core: core
        })
    }

    updateFlexability = (flexy) => {
        this.setState({
            Flexability: flexy
        })
    }
    updateLength = (length) => {
        this.setState({
            Length: length
        })
    }

    submitChanges = () => {
        let obj = { wood: this.state.Wood, core: this.state.Core, flexability: this.state.Flexability, length: this.state.Length}
        this.setState({
            isEdit: !this.state.isEdit
        })
        this.props.updateWands(this.props.wand.id, obj)
        console.log('one')
    }

    render(){
        const {id,wood,core,flexability, length} = this.props.wand;
        const {deleteWands} = this.props
        return(
            <div>
                    {this.state.isEdit ?

                <div>
                    
                    <input onChange={(event) => this.updateWood(event.target.value)} placeholder="wood"/>
                    <input onChange={(event) => this.updateCore(event.target.value) }placeholder="core"/>
                    <input onChange={(event) =>this.updateFlexability(event.target.value) }placeholder="flexability"/>
                    <input onChange={(event) => this.updateLength(event.target.value) }placeholder="Length"/>
                    <button onClick={() => this.submitChanges()}>Submit</button>
                </div>
                : 
                <div className="wand-container">
                    <p>{id}</p>
                    <p>{wood}</p>
                    <p>{core}</p>
                    <p>{flexability}</p>
                    <p>{length}</p>
                    <button onClick={() => deleteWands(id)}>Delete</button>
                    <button onClick={() => this.setState({isEdit: !this.state.isEdit})}>Edit</button>
                </div>}
             </div>

                
        )
    }
    
}

export default Wands