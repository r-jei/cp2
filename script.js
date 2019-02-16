
document.getElementById("yearSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("yearInput").value;
    if (value === "")
	return;
    console.log(value);

    const url = "https://calendarific.com/api/v2/holidays?country=US&year=" + value + "&api_key=d8f5c429fa0641021fdaf713a4dc0bc08f69ed32";
    
    fetch(url)
	.then(function(response) {
	    return response.json();
	}).then(function(json) {
	    console.log(json.response.holidays);
	    let results = "";
	    for (let i=0; i < json.response.holidays.length; i++) {
		results += "<div>"
		results += json.response.holidays[i].date.iso
		results += "</div>"

		if (i !== json.response.holidays.length - 1)
		    results += "<br>"
	    }
	    results += "<div></div>"
	    
	    document.getElementById("holidays").innerHTML = results;

	});
});
