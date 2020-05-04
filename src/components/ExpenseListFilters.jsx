import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => {
    const { filters: { text } } = props;
    const { dispatch } = props;
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    dispatch(setTextFilter(e.target.value));
                }}
            />
        </div>
    );
};

ExpenseListFilters.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        text: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => (
    {
        filters: state.filters,
    }
);

export default connect(mapStateToProps)(ExpenseListFilters);
