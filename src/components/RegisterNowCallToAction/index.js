import React from 'react'
import styles from './registerNowCallToAction.module.css'
import BuyTicketsButton from '../BuyTicketsButton'

const RegisterNowCallToAction = ({
  title,
  descriptionParagraphs,
  callToAction,
  showButton = true,
}) => (
  <div className={styles['register-now-component']}>
    <h1 style={{ marginBottom: 15 }}>{title}</h1>
    <main>
      <div className={styles.description}>
        {descriptionParagraphs.map((paragraph, i) => (
          <p
            key={`paragraph-${i}`}
            style={{
              marginBottom: i + 1 === descriptionParagraphs.length ? 0 : 15,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles['register-now-button']}>
        <div
          style={{
            marginBottom: 15,
            visibility: showButton ? 'initial' : 'hidden',
          }}
        >
          <BuyTicketsButton text="Register Now" inverse />
        </div>
        <p>{callToAction}</p>
      </div>
    </main>
  </div>
)

export default RegisterNowCallToAction
