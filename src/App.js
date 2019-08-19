import React, {Component} from 'react';
import './App.css'
import Header from './Components/Header/Header'
import axios from 'axios';
import Wands from './Components/Wands/Wands'

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            wands: [],
            Wood: '',
            Core: "",
            Flexability: '',
            Length: '',
        }
    }
    
 componentDidMount=()=>{
     console.log('hit')
     this.getWands()
 }

    getWands = ()=> {
        axios.get('/api/wands').then(response => {
            // console.log(response)
            this.setState({
                wands: response.data
            })
        }).catch(err =>{
            console.log(err)
        })
    }

    updateWands =(id, obj)=> {
        console.log('o2')
        axios.put(`/api/wands/${id}`, obj).then(response => {
            this.setState({
                wands: response.data
            })
        })
        .catch(err =>{
            console.log(err)})
        
    }

    deleteWands =(id)=> {
        axios.delete(`/api/wands/${id}`).then(response => {
            this.setState({
                wands: response.data
            })
        })
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
    // handleUpdateWands = (id) => {
    //     let updatedWands= {
           
    //     }
    //     axios.put(`/api/wands/${id}`, {wood: this.state.Wood, core: this.state.Core, flexability: this.state.Flexability, length: this.state.Length})
    //     .then(res =>{
    //         this.props.updateWands(res.data)
    //         this.handleToggle()

    //     })
    // } 
    

    handleAddWands = () => {
        axios.post('/api/wands',{ wood: this.state.Wood, core: this.state.Core, flexability: this.state.Flexability, length: this.state.Length}).then(res => {
            this.setState({wands: res.data})
        })

        this.setState({wood: ""});
        this.setState({core: ''});
        this.setState({flexability: ''});
        this.setState({length: ''})
        
    }
   
    render(){
        // console.log(this.state.wands)
        const mappedWands = this.state.wands.map((wand, i) => {
            return (
                <Wands key = {i} wand={wand} deleteWands={this.deleteWands} updateWands={this.updateWands}  />
            )
        })
        return (
            <div className="wand-page-container">
                <Header />
                
                
                <div className='name'><p>WOOD</p></div>
               
                <div className="buttons">
                    
                    <button onClick={() => this.updateWood('Blackwood')}  >Blackwood</button>
                    <button onClick={() =>this.updateWood('Oak')}>Oak</button>
                    <button onClick={() =>this.updateWood('Yew')}>Yew</button>
                    <button onClick={() =>this.updateWood('Maple')}>Maple</button>
                </div>

                <div className='name'>CORE</div>

                <div className="buttons">
                    
                    <button onClick={() =>this.updateCore('Dragon Heartstring')} >Dragon Heartstring</button>
                    <button onClick={() =>this.updateCore('Pheonix Feather')}>Pheonix Feather</button>
                    <button onClick={() =>this.updateCore('Unicorn Hair')}>Unicorn Hair</button>
                    <button onClick={() =>this.updateCore('Acromantula Web')}>Acromantula Web</button>
                </div>

                <div className='name'>Flexability</div>

                <div className="buttons">
                    
                    <button onClick={() =>this.updateFlexability('Supple')} >Supple</button>
                    <button onClick={() =>this.updateFlexability('Bendy')}>Bendy</button>
                    <button onClick={() =>this.updateFlexability('Rigid')}>Rigid</button>
                    <button onClick={() =>this.updateFlexability('Brittle')}>Brittle</button>
                </div>

                <div className='name'>Length</div>

                <div className="buttons">
                    
                    <button onClick={() =>this.updateLength('10')}>10</button>
                    <button onClick={() =>this.updateLength('12')}>12</button>
                    <button onClick={() =>this.updateLength('14')}>14</button>
                    <button onClick={() =>this.updateLength('16')}>16</button>
                </div>

                <div className='yeet'>

                <button  onClick= {this.handleAddWands}>ADD WAND</button>
                

                </div>


                    <div className="wand-header">
                        <p>#</p>
                        <p>WOOD</p>
                        <p>CORE</p>
                        <p>FLEXABILITY</p>
                        <p>LENGTH</p>
                    </div>
                
                {mappedWands}

                

                
            </div>
        )
        }
  
}