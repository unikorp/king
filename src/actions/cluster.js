import axios from 'axios';

// Cluster list
export const FETCH_CLUSTER = 'FETCH_CLUSTER';
export const FETCH_CLUSTER_SUCCESS = 'FETCH_CLUSTER_SUCCESS';
export const FETCH_CLUSTER_FAILURE = 'FETCH_CLUSTER_FAILURE';
export const RESET_CLUSTER = 'RESET_CLUSTER';

// Books api
const ROOT_URL = 'http://127.0.0.1:8025/api';

export function fetchCluster() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/books`,
    headers: [],
  });

  return {
    type: FETCH_CLUSTER,
    payload: request,
  };
}

export function fetchClusterSuccess(cluster) {
  return {
    type: FETCH_CLUSTER_SUCCESS,
    payload: cluster,
  };
}

export function fetchClusterFailure(error) {
  return {
    type: FETCH_CLUSTER_FAILURE,
    payload: error,
  };
}
