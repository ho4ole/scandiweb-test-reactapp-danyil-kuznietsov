import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getCategories} from "../../redux/header-reducer";
import Header from "./Header";
import {withRouter} from "react-router";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.history.push("/section/" + this.props.sectionName.title);
    }


    render() {
        return <Header categories={this.props.categories}/>

    }

}

let mapStateToProps = (state) => {
    return {
        categories: state.header.categories,
        sectionName: state.section.sectionName
    }
}

let withUrlDataSectionContainer = withRouter(HeaderContainer);

export default compose(
    connect(mapStateToProps, {getCategories})
)(withUrlDataSectionContainer)