// src/components/atoms/Link.jsx
import styles from "./link.module.css"

function Link({ href, children, className = "" }) {
  return (
    <a href={href} className={`${styles.link} ${className}`}>
      {children}
    </a>
  )
}

export { Link }
