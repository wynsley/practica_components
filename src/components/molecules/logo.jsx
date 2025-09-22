import { Title } from '../atoms/title';
import styles from './logo.module.css'
import { IoLogoDiscord } from "react-icons/io5";


function Logo () {
  const title='DISCORD'
  return (
    <div className={styles.logo}>
      <IoLogoDiscord  className={styles.icon}/>
      <Title level='h1' className={styles.title__logo}>{title}</Title>
    </div>
  )
}

export {Logo}