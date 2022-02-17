import React, {Component} from "react";
import {AttributeStyled} from "../styles/Attribute.styled";

class SelectedAttributes extends Component {

    render() {
        return (
            <>
                {this.props.attribute.name === "Color"
                    ? this.props.attribute.items.map(item => <AttributeStyled> <label>  <input type={"radio"} className={"dotInput"} defaultChecked={"true"}
                    />
                       <span
                            style={{background: `${item.value}`}} className="dot"/>  </label> </AttributeStyled>)

                    : this.props.attribute.items.map(item => <AttributeStyled> <label> <input type={"radio"} checked={"true"}
                    />
                        <span>{item.value}</span> </label> </AttributeStyled>)
                }
            </>
        )
    }

}

export default SelectedAttributes

