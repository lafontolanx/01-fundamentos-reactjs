import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside></aside>
        <main>
          <Post 
            author='Laura Fontolan'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          />

          <Post 
            author='Pedro Henrique'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          />
        </main>
      </div>
    </div>
  )
}



