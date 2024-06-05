async function fetchData() {
  try {
    const response = await fetch(`https://ringsdb.com/api/public/cards/`/*,{mode: "no-cors"}*/)
    
    // (`https://ringsdb.com/api/public/card/${cardCode}.json`);
    const responseJson = await response.json();
    console.log(responseJson)

    const card = responseJson[0]

    document.getElementById("card-name").innerText = card.name;
    document.getElementById("card-image").src = 'https://ringsdb.com' + card.imagesrc
    // (`https://ringsdb.com/bundles/cards/${cardCode}.png`)

  } catch (error) {
    console.error(error);
  }
}

fetchData()