import {
  withState,
} from 'recompose';

const StateProvider = withState(
  'state',
  'setState',
  props => props.initialState
)(({ children, state, setState }) => children(state, setState));

export default StateProvider;
