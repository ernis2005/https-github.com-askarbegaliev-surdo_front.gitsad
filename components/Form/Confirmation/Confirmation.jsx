import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationFetch } from '@/app/store/slice/confirmationSlice';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import Spiner from '@/components/Spiner/Spiner';

export default function Confirmation() {
  const [user, setUser] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.signup);
  const { loading, error } = useSelector((state) => state.code);
  const [result, setResult] = useState({
    phone: phone,
    code: '',
  });

  const handleOnChange = (res) => {
    setResult((prevState) => ({
      ...prevState,
      code: res,
    }));
  };

  const confirmationClick = () => {
    if (result.code.length === 4) {
      dispatch(confirmationFetch(result));
    } else {
      setUser(true);
    }
  };

  const handleTaboClick = () => {
    dispatch(handleTabClick(2));
  };

  const requestAgain = () => {
    confirmationClick();
    setRemainingTime(60);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className={s.confirmation}>
        <button onClick={handleTaboClick} className={s.item}>
          <span>Потверждение номера телефона</span>
        </button>
        <p>
          {`На ваш номер ${phone} был отправлен код. Он нужен для потверждения вашей
          личности`}
        </p>
        <div className={s.cont}>
          <div className={s.contai}>
            <AuthCode
              length={4}
              allowedCharacters="numeric"
              containerClassName="contai"
              onChange={handleOnChange}
            />
          </div>
        </div>
        {error && (
          <p style={{ color: 'red', textAlign: 'start' }}>{error.data.error}</p>
        )}
        <p>
          Запросить повторно через
          <span>{`${Math.floor(remainingTime / 60)
            .toString()
            .padStart(2, '0')}:${(remainingTime % 60)
            .toString()
            .padStart(2, '0')}`}</span>
        </p>
        <button
          onClick={requestAgain}
          className={s.btn}
          disabled={remainingTime > 0}
          style={{
            opacity: remainingTime === 0 ? '1' : '0.5',
          }}
        >
          Запросить повторно
        </button>
        <button onClick={confirmationClick} className={s.button}>
          <span>{loading ? <Spiner /> : 'Зарегистрироваться'}</span>
        </button>
      </div>
    </div>
  );
}
