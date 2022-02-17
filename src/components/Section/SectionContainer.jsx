import {Component} from "react";
import Section from "./Section";
import {getProducts} from "../../redux/section-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class SectionContainer extends Component {

    componentDidMount() {
        if (!this.props.match.params.sectionName) {
        } else{
            let sectionType = {title: this.props.match.params.sectionName}
            this.props.getProducts(sectionType);
        }
    }

    render() {
        return <Section products={this.props.products} categoryName={this.props.match.params.sectionName.toUpperCase()}/>
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.section.products,
        sectionName: state.section.sectionName
    }
}

let withUrlDataSectionContainer = withRouter(SectionContainer);


export default compose(
    connect(mapStateToProps, {getProducts})
)(withUrlDataSectionContainer)

