import React from 'react'
import Link from '../../Link'
import { getSpeakerProfileUrl } from '../../../utils/speaker'
import './index.css'

const Speaker = ({ id, isWithAnimeImg, className = '', imgSrc, imgSrcAnime, imgSrcStandard, imgAlt, name, headline, company, twitterUrl = '#', githubUrl = '#' }) => (
  <div key={id} className={`speaker ${className}`}>
    <div className='speaker-img-wrap'>
      {isWithAnimeImg
        ? <Link
          href={getSpeakerProfileUrl(name)}
          text={<span className="speaker-img-container">
            <img className='speaker-img speaker-img_anime' src={imgSrcAnime} alt={imgAlt} />
            <img className='speaker-img speaker-img_standard' src={imgSrcStandard} alt={imgAlt} />
          </span>}
          isExternal={false}
        />
        : <span className="speaker-img-container">
          <Link
            href={getSpeakerProfileUrl(name)}
            text={<img className='speaker-img' src={imgSrcStandard || imgSrc} alt={imgAlt} />}
            isExternal={false}
          />
        </span>
      }
    </div>
    <div className='speaker-description'>
      <Link
        href={getSpeakerProfileUrl(name)}
        text={<h2 className='speaker-name'>{name}</h2>}
        isExternal={false}
      />
      <span className='speaker-headline'>
        {headline}
      </span>
      <br />
      <span className='speaker-company'>
        {company}
      </span>
      <br />
    </div>
  </div>
)

export default Speaker
