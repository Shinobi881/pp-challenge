import React, { Component, PropTypes } from 'react';
const { string, object, shape } = PropTypes;

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let p = this.props;
    let d = p.af.delimiters;
    let l = p.af.identity.language;
    console.log(d);
    return (
      <table className='hover stack'>
        <thead>
          <tr>
            <th width="150">Language</th>
            <th width="150">Quote Start</th>
            <th width="150">Quote End</th>
            <th width="150">Alt Quote Start</th>
            <th width="150">Alt Quote End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{l}</td>
            <td>{d.quotationStart}</td>
            <td>{d.quotationEnd}</td>
            <td>{d.alternateQuotationStart}</td>
            <td>{d.alternateQuotationEnd}</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  af: object.isRequired,
  delimiters: shape({
    quotationStart: string,
    alternateQuotationStart: string,
    quotationEnd: string,
    alternateQuotationEnd: string
  })
};

export default Table;
