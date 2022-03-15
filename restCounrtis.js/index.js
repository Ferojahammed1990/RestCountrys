
const loadCountris = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>disPlayCountrys(data))
}
const disPlayCountrys = countris =>{
    const countrisHtml = countris.map(country => getCountryHtml(country))
    // console.log(CountrisHtml)
    const container = document.getElementById('countris')
    container.innerHTML = countrisHtml.join('')
}
const getCountryHtml = country =>{
    return `
    <div class="country">
    <h2> ${country.name.common} </h2>
    <img class="countrys" src="${country.flags.png}">
    </div>

    `}

loadCountris ()
// 44/3 The end
