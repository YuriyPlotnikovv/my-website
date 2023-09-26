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
              <AboutDetailContentStyled>Жил в разных городах по всей стране: Екатеринбург, Новосибирск, Липецк, Краснодар и Сочи.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Свободное время провожу с пользой: читаю книги (предпочитаю фантастику), хожу в спортзал, зимой катаюсь на сноуборде, очень люблю мотоциклы (мой стиль - круизёры).</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Я целеустремлённый, стрессоустойчивый, ответственно подхожу к работе, легко и быстро осваиваю новое и адаптируюсь к изменениям.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Высшее образование получаю в сфере сервиса, заочно. Решение о его получении пришло только через 7 лет после окончания школы.<br/>Я смог самостоятельно подготовиться и сдать ЕГЭ, поступить на бюджет, и сейчас учусь на 3-м курсе.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Почему сервис?<br/>С 19-ти лет я работаю в сфере гостеприимства - сейчас занимаю позицию менеджера ресторана в отеле. Мне это нравится, но в один день я понял, что хочу изменить вектор профессионального развития.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
          <SwiperSlide>
            <AboutDetailItemStyled>
              <AboutDetailContentStyled>Мои отношения с фронтендом можно описать так: "Это была любовь с первой строчки кода".<br/>Я стремлюсь стать профессионалом в этой сфере.</AboutDetailContentStyled>
            </AboutDetailItemStyled>
          </SwiperSlide>
        </AboutDetailSwiperStyled>
        <AboutDetailNavButtonStyled className='swiper-button-next' />
      </AboutDetailWrapperStyled>
    </AboutDetailStyled>
  )
}
