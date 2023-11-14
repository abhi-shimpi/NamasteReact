import React from "react";

export class UserClass extends React.Component {
    constructor(props) {
        super(props); // Has to calll

        this.state = { // state is reserved variable in react
            count : 0,
            count2 : 2
        }
        console.log(this.props.name,"Child constructor called")
    }

    componentDidMount() {
        console.log(this.props.name,"Child componentDidMount called")
    }

    render() {
        const {name,location,contact} = this.props;
        const {count,count2} = this.state;
        console.log(this.props.name,"Child render called")
        return (
            <div className='user-card'>
                <h1>count : {count}</h1>
                <button onClick={()=>{
                    // It will note diff between two objects and then trigger the re-concialliation algo
                    this.setState({
                        count: count + 1
                    })
                }}>Increase count</button>                
                <h2>name :</h2><span>{name}</span>
                <h2>location :</h2><span>{location}</span>
                <h2>contact :</h2><span>{contact}</span>
            </div>
          )
    }
}

// export default UserClass;