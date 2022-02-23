import React, {Component} from "react";
import {SelectedAttributeStyled} from "../styles/SelectedAttribute.styled";

class SelectedAttributes extends Component {

    render() {
        return (
            <>
                {this.props.attribute.name === "Color"
                    ? this.props.attribute.items.map(item => <SelectedAttributeStyled>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>{this.props.attribute.name}:</a> <label> <input type={"radio"} className={"dotInput"}
                                                                           defaultChecked={"true"}
                    />
                        <span
                            style={{background: `${item.value}`}} className="dot"/> </label> </SelectedAttributeStyled>)

                    : this.props.attribute.items.map(item => <SelectedAttributeStyled>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>{this.props.attribute.name}:</a> <label> <input type={"radio"} checked={"true"}
                    />
                        <span>{item.value}</span> </label> </SelectedAttributeStyled>)
                }
            </>
        )
    }

}

export default SelectedAttributes

