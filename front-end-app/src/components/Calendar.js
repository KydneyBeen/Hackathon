import React, {Component } from 'react'

class Calendar extends Component {
    state = {
        calendarUrl: ''
    }

    createGoogleEvent = (title, date, details, location) => {
        const baseUrl = 'https://calendar.google.com/calendar/r/eventedit?'
        const titleParam = 'text ='
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

    render() {
        console.log('Calendar props', this.props)

        return (
            <div>
                <button onClick={() => this.createGoogleEvent()}><a href= {this.state.calendarUrl}> add to google Calendar</a></button>
            </div>
        )
    }
}

export default Calendar

// "https://calendar.google.com/calendar/r/eventedit?text=My+Custom+Event&dates=20180512T230000Z/20180513T030000Z&location=Garage+Boston+-+20+Linden+Street+-+Allston,+MA+02134"
// https: //calendar.google.com/calendar/r/eventedit?
// text=My+Custom+Event
// &dates=20180512T230000Z/20180513T030000Z
// &details=For+details,+link+here:+https://example.com/tickets-43251101208
// &location=Garage+Boston+-+20+Linden+Street+-+Allston,+MA+02134

// <a href="https://bay02.calendar.live.com/calendar/calendar.aspx?rru=addevent&dtstart=20151119T140000Z&dtend=20151119T160000Z&summary=Summary+of+the+event&location=Location+of+the+event&description=example+text.&allday=false&uid=">add to Outlook calendar</a>
// <a href = "https://calendar.yahoo.com/?v=60&view=d&type=20&title=Summary+of+the+event&st=20151119T090000&et=20151119T110000&desc=example+text.%0A%0AThis+is+the+text+entered+in+the+event+description+field.&in_loc=Location+of+the+event&uid=" > add to Yahoo calendar < /a>