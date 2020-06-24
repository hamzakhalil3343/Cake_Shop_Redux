import React from 'react';
import {connect} from 'react-redux'
import {buyCake} from '../Redux/Cake/CakeActions'
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cake {props.numofCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state=>{
    return{
        numofCake:state.numofCake
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);