import React, {Component} from "react";
import {AttributeStyled} from "../styles/Attribute.styled";

class AttributesButtons extends Component {

    render() {
        return (
            <>
                {this.props.attribute.name === "Color"
                    ? this.props.attribute.items.map(item => <AttributeStyled> <label>  <input key={this.props.attribute + item.id} type={"radio"} className={"dotInput"}
                                                                                       name={this.props.attribute.name}
                                                                                       value={item.value}
                                                                                       onChange={this.props.onChange}
                    />
                       <span
                            style={{background: `${item.value}`}} className="dot"/>  </label> </AttributeStyled>)

                    : this.props.attribute.items.map(item => <AttributeStyled> <label> <input type={"radio"}
                                                                                              key={this.props.attribute + item.id}
                                                                                              name={this.props.attribute.name}
                                                                                              value={item.value}
                                                                                              onChange={this.props.onChange}
                    />
                        <span>{item.value}</span> </label> </AttributeStyled>)
                }
            </>
        )
    }

}

export default AttributesButtons

