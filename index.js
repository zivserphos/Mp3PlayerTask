const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 6,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],

  numberOfSongs:6,
  playSong(song)
  {
    for (let i of player.songs)
    {
      if (song[id] === i[id])
      {
        return i;
      }
    }
    console.log("Undefined");
  },
}

function playSong(id) 
{
  console.log(player.playSong(id));
}

function removeSong(id)
{
  let counter = 0;
  for (let i in player.songs)
  {
     if (player.songs[counter][id] === id)
     {
        player.songs.splice(counter,1)
        console.log("Song Removed");
        player.numberOfSongs -=1;
        break;
     }
     counter++;
  }
  console.log("Song did not remvoed try different ID");
}

function addSong(title, album, artist, duration, id) 
{
  if(!(typeof(id) === "number"))
  {
    id = player.numberOfSongs(+1);
  }
  duration = duration.split(":");
  duration = parseInt(duration[0]*60) + parseInt(duration[1]);

  player.songs[length] = 
  {
      title: title,
      album: album,
      artist: artist,
      duration: duration,
      id: id
      
  }
  return id;
}

function removePlaylist(id) {
  // your code here
}

function createPlaylist(name, id) {
  // your code here
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
