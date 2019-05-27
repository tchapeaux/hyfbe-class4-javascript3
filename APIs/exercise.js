const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);

    // Make select element
    const chooseStation = document.getElementById("choose-station");
    const chooseStationSelect = chooseStation.appendChild(
      document.createElement("select")
    );
    chooseStationSelect.innerHTML = data.records
      // add <option></option> to each name
      // for the 'value', we use the station id from the JSON
      // we use template literals to construct the string
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      .map(
        station =>
          `<option value="${station.recordid}">${station.fields.name}</option>`
      )
      // join the array elements as a single string
      .join("\n");

    // Modify DOM when choosing an option in the select
    chooseStationSelect.addEventListener("change", function() {
      const chosenStationId = this.value;

      // find the station in the JSON based on its id
      const station = data.records.find(
        record => record.recordid === chosenStationId
      );

      // modify the DOM to add the station data to the page
      // to know which field names to use, look at the JSON or the API documentation
      document.getElementById("station-name").innerHTML = station.fields.name;
      document.getElementById("station-bikes-count").innerHTML =
        station.fields.available_bikes;
      document.getElementById("station-free-spaces-count").innerHTML =
        station.fields.available_bike_stands;
    });
  }
};
xhttp.open(
  "GET",
  "https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=villo-stations-availability-in-real-time",
  true
);
xhttp.send();
