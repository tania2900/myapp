import React, {Component} from 'react'

export default class ClassComp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            name : ""
        }
    }

    onSetName(name) {
        console.log(name)
        this.setState({name})
    }

    componentDidMount() {
        this.setState({name : "IoT"})
    }

    // componentDidUpdate() {
    //     this.setState({name: "This is Did Update"})
    // }

    render() {
        return (
            <div>
                <h1>Halo {this.state.name}</h1>
                <input value={this.state.name} type="text" onChange={(e) => this.onSetName(e.target.value)} name="name"/>
            </div>
        )
    }
}