import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { Typography, OutlinedInput } from '@mui/material';

const Filter = ({ filter }) => {

    const dispatch = useDispatch()

    const changeFilter = (e) => {
        const { value } = e.target;
        dispatch(updateFilter(value))
    }

    return (
        <>
            <Typography>Find contacts by name</Typography>
            <OutlinedInput type="text" name="filter" value={filter} onChange={changeFilter}
                sx={{height:'1.5rem'}} />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func
}

export default Filter