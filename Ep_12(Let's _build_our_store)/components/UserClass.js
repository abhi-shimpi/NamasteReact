import React from "react";

export class UserClass extends React.Component {
    constructor(props) {
        super(); // Has to calll

        this.state = { // state is reserved variable in react
            count : 0,
            count2 : 2,
            userProfile : {
                name: "dummy",
                location: "default"
            }
        }

        console.log(this.props,"Child constructor called")
    }

    async componentDidMount() {
        // this.intervalId = setInterval(()=>{
        //     console.log("React OP")
        // },1000);
        
        console.log(this.props.name,"Child componentDidMount called");
        const profileData = await fetch("https://api.github.com/users/abhi-shimpi");
        const jsonData = await profileData.json();
        this.setState({
            userProfile : jsonData
        });
    }

    componentDidUpdate() {
        console.log(this.props.name,"Child componentDidUpdate called");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
        clearInterval(this.intervalId)
    }

    dummyMethod = () => {
        console.log(this.props)
    }
    // debugger;
    render() {
        // const {name,location,contact} = this.props;
        const {count,count2} = this.state;
        console.log(this.props.name,"Child render called");
        this.dummyMethod()
        const {name,location,login} = this.state.userProfile;
        return (
           <>
            {/* <div className='user-card'>
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
            </div> */}
            <div className='user-card'>             
                <h2>name :</h2><span>{name}</span>
                <h2>location :</h2><span>{location}</span>
                <h2>contact :</h2><span>{login}</span>
            </div>
           </>
          )
    }
}

// export default UserClass;