import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: '첫번째 모임',
    image: 'https://t1.daumcdn.net/cfile/tistory/996AD63C5A56FE5633',
    address: '영등포구청 3번 출구',
    description: '첫번째 모임!',
  },
  {
    id: 'm2',
    title: '두번째 모임',
    image: 'https://thumb.mt.co.kr/06/2018/10/2018102416372894434_3.jpg',
    address: '영등포구청 3번 출구',
    description: '두번째 모임!',
  },
  {
    id: 'm3',
    title: '세번째 모임',
    image:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/1784B/production/_110113369_japandrinkinggetty.jpg',
    address: '영등포구청 3번 출구',
    description: '세번째 모임!',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//SSG-사전랜더링
export async function getStaticProps() {
  //클라이언트사이드에 들어가지 않음. 빌드 프로세스중에 실행되기때문
  //fetch data from an API ...
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }; //꼭 객체를 반환해야함 주로 프롭스 반환
}

export default HomePage;
