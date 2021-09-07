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
    let newDuration = [Math.floor(song.duration/60) , song.duration%60];
    newDuration = newDuration.join(":")
    song.duration = newDuration;
    if(song.duration.length < 4)
    {
      song.duration = parseInt(song.duration[0]*60) + parseInt(song.duration[1]*10) + parseInt(song.duration[2])
    }

    console.log(song.duration)
    return song;
  },
}

function playSong(id) 
{
  let indexById = player.songs.findIndex(i => i.id === id);
  let originDuration = player.songs[indexById].duration
  if (indexById === -1)
  {
    throw("YOU PICKED A WRONG ID, THERE ISN'T A SONG WITH THAT ID");
  }
  else
  {
    console.log(player.playSong(player.songs[indexById]))
    player.songs[indexById].duration = originDuration;
  }
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
  if (index === -1)
  {
    throw "YOU PICKED A WRONG ID";
  }
  else
  {
    for (let song of player.playlists[index].songs)
    {
      playSong(idSong);
    }
  }

}

function editPlaylist(playlistId, songId)
{
 let indexPlaylist = player.playlists.findIndex(i => i.id === playlistId);
 let songIndex = player.songs.findIndex(i => i.id === songId);
 if (songIndex === -1 || indexPlaylist === -1)
 {
   throw("There isn't a song with that id you should try again");
 }
 else if (indexPlaylist === -1)
 {
   throw ("There isn't a playlist with that id you should try again")
 }
 let songPlace = player.playlists[indexPlaylist].songs.indexOf(songId)
 if (songPlace === -1)
 {
    player.playlists[indexPlaylist].songs.push(songId);
 }
 else
 {
   if(player.playlists[indexPlaylist].songs.length === 1)
   {
     removePlaylist(playlistId)
   }
   else
   {
     player.playlists[indexPlaylist].songs.splice(songPlace, 1);
   }
 }
 

}

function songReturn(id)
{
  return player.songs[player.songs.findIndex(i => i.id === id)]
}

function durationDisplay(duration)
{
  let newDuration = [Math.floor(duration/60) , duration%60];
  console.log(newDuration[1])
  if (newDuration[1] < 10)
  {
      newDuration[1] = "0" + newDuration[1].toString();
  }
  if (newDuration[0] < 10)
  {
      console.log(newDuration[0])
      newDuration[0] = "0" + newDuration[0].toString();
      console.log(newDuration[0])
  }
  return newDuration.join(":");
  
}

function playlistDuration(id)
{
  let sum=0;
  let indexPlaylist = player.playlists.findIndex(i => i.id === id)
  if (indexPlaylist === -1 )
  {
    throw ("WRONG input;")
  }
  else
  {
    for (let songId of player.playlists[indexPlaylist].songs)
    {
      sum+= songReturn(songId).duration;
    }
    return sum;
  }
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

console.log(playlistDuration(1));
