const API_KEY="Enpt2JeWZMZY0L2crKWYblrZ6Qt1"

//get all the matches

export const getMatches=()=>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error: ",error))
}

//load match details
export const getMatchDetail=(id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error: ",error))

}