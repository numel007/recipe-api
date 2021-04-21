# Nightly Spotify Playlist Generator (NSPG)
[Click to visit the site.](https://www.google.com/)

`NightlySpotifyPlaylistGenerator`(NSPG) is a playlists generator built off the [Spotify](https://www.google.com) API.
<br>
<br>
Spotify generates a "discover weekly" playlists for users, but the user has no say in what appears in this playlist. This app gives the user more control over what artists and genres will be added to their playlist. Even better, this app generates a new playlist every day instead of once a week!

## Usage
Log in to the [site](https://www.google.com/) using your Spotify credentials
Add your favorite artists to your profile
Add your favorite genres to your profile
Navigate to the generators tab
Input the name of your new playlist and select seed artists and genres from dropdown menus
Click submit button

# Data
`NSPG`supports GETs from 2 endpoints, returning a json of related data.

## Playlist Data
GET`http://site.com/profile/playlists`<br><br>

Data | Key | Type
---- | --- | ----
Playlist name | `"name"` | string
Last update time | `"timestamp"` | date 
Generated playlist? | `"generated"` | boolean

```javascript
{ 
    "playlists": [
        {
        "name": "lofi hip hop music - beats to relax/study to", 
        "timestamp": "05-18-2021 - 13:15:47", 
        "generated": False
        },
        {
        "name": "Your Custom Playlist", 
        "timestamp": "05-20-2021 - 18:05:12", 
        "generated": True
        }
    ]
}
```

## Song Data
GET`http://site.com/profile/playlists/<playlist_title>/songs`

Key | Data description | Type
--- | ---------------- | ----
`"title"` | Song title | string
`"uri"` | Spotify URI | string
`"genre"` | Associated genres | string
`"artists"` | Array of contributing artists | array

```javascript
{
  "<playlist_title>": [
        {
        "title": "Extraterrestrial - VIP", 
        "uri": "spotify:track:6rfwJWWo0R1DmpS0WJ8acj",
        "genre": "electronic",
        "artists": ["TYNAN"]
        },
        {
        "title": "Geekin", 
        "uri": "spotify:track:0kl68XfbVKbDuU6NC6z8pk",
        "genre": "electronic",
        "artists": ["MeSo", "Blurred Vzn"]
        }
    ]
    ...
}
```

# License & Disclaimer
`NSPG`is available under the MIT license. See the [LICENSE](https://www.google.com) for more info.<br>
`NSPG`uses the [Spotify](https://github.com/jmfernandes/robin_stocks) API. No copyright infringement intended.
