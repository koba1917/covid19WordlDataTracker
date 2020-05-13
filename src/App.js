import React , { Component } from 'react'

//components import
import Card from './Components/Card/card'
import Chart from './Components/Chart/chart'
import CountrySearch from './Components/CountrySearch/countrySearch'
import logo from './images/image.png'

//import api calls
import { fetchData } from './Components/Api'

//importing css.module
import styles from './App.module.css'

class App extends Component{

        state={
            data:[],
            country:''
        }

    async componentDidMount(){
        const data = await fetchData()
        this.setState({data})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)
        this.setState({data:data, country: country})
    }

    render(){

        const { data , country } = this.state

        return(
            <div className={styles.container}>
                <img src={logo} alt='covid-19' className={styles.image}/>
                <Card data={data}/>
                <CountrySearch handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App