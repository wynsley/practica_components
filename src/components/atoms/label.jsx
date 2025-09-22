import styles from './label.module.css'

function Label({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  )
}

export { Label }
