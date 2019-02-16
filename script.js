
const url = "https://calendarific.com/api/v2/holidays?country=US&year=2018&api_key=XXXXXXX"

fetch(url)
    .then(function(response)){
	return response.json();
    }
