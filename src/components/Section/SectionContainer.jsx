import {Component} from "react";
import Section from "./Section";
import {changeAllFetchedStatus, getProducts} from "../../redux/section-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class SectionContainer extends Component {

    componentDidMount() {
        debugger
        if (this.props.match.params.sectionName === "all" && !this.props.isAllFetched) {
            this.props.getProducts("all");
            this.sortProducts("all");
            this.props.changeAllFetchedStatus();
        } else {

            if (this.props.isAllFetched) {
                this.sortProducts(this.props.match.params.sectionName);
            } else {
                let isFetched = false;
                this.props.fetchedCategories.forEach(category => {
                    if (category === this.props.match.params.sectionName) {
                        this.sortProducts(this.props.match.params.sectionName);
                        isFetched = true;
                    }
                })

                if (!isFetched) {
                    this.props.getProducts(this.props.match.params.sectionName);
                    this.sortProducts(this.props.match.params.sectionName);
                }
            }
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
        fetchedCategories: state.section.fetchedCategories,
        isAllFetched: state.section.isAllFetched
    }
}

let withUrlDataSectionContainer = withRouter(SectionContainer);


export default compose(
    connect(mapStateToProps, {getProducts, changeAllFetchedStatus})
)(withUrlDataSectionContainer)

