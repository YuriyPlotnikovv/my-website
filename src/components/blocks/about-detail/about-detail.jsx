import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { AboutDetailContentStyled, AboutDetailItemStyled, AboutDetailSwiperStyled, AboutDetailStyled, AboutDetailWrapperStyled, AboutDetailNavButtonStyled } from './style';

export default function AboutDetail() {
  return (
    <AboutDetailStyled>
      <AboutDetailWrapperStyled>
        <AboutDetailNavButtonStyled className='swiper-button-prev' />
        <AboutDetailSwiperStyled
          loop='true'
          mousewheel
          modules={[Pagination, Navigation, Mousewheel]}
          pagination={{
            type: 'bullets',
            clickable: 'true',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Жил в разных городах по всей стране: Екатеринбург, Новосибирск, Липецк, Краснодар и Сочи. Теперь душа лежит в Питер.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Провожу время всегда с пользой - читаю книги (предпочитаю фантастику, фанат Стивена Кинга), хожу в спортзал, зимой катаюсь на сноуборде, очень люблю мотоциклы (мой стиль - круизеры).</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Из личностных качеств могу выделить следующие: целеустремлённость, стрессоустойчивость, ответственный подход к работе, легко и быстро осваиваю новое, постоянно развиваю навыки.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Высшее образование получаю в сфере сервиса, заочно. Решение о его получении пришло далеко не сразу после окончания школы - через целых 7 лет. И я горжусь, что смог абсолютно самостоятельно подготовиться и сдать Егэ для поступления на бюджет, и сейчас уже на 3м курсе.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Моя цель - стать профессионалом в сфере Frontend-разработки, и я сделаю все, чтобы достичь её.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
        </AboutDetailSwiperStyled>
        <AboutDetailNavButtonStyled className='swiper-button-next' />
      </AboutDetailWrapperStyled>
    </AboutDetailStyled>
  )
}
