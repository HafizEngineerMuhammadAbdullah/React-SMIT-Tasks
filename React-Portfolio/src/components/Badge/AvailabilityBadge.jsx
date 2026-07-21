import React from 'react'
import styles from "./AvailabilityBadge.module.css"

const AvailabilityBadge = () => {
  return (
    // Availability Badge
    <div className={styles.badge}>
       <span className={styles.dot}></span>
       <span className={styles.text}>Available for Work</span>
    </div>
  )
}

export default AvailabilityBadge
