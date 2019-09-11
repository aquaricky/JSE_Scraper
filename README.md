# JSE_Scraper
 Web Scraper for the Jamaica Stock Exchange website

The sraper module:
    Responsible for pulling down HTML pages, looking for the necessary element blocks and grabbing the required information.

The scheduler module:
    Responsible for launching specific tasks at a given time.

The db-Handler module:
    Responsible for sending scraped data into the database (basic getting and setting of data leave valdiation and duplicate detection to processing modules)

The processing module:
    Responsible for validation and managing logics.