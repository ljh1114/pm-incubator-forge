import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        {/* h tags 는 HTML5에서 제공하는 제목 태그들입니다. */}
        {/* h1이 가장 크고 h6이 가장 작습니다. */}
        <h1>First HTML5/CSS3</h1>
        <h2>First HTML5/CSS3</h2>
        <h3>First HTML5/CSS3</h3>
        <h4>First HTML5/CSS3</h4>
        <h5>First HTML5/CSS3</h5>
        <h6>First HTML5/CSS3</h6>

        {/* p 태그는 단락을 나타내는 태그입니다. */}
        <p>이것은 단락 태그입니다.</p>

        {/* list */}
        <ul>
          <li>리스트 아이템 1</li>
          <li>리스트 아이템 2</li>
          <li>리스트 아이템 3</li>
        </ul>

        {/* ordered list */}
        <ol>
          <li>순서가 있는 리스트 아이템 1</li>
          <li>순서가 있는 리스트 아이템 2</li>
          <li>순서가 있는 리스트 아이템 3</li>
        </ol>


        {/* CSS 속성 적용 예시 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>이 박스는 CSS로 스타일링 되었습니다.</p>

          {/* 링크 태그는 a 태그로 정의됩니다. */}
          <a href='https://www.w3schools.com/' target='_blank'>
            W3Schools 방문하기
          </a>
        </div>
      </div>
    </>
    )
}

/**function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}**/

export default App
