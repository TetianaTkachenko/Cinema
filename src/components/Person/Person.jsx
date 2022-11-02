import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonList from '../../PersonList/PersonList';
import { getPerson } from '../../Redux/persons-reducer';
import style from './Person.module.css'

const Person = () => {
    const dispatch = useDispatch()
    const [changedTimeWindow, setChangedTimeWindow] = useState('day')

    const person = useSelector(({ person } = {}) => {
        return {
            person: person.person,
            page: person.pages,
        }
    })

    const onChangeValueTime = event => setChangedTimeWindow(event.target.value)

    useEffect(() => {
        dispatch(getPerson(changedTimeWindow, person.page))
    }, [dispatch, changedTimeWindow, person.page])

    const onPageChanged = useCallback(
        (page) => {
            dispatch(getPerson(changedTimeWindow, page))
        }, [changedTimeWindow, dispatch])

    return (
        <div>
            <div className={style.radioBox}>
                <p className={style.radio__title}>
                    Tranding for:
                </p>
                <div
                    className={style.radioBox}
                    onChange={onChangeValueTime}
                >
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="day"
                        >
                            <FormControlLabel value="day" control={<Radio />} label="Day" />
                            <FormControlLabel value="week" control={<Radio />} label="Week" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <PersonList
                person={person.person}
                page={person.page}
                onPageChanged={onPageChanged}
            />

        </div>
    )
}
export default Person;
