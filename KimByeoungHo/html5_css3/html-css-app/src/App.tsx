import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <h2>Hello, World!</h2>
        <h3>Hello, World!</h3>
        <h4>Hello, World!</h4>
        <h5>Hello, World!</h5>

        <p>단락 paragraph의 역할입니다.</p>


        {/* 리스트(List) */}

        {/* ul= unordered list */}
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li> 
          <li>리스트 4</li>
          <li>리스트 5</li>
        </ul>

         {/* ol= ordered list */}
        <ol>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li> 
          <li>리스트 4</li>
          <li>리스트 5</li>
        </ol>

        {/* tailwindcss 같은 편리한 녀석들이 존재함 */}
        {/* html / css를 알고 쓰는 것과 차이가 있긴 함 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML을 스타일링 하기 위한 목적으로 사용</p>

          {/* a / href 같은 경우는 하이퍼링크 같은 개념 */}
          {/*  */}
          <a href="https://www.w3schools.com/" target='_blank'>
          CSS / HTML 학습사이트 
          </a>
        </div>
      </div>
    </>
  )
}

export default App
