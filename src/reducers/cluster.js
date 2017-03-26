import { FETCH_CLUSTER, FETCH_CLUSTER_SUCCESS, FETCH_CLUSTER_FAILURE, RESET_CLUSTER } from '../actions/cluster';

const INITIAL_STATE = {
  clusterList: {
    clusters: [], error: null, loading: false,
  },
};

export default function (state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {

    case FETCH_CLUSTER:
      return { ...state, clusterList: { clusters: [], error: null, loading: true } };

    case FETCH_CLUSTER_SUCCESS: // return list of clusters and make loading = false
      return { ...state, clusterList: { clusters: action.payload, error: null, loading: false } };

    case FETCH_CLUSTER_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message };
      return { ...state, clusterList: { clusters: [], error: error, loading: false } };

    case RESET_CLUSTER: // reset postList to initial state
      return { ...state, clusterList: { clusters: [], error: null, loading: false } };

    default:
      return state;
  }
}
