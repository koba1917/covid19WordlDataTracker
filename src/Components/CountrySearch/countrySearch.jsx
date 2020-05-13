import React , { useState , useEffect } from 'react'
import { NativeSelect , FormControl } from '@material-ui/core'
import { countriesFetch } from '../Api'
import styles from './countrySearch.module.css'


const CountrySearch = ({handleCountryChange}) => {

    const [ countries, setCountries ] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await countriesFetch()
            setCountries(data)
        }
        fetchData()
    },[])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {
                    countries.map((country, index) => (<option key={index} value={country}>{country}</option>))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySearch