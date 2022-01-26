import {Component} from "react";
import Section from "./Section";
import {getProducts} from "../../redux/section-reducer";
import {compose} from "redux";
import {connect} from "react-redux";



class SectionContainer extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return <Section products={this.props.products} categoryName={"All"}/>
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.section.products
    }
}


export default compose(
    connect(mapStateToProps, {getProducts})
)(SectionContainer)
