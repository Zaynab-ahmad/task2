import './NumbersBox.css'

export default function NumbersBox({num, text}) {
  return (
    <div className="NumbersBox Flex">
      <h2 className="Numbers">+{num}</h2>
      <p className="NumbersTxt">{text}</p>
    </div>
  );
}
