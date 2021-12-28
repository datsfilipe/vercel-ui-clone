import { FiUserPlus } from 'react-icons/fi'
import { SearchBar } from '../SearchBar'

import styles from './styles.module.scss'

export function SectionHeader () {
  return (
    <div className={styles.container}>
      <SearchBar />

      <button className={styles.newProjectButton}>New Project</button>

      <button className={styles.createTeamButton}>
        <FiUserPlus size="18" className={styles.createTeamIcon} />
      </button>
    </div>
  )
}