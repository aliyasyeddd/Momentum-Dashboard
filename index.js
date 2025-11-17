fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })


//get Dogecoin data
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(response => {
        if (!response.ok) {
            throw Error("Something went wrong")
        }
        return response.json()
    })
    .then(data => {
        document.getElementById('crypto-top').innerHTML = `
         <img src=${data.image.small} alt="icon" />
          <span>${data.name}</span>
        `
        document.getElementById('crypto').innerHTML += `
          <p>🎯: $${data.market_data.current_price.usd}</p>
          <p>👆: $${data.market_data.high_24h.usd}</p>
          <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.log(err))

function getCurrentTime() {
    const date = new Date().toLocaleTimeString("en-us", { timeStyle: "short" })
    document.getElementById('time').textContent = date
}

setInterval(getCurrentTime, 1000)
