import React from "react"

const styles = {
  footer: "mt-1 text-center bg-black text-white",
  h6: "mb-3",
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h6 className={styles.h6}>Yusuf Yakup</h6>
      <p>P_R_G © All CopyRights Reserved 2022</p>
    </footer>
  )
}

export default Footer
