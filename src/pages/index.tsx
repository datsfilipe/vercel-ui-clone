import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '../components/ProjectCard'
import { Footer } from '../components/Footer'
import { SectionHeader } from '../components/SectionHeader'
import { MainMenu } from '../components/MainMenu'
import { SubNavigationMenu } from '../components/SubNavigationMenu'

import { Project } from '../types'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(json => setProjects(json))
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
          {Array.isArray(projects) ? projects?.map(project => (
            <Card project={project} key={project.id} />
          )): null}
        </div>
      </main>

      {/* footer container */}
      <Footer />
    </div>
  )
}

export default Home
