import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {

  let show_city = (
    <div>
      <h2>Select a city</h2>
    </div>
  );

  if (props.activeCity) {
    show_city = (
      <div>
          <h2>{props.activeCity.name}</h2>
          <h3>{props.activeCity.address}</h3>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`} width="100%" />
      </div>
    )
  }


    return (
      <div className={`active-city`}>
        {show_city}
      </div>
    );
  }

function mapStateToProps(state) {
return {
    activeCity: state.activeCity
  };
} 
export default connect(mapStateToProps)(ActiveCity);
