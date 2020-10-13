import React from 'react'
import data from './data.json'
import { Header } from './Header.js'
import { Albums } from './Album.js'
import { Artists } from './Artists.js'
import { ReleaseTitle } from './ReleaseTitle.js'

console.log(data)

export const App = () => {
  return (
    <div className='sectionContainer'>
      <Header />
      {data.albums.items.map((album) => {
        return (
          <div className='albumContainer'>
            <Albums key={album.id} url={album.images[0].url} name={album.name} />
            <ReleaseTitle key={album.name} albumName={album.name} />
            { album.artists.map((sub, subindex) => <Artists key={subindex} artist={sub.name} />
            )}
          </div>
        )
      })}
    </div>
  )
}