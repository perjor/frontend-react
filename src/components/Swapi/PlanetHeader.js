import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlanetPropertyItem from "./PlanetPropertyItem";


class PlanetHeader extends React.Component {

    renderProperties(){
        return this.props.properties.map((property, i) => (
          <PlanetPropertyItem onAdd={(e) => this.props.onAdd(e)} name={property} key={i}/>
        ));
    }

    render(){
        const properties = this.props.properties.length ? this.renderProperties() : '' ;

        return (
          <div>
              <Link to={`/${this.props.name}`}>
                  <div className="card-header text-center">
                      {this.props.name}
                  </div>
              </Link>
              <div className="text-center dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                      Add <span className="caret"></span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {properties}
                  </div>
              </div>
          </div>

        );
    }
}

PlanetHeader.propTypes = {
    name: PropTypes.string
};

export default PlanetHeader;
