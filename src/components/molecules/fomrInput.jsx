import { Input } from '../atoms/Input'
import { Label } from '../atoms/label'
import styles from './formInput.module.css'


function FormInput({ label, type, name }) {
  return (
    <div className={styles.formInput}>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} />
    </div>
  )
}

export { FormInput }
