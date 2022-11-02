import React from 'react'
import style from './FilterBar.module.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFilters } from '../../Redux/movie-reducer'

const FilterBar = (props) => {
    const dispatch = useDispatch()
    const [sort, setSort] = useState('')

    const handleChange = (event) => {
        setSort(event.target.value)
    }

    useEffect(() => {
        dispatch(setFilters({ 'sort_by': sort }))
    }, [dispatch, sort])

    return (
        <div className={style.filterBar}>
            <FormControl
                fullWidth
                className={style.selector}
            >
                <InputLabel id="demo-simple-select-label">
                    Sort by:
                </InputLabel>
                <Select
                    className={style.selector__item}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort by:"
                    onChange={handleChange}
                >
                    <MenuItem value='primary_release_date.desc'>New movie</MenuItem>
                    <MenuItem value='popularity.desc'>Popular</MenuItem>
                    <MenuItem value='revenue.desc'>Revenue</MenuItem>
                    <MenuItem value='vote_average.desc'>Vote</MenuItem>
                    <MenuItem value='original_title.asc'>Original title</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterBar;