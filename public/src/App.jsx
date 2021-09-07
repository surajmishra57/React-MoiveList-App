import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Movies from "./Movies";

class App extends Component{
    state={
        items:[],
        text:""
    }
    handleChange=e=>{
        this.setState({text : e.target.value});
    }
    handleAdd=e=>{
        if(this.state.text!=="")
        {
            const items = [...this.state.items,this.state.text];
            this.setState({items : items,text : ""});
        }
    }
    handleDelete=id=>{
        const Olditems=[...this.state.items];
        const items = Olditems.filter((element,i)=>{return i!==id});
        this.setState({items : items}); 
    }
    render()
    {
        return(
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                        <h2 className="text-center">Today's Movies Plan</h2>
                        <div className="row">
                            <div className="col-9">
                                <input type="text" className="form-control" placeholder="Movie Name" value={this.state.text}
                                 onChange={this.handleChange}/>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                            </div>
                            <div className="conatiner-fluid">
                                <ul className="list-unstyled row m-5">
                                    {
                                        this.state.items.map((value,i)=>{ 
                                        return <Movies key={i} id={i} value ={value} sendData={this.handleDelete}/>})
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App