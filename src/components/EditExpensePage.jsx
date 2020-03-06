import React from 'react';
import PropTypes from 'prop-types';

const EditExpensePage = (props) => {
    const { match: { params: { id } } } = props;
    return (
        <div>
            Edit expense page.
            Id is:
            { id }
        </div>
    );
};

EditExpensePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default EditExpensePage;
