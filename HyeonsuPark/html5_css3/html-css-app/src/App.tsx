import './App.css'
//실행 방법 : npm run dev

function App() {

  return (
    <>
      <div>
        {/* h1 태그는 제목을 표시할 때 사용합니다 */}
        {/* 숫자 크기에 따라 사이즈가 조정됩니다. */}
        <h1>First HTML5/CSS3</h1>
        <h2>First HTML5/CSS3</h2>
        <h3>First HTML5/CSS3</h3>
        <h4>First HTML5/CSS3</h4>
        <h5>First HTML5/CSS3</h5>
        <h6>First HTML5/CSS3</h6>
        {/*주석*/}
        {/*실제 여러 사람들과 개발 할 때 내 머리속의 생각이 공유되지 않기 때문*/}
        {/*시간이 지나도 해당 파트가 무엇인지 기록을 해두기 위해 사용함. */}
        <p>단락 paragraph의 역할입니다.</p>
        
        {/* 리스트(list) */}
        {/* ul = unordered list) */}
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
          <li>리스트 4</li>
        </ul>

        <ol>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
          <li>리스트 4</li>
        </ol>
        
        {/*tailwindcss 같은 편리한 녀석들이 존재함 */}
        {/* html / css를 알고 쓰는 것과 차이가 있긴 함 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML요소를 스타일링 하기 위한 목적으로 사용</p>
          
          {/* a href의 경우엔 */}
          <a href='https://www.w3schools.com/' target="_blank">
            HTML / CSS 학습 사이트
          </a>
        </div>
      </div>
    </>
  )
}

export default App 
