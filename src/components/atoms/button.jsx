import styles from './button.module.css'

function Button ({onClick, className='' }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      Continue
    </button>
  )
}

export {Button}