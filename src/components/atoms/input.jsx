import styles from './input.module.css'

function Input({ type = 'text', name, className = '', ...props }) {
  return (
    <input
      type={type}
      name={name}
      className={`${styles.input} ${className}`}
      {...props}
    />
  )
}

export { Input }
