import { connect } from 'react-redux';

import StrategyConstraintInput from './strategy-constraint-input';

export default connect(
    state => ({
        contextNames: state.context.map(c => c.name),
    }),
    {}
)(StrategyConstraintInput);
