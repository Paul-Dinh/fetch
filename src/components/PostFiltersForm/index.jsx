import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value
        setSearchTerm(value)

        if (!onSubmit) return;
        //Set -- 100 -- clear, set -- 300 --> submit
        //Set -- 300 -> submit
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues)
        }, 500)
    }

    return (
        <form>
            <input
                type='text'
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFiltersForm;