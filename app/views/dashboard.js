import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import foundation from 'foundation-sites';
import connector from '../store/store';
import TopBar from '../containers/topbar';
import Table from '../containers/table';
import delims from '../../delimiters.json';

console.log(delims);

// import Events from './events';
// import GenreFilter from '../components/filters/genre-filter';
// import TimeFilter from '../components/filters/time-filter';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    return (
      <div className='off-canvas-wrapper'>
        <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper>
          <div className='off-canvas position-left reveal-for-large' id='offCanvas' data-off-canvas>

            {/* -- Close button --> */}

            {/*  -- Menu -->  */}
            <ul className='vertical menu' data-drilldown>
              <li className='list-header header-text' id='side-bar'><strong>Options</strong></li>
              {/* <TimeFilter /> */}
              {/* <GenreFilter /> */}
              <li>
                <a>Venues</a>
                <ul className='vertical menu'>
                  <li><a href='#'>Item 2A</a></li>
                  <li><a href='#'>Item 2B</a></li>
                  <li><a href='#'>Item 2C</a></li>
                  <li><a href='#'>Item 2D</a></li>
                  <li><a href='#'>Item 2E</a></li>
                </ul>
              </li>
              <li>
                <a>Artists</a>
                <ul className='vertical menu'>
                  <li><a href='#'>Item 3A</a></li>
                  <li><a href='#'>Item 3B</a></li>
                  <li><a href='#'>Item 3C</a></li>
                  <li><a href='#'>Item 3D</a></li>
                  <li><a href='#'>Item 3E</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='off-canvas-content black' data-off-canvas-content>
            {/* -- Page content-- */}
            <TopBar />
            <Table {...delims.main} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
