import HeaderSecBox from './HeaderSecBox/HeaderSecBox'
import HeaderSecContent from './HeaderSecContent/HeaderSecContent'
import './SectionsHeader.css'
export default function SectionsHeader({title, header, text}) {
  return (
    <div className="SectionsHeader Flex">
      <HeaderSecBox text={title} />
      <HeaderSecContent header={header} text={text}/>
    </div>
  );
}
