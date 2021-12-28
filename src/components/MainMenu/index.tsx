import Image from 'next/image'
import { WorkspacesSelect } from "../WorkspacesSelect";

import styles from './styles.module.scss'

export function MainMenu () {
  return (
    <div className={styles.container}>
      <WorkspacesSelect />

      <div className={styles.leftMainMenuNavigation}>
        <button>Feedback</button>
        <button>Changelog</button>
        <button>Support</button>
        <button>Docs</button>
        
        <div className={styles.userIcon}>
          <Image src="https://github.com/datsfilipe.png" alt="Filipe Lima" width="28" height="28"/>
        </div>
      </div>
    </div>
  )
}