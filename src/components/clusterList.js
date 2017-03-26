import React, { Component } from 'react';
import { Link } from 'react-router';

class ClusterList extends Component {

  componentWillMount() {
    this.props.fetchCluster();
  }

  renderCluster(clusters) {
    console.log(clusters);
    return clusters.map((cluster) => {
      return (
        <li className="list-group-item">
          <Link style={{ color:'black' }}>
            <h3 className="list-group-item-heading">{ cluster.title }</h3>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { clusters, loading, error } = this.props.clusterList;

    if (loading) {
      return <div className="container"><h1>Clusters</h1><h3>Loading...</h3></div>;
    } else if (error) {
      return <div className="alert alert-danger">Error: { error.message }</div>;
    }

    return (
      <div className="container">
        <h1>Clusters</h1>
        <ul className="list-group">
          { this.renderCluster(clusters) }
        </ul>
      </div>
    );
  }
}

export default ClusterList;
