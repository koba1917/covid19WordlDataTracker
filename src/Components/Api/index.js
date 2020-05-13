import axios from 'axios'

const BASE_URL = 'https://covid19.mathdro.id/api'

const fetchData = async (country) => {

    let changeableURL = BASE_URL
    if(country){
        changeableURL=`${BASE_URL}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered , deaths, lastUpdate} } = await axios.get(changeableURL)
        const retrievedData = { confirmed, recovered, deaths, lastUpdate }
        return retrievedData
    } catch (error) {
        console.log(error)
    }
}

const fetchDailyData = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/daily`)
        //console.log(response)
        const data = response.data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return data
    }catch(error){
        console.log(error)
    }
}

const countriesFetch = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/countries`)
        const data = response.data.countries
        return data.map(country => country.name)
    } catch (error) {
        console.log(error)
    }
}

export { fetchData , fetchDailyData , countriesFetch }