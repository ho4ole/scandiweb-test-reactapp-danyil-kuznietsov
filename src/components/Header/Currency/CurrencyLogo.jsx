import {Component} from "react";

class CurrencyLogo extends Component {
    render() {
        return <div>
            <span>{this.props.currentCurrency}</span>
            <img alt={this.props.image} src={this.props.image}/>
        </div>
    }
}


export default CurrencyLogo