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
  playSong(song)
  {
    console.log("Playing " + song.title + " from " + song.album + " by " + song.artist + " | " + durationDisplay(song.duration) + ".");
  },
}

function playSong(id) 
{
  let indexById = player.songs.findIndex(i => i.id === id);
  if (indexById === -1)
  {
    throw("YOU PICKED A WRONG ID, THERE ISN'T A SONG WITH THAT ID");
  }
  else
  {
    player.playSong(player.songs[indexById])
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
    id = player.uniqueID;
    console.log(id);
    while (player.playlists.findIndex(i => i.id === id) !== -1)
    {
      player.uniqueID+=1;;
      id = player.uniqueID;
    }
  }
  if (typeof(id) === "number" && player.playlists.findIndex(i => i.id === id) !== -1)
  {
    throw ("You picked a wrong ID for that playlist");
  }    

  else
  {
    player.playlists[player.playlists.length] = 
  {
    id: id,
    name: name,
    songs: []
  }
  
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
      playSong(song);
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
  if (newDuration[1] < 10)
  {
      newDuration[1] = "0" + newDuration[1].toString();
  }
  if (newDuration[0] < 10)
  {
      newDuration[0] = "0" + newDuration[0].toString();
      
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
    console.log("full duration of the playlist is: " + durationDisplay(sum) + " in seconds its: " + sum);
    return sum;
  }
}



function searchByQuery(query)
{
  let songs = [];
  let playlists = [];
  query = query.toLowerCase();
  for (let song of player.songs)
  {
    if (song.title.toLowerCase().replace(/[\W_]/g , "").includes(query) || song.album.toLowerCase().replace(/[\W_]/g , "").includes(query) || song.artist.toLowerCase().replace(/[\W_]/g , "").includes(query))
    {
        songs.push(song);
    }
  }
  for (let playlist of player.playlists)
{
  if (query.includes(playlist.name.toLowerCase().replace(/[\W_]/g , "")))
      playlists.push(playlist);
}
  

  songs.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
  playlists.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
  return {songs , playlists};
  
}

function searchByDuration(duration) 
{
    duration = duration.split(":")
    duration = parseInt(duration[0])*60 + parseInt(duration[1]);
    let closestdur = Math.abs(duration - player.songs[0].duration);
    let closest = player.songs[0]
    console.log(closestdur)
    for (let song of player.songs)
    {
      console.log(Math.abs(duration - song.duration))
      if (Math.abs(duration - song.duration) < closestdur)
          {
            
            closest = song;
            closestdur = Math.abs(duration - song.duration);
            console.log(closestdur)
            
          }
    }
    for (let playlist of player.playlists)
    {
      console.log(Math.abs(duration-playlistDuration(playlist.id)))
      if (Math.abs(duration-playlistDuration(playlist.id)) < closestdur)
      {
        closest = playlist;
        closestdur = Math.abs(duration - playlist.duration) < closestdur;
      }
    }
    console.log(closest)
    return closest;
    
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
