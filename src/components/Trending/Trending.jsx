import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrending } from '../../Redux/trending-reducer';
import TrendingList from '../TrendingList/TrendingList';
import style from './Trending.module.css'

const Trending = () => {
    const dispatch = useDispatch()
    const [changedMediaType, setChangedMediaType] = useState('movie')
    const [changedTimeWindow, setChangedTimeWindow] = useState('day')

    const trending = useSelector(({ trending } = {}) => {
        return {
            trending: trending.trending,
            page: trending.trendingPage,
            media_type: trending.media_type,
            time_window: trending.time_window
        }
    })

    useEffect(() => {
        dispatch(getTrending(changedMediaType, changedTimeWindow, trending.page))
    }, [dispatch, changedMediaType, changedTimeWindow, trending.page])

    const onChangeValueMediatype = event => setChangedMediaType(event.target.value)
    const onChangeValueTime = event => setChangedTimeWindow(event.target.value)

    const onPageChanged = useCallback(
        (page) => {
            dispatch(getTrending(changedMediaType, changedTimeWindow, page))
        }, [dispatch, changedMediaType, changedTimeWindow]
    )

    return (
        <div>
            <div className={style.radioBox}>
                <div>
                    <p className={style.radio__title}>
                        Tranding for:
                    </p>
                </div>
                <div className={style.box}>
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
                    <p className={style.radio__title}>
                        AND
                    </p>
                    <div
                        className={style.radioBox}
                        onChange={onChangeValueMediatype}
                    >
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue="movie"
                            >
                                <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                                <FormControlLabel value="tv" control={<Radio />} label="TV" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <TrendingList
                onPageChanged={onPageChanged}
                trending={trending.trending}
                page={trending.page}
            />
        </div>
    )
}
export default Trending;
/*import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
      Trending for:
      </FormLabel>
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
}*/
