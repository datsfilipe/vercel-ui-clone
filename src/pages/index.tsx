import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '../components/ProjectCard'
import { Footer } from '../components/Footer'
import { SectionHeader } from '../components/SectionHeader'
import { MainMenu } from '../components/MainMenu'
import { SubNavigationMenu } from '../components/SubNavigationMenu'

import { api } from '../services/api'
import { Project } from '../types'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function getProjects () {
      const response = await api.get<Project[]>('projects')

      setProjects(response.data)
    }

    getProjects()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel UI - Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap" rel="stylesheet" />  
      </Head>

      {/* top bar view */}
      <header className={styles.topBar}>
        <MainMenu />
      </header>
      {/* bottom menu nav */}
      <SubNavigationMenu />

      {/* main content */}
      <main className={styles.main}>
        <SectionHeader />
        <div className={styles.gridView}>
          {
            projects.length > 0 ?
            projects.map(project => (
              <Card project={project} key={project.id} />
            ))
            : ''
          }
        </div>
      </main>

      {/* footer container */}
      <Footer />
    </div>
  )
}

export default Home
