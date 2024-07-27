import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
    }
    render(){
        return (
          <div className="user-class">
            <h2>Name: {this.props.name}</h2>
            <h2>Email: {this.props.email}</h2>
            <h2>This is Foodman. Get you meal now!!!</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>count Incrementor</button>
            <br/>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count-1,
                })
            }}>count Decrementor</button>
            <h3>count {this.state.count}</h3>
          </div>  
        );
    }
}

export default UserClass;