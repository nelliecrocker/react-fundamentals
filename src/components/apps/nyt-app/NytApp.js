import React, { useState } from 'react';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'NcZAL4dmuLxcG1coCo5pJMXGfvjohZds'

const NytApp = () => {

    const [search, setSearch] = useState('')
    const [statDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const [results, setResults] = useState([])

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}$q=${search}`
        url = startDate ? url + `&begin_date=${startDate}` : url
        url = endDate ? url + `&end_date=${endDate}` : url

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err))
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={ }>
                    <span>Enter a single search term (required) :</span>
                    <input type="text" name="search" onChange={ } required />
                <br />
                <span>Enter a start date:</span>
                <input type="date" name="startDate" pattern="[0-9]{8}" onChange={ } />
                <br />
                <span>Enter an end date:</span>
                <input type="date" name="endDate" pattern="[0-9]{8}" onChange={ } />
                <br />
                <button className='submit'>Submit search</button>
                </form>
            </div>
        </div>
    );
}

export default NytApp;