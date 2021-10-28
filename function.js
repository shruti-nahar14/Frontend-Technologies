let bread=prompt("Enter the type of bread ");
let vegies= prompt("Enter the type of vegiess ");
let sauce=prompt("Enter the type of sauce ");
function sandwich( bread ,vegies, sauce )
{
    let s=bread+"bread"+vegies+"vegies"+sauce+"sauce sandwich is ready";
    return s;
}
alert(sandwich(bread,vegies,sauce));