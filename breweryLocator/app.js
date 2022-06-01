

const zipSearchBtn = document.querySelector('#searchBtn');
const zipLocation = document.querySelector('#searchBox');
const cardDisplay = document.querySelector('#cards');

zipSearchBtn.addEventListener('click', function(e){
    e.preventDefault();
    const userZipInput = zipLocation.value;
    console.log(userZipInput);
    axios.get(`https://api.openbrewerydb.org/breweries?by_postal=${userZipInput}`)
    .then((res) => {
        if(res.data.length === 0) {
            // console.log('no results')
            const cardData = document.createElement('div');
            cardData.classList.add('cardData');
            cardDisplay.append(cardData);
            const cardTitle = document.createElement('h4')
            cardData.append(cardTitle)
            cardTitle.textContent = 'No Results Found'
        } else {
            const returnedData = res.data
        // console.log(returnedData)
        returnedData.forEach(function(location){
            console.log(location.name)
            //card structure
            const cardData = document.createElement('div');
            cardData.classList.add('cardData');
            cardDisplay.append(cardData);
            const cardTitle = document.createElement('h4')
            const cardAddress = document.createElement('address');
            const cardPhone = document.createElement('phone');
            const cardWebsite = document.createElement('p');
            cardData.append(cardTitle,cardAddress,cardPhone,cardWebsite);
            cardTitle.textContent = location.name;
            cardAddress.textContent = `${location.street} ${location.city} ${location.state} ${location.postal_code}`;
            cardPhone.textContent = location.phone;
            cardWebsite.textContent = location.website_url;
            
        })
        }
        
    })
    .catch((err) => {
        console.log(err)
    })
});



