export const MapExample = () => {
    let number_array: number[] = [1, 2, 3, 4, 5];
    let mapped_array = number_array.map((num) => num * num);

    return (
        <div>
            <h2>Map Example</h2>
            <pre>{`
number_array = [${number_array.join(", ")}]; // 원본 배열
mapped_array = [${mapped_array.join(", ")}]; // map 함수 결과 저장
            `
            }</pre>        
        </div>
    )
}