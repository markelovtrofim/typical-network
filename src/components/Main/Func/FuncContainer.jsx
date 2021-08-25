import React from 'react';
import {connect} from "react-redux";
import Func from "./Func";
import {getUsers} from "../../../redux/func-reducer";

class FuncContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <Func {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        func: state.func.func,
        num: state.func.num
    }
};

export default connect(mapStateToProps, {getUsers})(FuncContainer);
