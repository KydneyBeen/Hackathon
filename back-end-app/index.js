const express = require ('express')
const app = express()

const eventInfoAraay = [
    {
        title: 'Resume Building 101',
        description:`If this is the year you decided to find a new job or change industries altogether then we have a three-part workshop series that will help you conquer your next job search. 
            This 2hr workshop is catered to those looking to create an effective resume and cover letter. Be prepared to go through each section of a resume and how to format it so it's clear and concise. 
            Bring all your job specific questions and be prepared to walk away feeling confident and prepared to tackle your next job search. Please bring a computer!`,
        address: '455 Granville Street, Suite 400',
        time: `Wednesday August 8th, 2018, 6:00 - 8:00 PM`
    },
    {
        title: 'Search Engine Marketing Fundamentals',
        description:`Looking to boost your career potential by learning SEO, Google AdWords & Analytics? Experience what learning SEO/SEM & Analytics at BrainStation is all about.
            Our Part-time SEO/SEM & Analytics course is an effective medium for achieving your digital goals, as the program is hands-on, project-based and led by an active industry expert. If you’re curious to dive deeper into SEO/SEM & Analytics, this 90 minute workshop is an excellent precursor to the Part-time course course while offering a sense of the BrainStation learning experience. You'll have a chance to explore our learning model, custom portal and chat with Learning Advisors.
            Search Engine Marketing Fundamentals will provide you with the basic understanding of search engines and analytics, as well as an overview of the essential skills of an SEO expert. Discuss the tools they use when building effective SEO strategies for brands and how to use Google AdWords to create paid search and display ads. You will also explore Google Analytics to learn about its key features and reporting tools. Please remember to bring a charged laptop to the workshop as outlet space is limited.`,
        address: '455 Granville Street, Suite 400',
        time: `Monday August 13th, 2018, 6:00 - 7:30 PM`
    },
    {
        title: 'Intro to Data Analytics',
        description: `Looking to become confident with data? Experience what learning Data Analytics at BrainStation is all about. 
            Our Part-time Data Analytics course is an effective medium for achieving your digital goals, as the program is hands-on, project-based and led by an active industry expert. If you’re curious to dive deeper into Data Analytics, this 90 minute workshop is an excellent precursor to the Part-time course course while offering a sense of the BrainStation learning experience. You'll have a chance to explore our learning model, custom portal and chat with Learning Advisors.
            This Introductory Workshop will provide you with a basic understanding of Data Analytics–how to  collect, analyze and communicate insights using tools like Excel and SQL. We’ll look at real-world examples of Data Analytics and discuss how data can be used to generate ideas, solve problems and encourage innovation. 
            The workshop will close with a hands-on exercise allowing you to apply discussed content to analyze data and draw insights. Please remember to bring a charged laptop to the workshop as outlet space is limited.`,
        address: '455 Granville Street, Suite 400',
        time: `Tuesday August 14th, 2018, 6:00 - 7:30 PM`
    }
]


app.get('/', (req, res) => {
    res.send(eventInfoAraay)
})

app.listen(8000, () => {
    console.log(`Server Started on http://localhost:8000`)
})