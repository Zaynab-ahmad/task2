import HistoryContent from '../HistoryContent/HistoryContent';
import HistoryBox from '../HistoryContent/HistoryContent';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import './History.css'

export default function History() {
    
  return (
    <div className="MainContainer History Flex">
      <SectionsHeader
        title="Our Progressive Journey"
        header="Our History"
        text="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        margin={true}
        location="center"
        fontSize="big"
      />
      <HistoryContent />
    </div>
  );
}
