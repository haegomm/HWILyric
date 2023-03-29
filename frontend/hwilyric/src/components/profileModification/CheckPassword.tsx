import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import userApi from '../../api/userApi';
import { selectModification } from '../../atoms/userAtom';

function CheckPassword() {
  const setSelectModificationPage = useSetRecoilState(selectModification)
  const [Password, setPassword] = useState('')

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const onCheckingPasswordHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
    const message = await userApi.checkPassword({password: Password})
    if (message === 'success') {
      setSelectModificationPage('modifyPassword')
    } else {
      console.log(message)
      alert('비밀번호가 일치하지 않습니다. 다시 시도해주세요.')
    }
  }
  return (
    <div>
      <p>비밀번호를 다시 한 번 입력해주세요</p>
      <div>
      <span>비밀번호</span>
      <input 
        type="password"
        onChange={onPasswordHandler}
      />
      </div>
      <button onClick={onCheckingPasswordHandler}>확인</button>
    </div>
  )
}

export default CheckPassword
