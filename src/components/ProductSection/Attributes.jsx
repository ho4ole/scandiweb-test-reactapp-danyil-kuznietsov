import React, {Component} from "react";
import {AttributesFormStyled} from "../styles/Attribute.styled";
import AttributesButtons from "./AttributesButtons";

class Attributes extends Component {

    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        this.props.addAttribute({name: event.target.name, id: event.target.name, items: [{value: event.target.value}]});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <span>{this.props.attribute.name.toUpperCase() + ":"}</span>
                <AttributesFormStyled onSubmit={this.handleSubmit}>
                    <AttributesButtons attribute={this.props.attribute} onChange={this.onValueChange}/>
                </AttributesFormStyled>
            </div>


        )
    }

}

export default Attributes

