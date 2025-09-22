import { Button } from '../atoms/button'
import { Link } from '../atoms/link'
import { Title } from '../atoms/title'
import { FormInput } from '../molecules/fomrInput'
import { TermsAndConditions } from '../molecules/termAndConditions'
import styles from './form.module.css'


function Form() {
  const title = 'Create an account'
  return (
    <form className={styles.form}>
      <Title level='h2' className={styles.form__title}>{title}</Title>
      <div className={styles.container__inpForm}>
        <FormInput label='EMAIL' type='email' name='email' />
        <FormInput label='USERNAME' type='text' name='username' />
        <FormInput label='PASSWORD' type='password' name='password' />
      </div>
      <Button />
      <Link>Already have an account?</Link>
      <TermsAndConditions />
    </form>
  )
}

export { Form }