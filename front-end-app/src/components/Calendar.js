import React, {Component } from 'react'

class Calendar extends Component {
    state = {
        calendarUrl: ''
    }

    createGoogleEvent = (title, date, details, location) => {
        const baseUrl = 'https://calendar.google.com/calendar/r/eventedit?'
        const titleParam = 'text='
        const titleVal = 'Some event Title'
        const dateParam = '&dates='
        const dateVal = '20180512T230000Z/20180513T030000Z'
        const detailsParam = '&details='
        const detailsVal = 'some details about the event'
        const locationParam = '&location='
        const locationVal = '455 Granville, Vancouver'

        const eventUrl = baseUrl + titleParam + titleVal + dateParam + dateVal + detailsParam + detailsVal + locationParam + locationVal

        this.setState({
            calendarUrl: eventUrl
        })
    }

    createYahooEvent = (title, date, details, location) => {
        const baseUrl = 'https://calendar.yahoo.com/?v=60&view=d&type=20'
        const titleParam = '&title='
        const titleVal = 'Some event Title'
        const dateStartParam = '&st='
        const dateStartVal = '20180512T230000Z'
        const dateEndParam = '&et='
        const dateEndVal = '20180513T030000Z'
        const detailsParam = '&desc='
        const detailsVal = 'some details about the event'
        const locationParam = '&in_loc='
        const locationVal = '455 Granville, Vancouver'

        const eventUrl = baseUrl + titleParam + titleVal + dateStartParam + dateStartVal + dateEndParam + dateEndVal + detailsParam + detailsVal + locationParam + locationVal

        this.setState({
            calendarUrl: eventUrl
        })
    }

    render() {
        return (
            < div className = 'buttonContainer' >
                <button type="button" className="btn btn-outline-primary btnCalendar" onClick={() => this.createGoogleEvent()}><i className='material-icons calendarIcons'>calendar_today</i><a href= {this.state.calendarUrl}>Google Calendar</a></button>
                <button type="button" className="btn btn-outline-primary btnCalendar" onClick={() => this.createYahooEvent()}><i className='material-icons calendarIcons'>calendar_today</i><a href= {this.state.calendarUrl}>Yahoo Calendar</a></button>
            </div>
        )
    }
}

export default Calendar