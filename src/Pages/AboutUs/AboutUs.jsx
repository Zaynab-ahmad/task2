import HeroAbout from '../../Components/HeroAbout/HeroAbout'
import MissionSec from '../../Components/MissionSec/MissionSec';
import AwardsSec from '../../Components/AwardsSec/AwardsSec';
import History from '../../Components/History/History';
import MembersSec from '../../Components/MembersSec/MembersSec';

export default function AboutUs() {
  return (
    <div>
      <HeroAbout
        title="Overview"
        header="Welcome to Little Learners Academy"
        content="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <MissionSec />
      <AwardsSec/>
      <History/>
      <MembersSec/>
    </div>
  );
}
