import React, { useState } from "react";
import cls from "./VolunteerCard.module.scss";
import { ModalView } from "shared/UI/ModalView/modalView";

interface VolunteerCardProps {
  volunteer: {
    phone: string;
    name: string;
    city: string;
  };
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer }) => {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  const getHiddenNumber = (phone: string): string => {
    return phone.replace(/(\+\d{4})\d{3}(\d{2})(\d{2})/, "$1-XXX-XX-XX");
  };

  const hiddenNumber = getHiddenNumber(volunteer.phone);

  return (
    <div className={cls.volunteerCard}>
      <div className={cls.phoneNumber}>
        <button className={cls.button} onClick={() => setModalInfoIsOpen(true)}>
          <p>Показать номер</p> {hiddenNumber}
        </button>
        <ModalView isOpen={modalInfoIsOpen} onClose={() => setModalInfoIsOpen(false)}>
          <div className={cls.dataPerson}>
            <div className={cls.phone}>{volunteer.phone}</div>
            <div className={cls.name}>{volunteer.name}</div>
          </div>
        </ModalView>
      </div>
      <div className={cls.nameAndCityOwner}>
        <div className={cls.ownerCity}>Волонтер:</div>
        {volunteer.name}
      </div>
      <div className={cls.nameAndCityOwner}>
        <div className={cls.ownerCity}>Город:</div>
        {volunteer.city}
      </div>
    </div>
  );
};

export default VolunteerCard;
