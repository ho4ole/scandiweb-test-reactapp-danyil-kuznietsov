import {Component} from "react";
import Section from "./Section";
import {changeFetchingStatus, getProducts} from "../../redux/section-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class SectionContainer extends Component {

    componentDidMount() {
        if (this.props.firstFetching && this.props.products.length === 0) {
            this.props.getProducts(this.props.sectionName);
            this.props.changeFetchingStatus();
            this.sortProducts(this.props.match.params.sectionName);
        } else {
            this.sortProducts(this.props.match.params.sectionName);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.products !== prevProps.products) {
            this.sortProducts(this.props.match.params.sectionName);
        }
    }

    sortProducts = (categoryName) => {
        if (categoryName === "all") {
            this.setState({
                products: [...this.props.products]
            })
        } else {
            let sortedProducts = [];
            this.props.products.forEach(product => {
                if (product.category === categoryName) {
                    sortedProducts.push(product);
                }
            })
            this.setState({
                products: [...sortedProducts]
            })
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        return <Section products={this.state.products}
                        categoryName={this.props.match.params.sectionName.toUpperCase()}/>
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.section.products,
        sectionName: state.section.sectionName,
        firstFetching: state.section.firstFetching
    }
}

let withUrlDataSectionContainer = withRouter(SectionContainer);


export default compose(
    connect(mapStateToProps, {getProducts, changeFetchingStatus})
)(withUrlDataSectionContainer)

