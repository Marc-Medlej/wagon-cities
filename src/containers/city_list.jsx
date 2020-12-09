import React, { Component } from 'react';
import City from './city'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index'; 


class CityList extends Component {
    componentWillMount() {
        this.props.setCities();
    } 


    constructor(props) {
        super(props);
    };

    renderList = () => {
        return this.props.cities.map((city) => {
          return (
            <City
              city={city}
              key={city.name}
              address={city.address}
              slug={city.slug}
            />
          );
        });
    };

    render() {
        return (
            <div className="cities">
                 {this.renderList()}
            </div>
            );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setCities: setCities },
        dispatch
    );
   }

function mapStateToProps(state) {
    return {
        cities: state.cities
    };
} 
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
   