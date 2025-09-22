import styles from './link.module.css'

function Link({ href, children }) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  )
}


export { Link }
