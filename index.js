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
      id: 7,
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
  uniqueID: 100,
  numberOfSongs:6,
  playSong(song)
  {
    return player.songs[player.songs.findIndex(i => i[id] === song[id])];
  },
}

function playSong(id) 
{
  console.log(player.playSong(id));
}

function removeSong(id)
{
  if (player.songs.findIndex(i => i.id === id) !== -1)
  {
    player.songs.splice(player.songs.findIndex(i => i.id === id) ,1)
    for (let i of player.playlists)
    {
      i.songs.splice(i.songs.indexOf(id),1)
    }
  }
  else
  {
    throw("shit on your face mother fucker");
  }
}

function addSong(title, album, artist, duration, id) 
{
  console.log("shit")
  if (arguments.length <5)
    {
      id = player.uniqueID;
      player.uniqueID+=1;
    }
  if (player.songs.findIndex(i => i.id === id) === -1)
  {
    duration = duration.split(":")
    duration = parseInt(duration[0] *60) + parseInt(duration[1]);

  let newSong = 
  {
      title: title,
      album: album,
      artist: artist,
      duration: duration,
      id: id,
  }
   player.songs.push(newSong);
   return id;
  }
  else
  {
   console.log("FSfsa")
   throw ("your mama begeves");
  }
}

function removePlaylist(id) 
{
  let indexById = player.playlists.findIndex(i => i.id === id)
  if (indexById === -1)
  {
    throw ("motherFucker");
  }
  else
  {
    player.playlists.splice(indexById , 1);
  }
  
}

function createPlaylist(name, id) 
{
  if (id === undefined)
  {
    console.log("fs")
    id = player.uniqueID;
    console.log(id);
    while (player.playlists.findIndex(i => i.id === id) !== -1)
    {
      console.log("gssg")
      player.numberOfPlaylists+=1;
      id = player.numberOfPlaylists;
    }
  }
  if (typeof(id) === "number" && player.playlists.findIndex(i => i.id === id) !== -1)
  {
    console.log(typeof(id))
    console.log("sh")
    throw ("you moran");
  }    

  else
  {
    console.log("sf")
    player.playlists[player.playlists.length] = 
  {
    id: id,
    name: name,
    songs: []
  }
  console.log(player.playlists[player.playlists.length-1])
  }
  
  return id;

}

function playPlaylist(id) 
{
  let index = player.playlists.findIndex(i => i.id === id)
  for (let idSong of player.playlists[index][songs])
  {
    playSong(idSong);
  }

}

function editPlaylist(playlistId, songId)
{
  let songById = player.songs[player.songs.findIndex(i => i.id === songId)];
  let indexPlaylist = player.playlists.findIndex(i => i.id===playlistId)
  if (player.playlists[indexPlaylist].songs.includes(songId))
  {
    player.playlists[indexPlaylist].songs.push(songById);
  }
  else if (player.playlists[indexPlaylist].songs.length === 1)
  {
    removePlaylist(player.playlists[indexPlaylist].id);
  }
  else
  {
    let songPlace = player.playlists[indexPlaylist].songs.indexOf(songId)
    player.playlists[indexPlaylist].songs.splice(songPlace , 1);
  }
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

console.log("sjgr");
console.log(createPlaylist("mandarina"));