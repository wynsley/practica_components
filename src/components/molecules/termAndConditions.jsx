// src/components/molecules/TermsConditions.jsx
import styles from "./termAndConditions.module.css"
import { Link } from "../atoms/link"

function TermsAndConditions() {
  return (
    <p className={styles.termsConditions}>
      By registering you agree to Discord&apos;s{" "}
      <Link href="#">Terms of Service</Link> and{" "}
      <Link href="#">Privacy Policy</Link>.
    </p>
  )
}

export  {TermsAndConditions}
