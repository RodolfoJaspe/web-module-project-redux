import React from 'react';
import { addFeature } from "../actions/additionalFeatureAction";
import { connect } from "react-redux";

const AdditionalFeature = props => {
    console.log(props)
    // console.log(props.features)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
    
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
    return {
        features : state.car.features
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addFeature : newFeature => dispatch(addFeature(newFeature))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
