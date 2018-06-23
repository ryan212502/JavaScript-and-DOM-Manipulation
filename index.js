var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");
var $searchBtn5 = document.querySelector("#search5");



$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn5.addEventListener("click", handleSearchButtonClick5);


var filterufo = dataSet;


function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filterufo.length; i++) {
    
    var ufos = filterufo[i];
    var fields = Object.keys(ufos);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufos[field];
    }
  }
}

function handleSearchButtonClick() {

    var filterDate = $dateInput.value.trim();
    if (filterDate != "") {
      filterufo = dataSet.filter(function (sighting) {
        var sightingDate = sighting.datetime;
        return sightingDate === filterDate;
      });
    };
    renderTable();
  };

function handleSearchButtonClick2() {
  var filterCity = $cityInput.value.trim().toLowerCase();
   if (filterCity != "") {
    filterufo = dataSet.filter(function (sighting) {
        var sightingCity = sighting.city;
        return sightingCity === filterCity;
      });
    };
    renderTable();
  };

function handleSearchButtonClick3() {
  var filterState = $stateInput.value.trim().toLowerCase();
   if (filterState != "") {
    filterufo = dataSet.filter(function (sighting) {
          var sightingState = sighting.state;
          return sightingState === filterState;
        });
      };
      renderTable();
    };

function handleSearchButtonClick4() {
  var filterCountry = $countryInput.value.trim().toLowerCase();
     if (filterCountry != "") {
      filterufo = dataSet.filter(function (sighting) {
            var sightingCountry = sighting.country;
            return sightingCountry === filterCountry;
          });
        };
        renderTable();
      };

function handleSearchButtonClick5() {
  var filterShape = $shapeInput.value.trim().toLowerCase();
     if (filterShape != "") {
      filterufo = dataSet.filter(function (sighting) {
              var sightingShape = sighting.shape;
              return sightingShape === filterShape;
            });
          };
          renderTable();
        };

renderTable();