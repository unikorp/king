import { connect } from 'react-redux';
import { fetchCluster, fetchClusterSuccess, fetchClusterFailure } from '../actions/cluster';
import ClusterList from '../components/clusterList';

const mapStateToProps = (state) => {
  return {
    clusterList: state.clusters
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCluster: () => {
      dispatch(fetchCluster())
        .then((response) => {
          console.log(response);
          !response.error ? dispatch(fetchClusterSuccess(response.payload.data)) : dispatch(fetchClusterFailure(response.payload.data));
        })
      ;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterList);
