import Title from '../../ui/title/title';
import { MailStyled, MailWrapperStyled, MailHeadingWrapperStyled, MailInputStyled, MailFieldsWrapperStyled, MailButtonStyled } from './style';


export default function Mail() {
  return (
    <MailStyled>
      <MailWrapperStyled>
        <MailHeadingWrapperStyled>
          <Title level='2' size='small'>Отправьте мне письмо</Title>
        </MailHeadingWrapperStyled>
        <MailFieldsWrapperStyled action='' method='post'>
          <MailInputStyled type='text' name='name' placeholder='Имя' $column='1 / 2' $row='1 / 2' />
          <MailInputStyled type='email' name='email' placeholder='E-mail' $column='1 / 2' $row='2 / 3' />
          <MailInputStyled type='text' name='message' placeholder='Текст сообщения' $column='2 / 3' $row='1 / 3' />
          <MailInputStyled type='submit' value='Отправить письмо' $column='2 / 3' $row='3 / 4' />
        </MailFieldsWrapperStyled>
      </MailWrapperStyled>
    </MailStyled>
  )
}
