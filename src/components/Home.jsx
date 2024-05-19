import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col content-center min-h-screen min-w-full">
      <Menu/>
      <div className="mt-[95px]  justify-between items-center lg:block lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center" style={{ marginTop: '95px' }}>
        <div className="block">
          <div className="xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[50px] text-[50px] flex text-[#5A9CFF] font-semibold">REALKEY<img className="ml-[20px] hidden sm:flex xl:flex lg:flex md:flex" src="icons/arrow.svg" alt="" /></div>
          <div className="text-[32px]">Мы за безопасные сделки!</div>
        </div>
        <div className="hidden sm:flex xl:flex lg:flex md:flex w-[530px] h-[77px] bg-[#F8F8F8] rounded-[13px] border-2 border-[#5A9CFF] flex items-center sm:mt-[40px] xl:mt-0">
          <div className="ml-[17px] text-[32px] font-medium">Найти недвижимость</div>
          <Link to="/services" className="ml-auto h-full">
            <div className="w-[107px] h-full ml-auto bg-[#5A9CFF] flex justify-center items-center rounded-r-[10px]">
              <img src="icons/arrow_s.svg" alt="arrow"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="max-w-[1440px]">
        <img src="img/Bg_head.png" alt="arrow" className="w-full h-full mt-[60px]" />
      </div>
        <div className="text-[48px] font-semibold" >Агенство недвижимости <span className="text-[#5A9CFF]">REALKEY</span></div>
    </div>
  );
}

export default Home;