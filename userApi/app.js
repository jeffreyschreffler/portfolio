const userCard = document.querySelector('#userCard');
const userInfo = document.querySelector('#userInfo');
const userNameDisplay = document.createElement('h2');
const userImageDisplay = document.createElement('img');
const userPhoneDisplay = document.createElement('h4');
const userEmailDisplay = document.createElement('h4');
const getuserBtn = document.querySelector('#getUserBtn');

getuserBtn.addEventListener('click', () =>{
    getUser()
})

const getUser = () => {
    axios.get('https://randomuser.me/api/?gender=female')
.then((res) => {
    console.log(res.data.results);
    // console.log(res.data.results[0].name.first + ' ' + res.data.results[0].name.last);
    userCard.append(userNameDisplay);
    userCard.append(userImageDisplay);
    userNameDisplay.textContent = res.data.results[0].name.first + ' ' + res.data.results[0].name.last;
    userNameDisplay.id = 'userNameDisplay';
    userCard.append(userPhoneDisplay);
    userPhoneDisplay.textContent = res.data.results[0].phone;
    userCard.append(userEmailDisplay);
    userEmailDisplay.textContent = res.data.results[0].email;
    return res.data.results[0].picture

})
.then((res) => {
    // console.log(res.large)
    userCard.append(userImageDisplay);
    userImageDisplay.src = res.large;
    
    
})
.catch((err) => {
    console.log(err)
})
}





// axios.get('https://randomuser.me/api/?gender=female')
// .then((res) => {
//     console.log(res.data.results);
//     console.log(res.data.results[0].name.first + ' ' + res.data.results[0].name.last);
//     userCard.append(userNameDisplay);
//     userCard.append(userImageDisplay);
//     userNameDisplay.textContent = res.data.results[0].name.first + ' ' + res.data.results[0].name.last;
//     userNameDisplay.id = 'userNameDisplay';
//     userCard.append(userPhoneDisplay);
//     userPhoneDisplay.textContent = res.data.results[0].phone;
//     userCard.append(userEmailDisplay);
//     userEmailDisplay.textContent = res.data.results[0].email;
//     return res.data.results[0].picture

// })
// .then((res) => {
//     console.log(res.large)
//     userCard.append(userImageDisplay);
//     userImageDisplay.src = res.large;
    
    
// })
// .catch((err) => {
//     console.log(err)
// })