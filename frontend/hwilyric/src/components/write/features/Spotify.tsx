import { useEffect, useState } from "react"

const CLIENT_ID = "052b23adcd314acda94c5aa5c9e605a2"
const CLIENT_SECRET = "88314097ce41465b8bcc57be503e14f8"

function Spotify() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  async function search() {
    var albumParameters = {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'Authorization': 'Bearer' + accessToken
      }
    }

    var albumId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', albumParameters)
      .then(response => response.json())
      .then(data => { return data.album.items[0].id })
    console.log("앨범 id" + albumId)
  }
  
  const handleOnKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      setSearchInput(event.target.value)
      search()
    }
  }

  return (
      <div>
        <input onKeyPress={handleOnKeyPress}></input>
      </div>
  )
}

export default Spotify