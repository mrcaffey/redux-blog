import React from 'react';
import { connect } from 'react-redux';

const BlogsList = ({ blogs }) => (
  <ul>
    { blogs.map( (t,i) => {
      return (
        <li key={i}>
          {t}
        </li>
      )
     })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogsList)