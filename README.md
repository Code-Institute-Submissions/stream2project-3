Stream 2 project to plot Video game sales.<br/>

Live link:<br/>
https://stream2-dashboard.herokuapp.com/
<br/>
  
The purpose of the project is to reflect the popularity of game sales using the top five home console manufacturers.<br/>
It will show how popular particular styles of games are and which manufacturer is best at making these types of game.<br/>
From the dataset, I suspect that the downturn in game sales is a matter of online download sales taking over, in combination with the rise in price of video games in general.<br/>

All graphs will change dynamically wit each other, and a reset has been included at the top of the page.<br/>
Mobile first design is not a requirement for this project, but Bootstrap has been used to place graphs relative to each other<br/>
A Pie chart has been included as it is a requirement but I have also included an equivalent Bar chart with standardised colouring  per manufacturer so either can be used to adjust the filters.<br/>
I opted for a vertical bar chart for the Publishers list and restricted it to display only the top 100, as there were too many, and a lot had no data.<br/>
A Line chart was used to demonstrate the sales data of video games per year.<br/>
An additional Bar chart was added to allow users to filter data by Genre.<br/>

To Do:<br/>
* Testing documentation
* New yearly line chart for multiple line chart.
* Add selection box for the above

Data cleaning:<br/>
* Restricted data to manufacturers Sega, Nintendo, Sony Mocrosoft, and NeoGeo as other data was present but blank.
* Searched for misssing data online and populated as much as possible from other sources (release dates and publishers).
* Shortened publishers names and combined sub entities to shorten the list.
* Created manufacturer column from console name fields.
* Removed sales less than 10,000 units, as the source data did not contain sales data for older consoles.

Tools used:<br/>
* DC
* D3
* Python3
* MongoDB
* Flask
* Javascript
* HTML5
* CSS3
* GitHub
* Heroku
* Jinja2
* Gunicorn
* Bootstrap

Guidelines:<br/>
* The data that you choose to work with, should be stored in either an SQL database (preferably MySQL), or a noSQL database (preferably MongoDB)
* The project must use Flask to retrieve the data from the database and return it to the browser.
* The dashboard should include, at the minimum a line/bar graph and a pie graph. Add any additional graph types that may be relevant to your dataset.
* The front end must use D3.js to display the data and there must be some way of interacting and filtering the data in the charts using DC.js and crossfilter.js, or another equivalent.
* Use as much functionality as you deem necessary from the lessons
* Make sure your site is as responsive as possible. Use appropriate testing sites to test your web sites in several different environments
* Write a README.md file for your project (in Markdown format) that explains what the project does and the need that it fulfils. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based off other code, explain what was kept and/or how it was changed to fit your need. A project submitted without a README.md file will FAIL.
* In addition to the README.md file, you may include in your repository supplementary documentation and/or other relevant supporting material for the assessor in any format that is automatically handled by web browsers, such as html, pdf, jpg, etc. Files in proprietary formats such as Microsoft doc/docx will be ignored; but this is generally not a hindrance, since the vast majority of formats can be easily exported to PDF.
* Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.
* You should deploy the final working version of your code to Heroku (or an alternative hosting platform that you are familiar with)
