import { Logo } from '../molecules/logo'
import { Form } from '../organisms/form'
import styles from './cardPage.module.css'

function CardPage () {
  return(
    <section className={styles.card__page}>
      <Logo/>
      <Form/>
    </section>
  )

}

export {CardPage}