import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Laura Fontolan" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, veritatis."
      />
      <Post 
        author="Pedro Henrique" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, veritatis."
      />
    </div>
  )
}


