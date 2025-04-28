import './HeaderSecContent.css'

export default function HeaderSecContent({header, text}) {
  return (
    <div className="HeaderSecContent Flex">
      <h2>{header}</h2>
      <p className="SharedFont HeaderSecContentP">
        {text}
      </p>
    </div>
  );
}
