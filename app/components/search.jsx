import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import connector from '../store/connector';

export class Search extends Component {
  constructor (props) {
    super(props);
    this.handleEventSearch = this.handleEventSearch.bind(this);
  }
  handleEventSearch (event) {
    event.preventDefault();
    let p = this.props;
    let searchForm = document.getElementById('event-search');
    // console.log('Search form value: ', searchForm.value)
    console.log('Props from search: ', this.props);
    p.searchLocales(searchForm.value);
    searchForm.value = '';
    this.forceUpdate();
    browserHistory.push('/results');
  }
  render () {
    return (
      <div className='top-bar-right'>
        <form onSubmit={this.handleEventSearch}>
          <ul className='menu'>
            <li><input
              id='event-search'
              type='search'
              placeholder='Search'
            /></li>
            <li><button type='submit' className='button'>Search</button></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default connector(Search);

// #####################################
/*
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import connector from '../store/connector';

const { object, func, bool } = PropTypes;

export const fields = ['locale'];

class Search extends Component {
  render() {
    const {
      fields: { locale },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    console.dir(handleSubmit);
    return (
      <div className='top-bar-right'>
        <form onSubmit={handleSubmit}>
          <ul className='menu'>
            <li><input
              id='event-search'
              type='text'
              placeholder='Search locales'
              {...locale}
            /></li>
            <li><button type='submit' className='button'>Search</button></li>
          </ul>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  fields: object.isRequired,
  handleSubmit: func.isRequired,
  resetForm: func.isRequired,
  submitting: bool.isRequired
};

export default reduxForm({
  form: 'simple',
  fields
})(Search);
*/
