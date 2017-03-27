import React from 'react';
import ClusterList from '../containers/ClusterContainer.js';

const Cluster = () => (
  <div className="container">
    <h1>Cluster</h1>
    <p>
      You can see the Kong cluster members, and forcibly remove a node from the cluster,
      using the following endpoints. For more information read the clustering documentation.
      You can also execute some of these operations using the CLI.
    </p>

  </div>
);

export default Cluster;
