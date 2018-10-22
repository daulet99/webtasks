let countries = ["Kazakhstan","Turkey","Russia","UAE"];
let cities_by_country = {"Kazakhstan":["Kostanay", "Almaty", "Astana"], "Turkey":["Ankara","Antalya","Belek"], "Russia":["Chelybinsk", "Moscow", "Kazan"], "UAE":["Dubai", "Abu-Dhabi", "Sharjah"]};

function f() {
    var q = document.getElementById('cities');
    for (const i in q)
    {
        q.remove(i);
    }
    for (let i in cities_by_country)
    {
        if(event.target.value ==  i)
        {
            for(let j of cities_by_country[i])
            {
                city = document.createElement("option");
                city.text = j;
                q.add(city);
            }
        }
    }

}
var country = document.getElementById('countries');

for (let i of countries)
{
    element = document.createElement("option");
    element.text = i;
    country.add(element);
}
document.getElementById('countries').addEventListener('click',f);