import wayList from '../../../data/way';
import WayCard from '../way-card/way-card';
import Title from '../../ui/title/title';
import { MyWayHeadingWrapperStyled, MyWayItemStyled, MyWayListStyled, MyWayStyled, MyWayWrapperStyled } from './style';


export default function MyWay() {
  return (
    <MyWayStyled>
      <MyWayWrapperStyled>
        <MyWayHeadingWrapperStyled>
          <Title level='2' size='small'>Мой путь:</Title>
        </MyWayHeadingWrapperStyled>
        <MyWayListStyled>
          {wayList.map((way) => (
            <MyWayItemStyled $id={way.id} key={way.id}>
              <WayCard {...way} />
            </MyWayItemStyled>
          ))}
        </MyWayListStyled>
      </MyWayWrapperStyled>
    </MyWayStyled>
  )
}
