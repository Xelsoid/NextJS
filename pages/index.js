import {useState, forwardRef} from "react";
import Link from "next/link";

const NavigationButton = forwardRef(({onClick, href}, ref) => {
  return (
    <div>
      <a href={href} onClick={onClick} ref={ref}>Go to ABOUT page</a>
    </div>
  )
})

export default function IndexPage() {
  const [word,setWord] = useState('');
  const [transformed,setTransformed] = useState('');

  const transform = type => {
    fetch(`api/transform/${type}?word=${word}`)
        .then(res =>res.json())
        .then(({error, result}) => {
          if(error) return setTransformed(error)
          setTransformed(result);
        })
  }

  const transformLower = () => transform('lower');
  const transformUpper = () => transform('upper');

  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/about" passHref>
        <NavigationButton/>
      </Link>
      <input onChange={e => setWord(e.target.value)} value={word}/>
      <button onClick={transformLower}>Transform lowercase</button>
      <button onClick={transformUpper}>Transform uppercase</button>
      <h2>
        Result transformed: {transformed}
      </h2>
    </div>
  )
}
