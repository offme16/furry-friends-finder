import React from "react";
import cls from "./VolunteerCard.module.scss";
import { useState } from "react";
import { ModalView } from "../../../shared/UI/ModalView/modalView";

interface VolunteerCardProps {
  phoneNumber: string;
  name: string;
  city: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  phoneNumber,
  name,
  city,
}) => {
  const [modalInfoIsOpen, setModalinfoIsOpen] = useState(false);

  const getHiddenNumber = (phone: string): string => {
    return phone.replace(/(\+\d{4})\d{3}(\d{2})(\d{2})/, "$1-XXX-XX-XX");
  };
  const hiddenNumber = getHiddenNumber(phoneNumber);

  return (
    <div className={cls.volunteerCard}>
      <div className={cls.phoneNumber}>
        <button className={cls.button} onClick={() => setModalinfoIsOpen(true)}>
          <p>Показать номер</p> {hiddenNumber}
        </button>
        <ModalView
          isOpen={modalInfoIsOpen}
          onClose={() => setModalinfoIsOpen(false)}
        >
          <div>
            {phoneNumber} {name}
          </div>
        </ModalView>
      </div>
      <div className={cls.nameAndCityOwner}>
        <div className={cls.ownerCity}>Владелец:</div>
        {name}
      </div>
      <div className={cls.nameAndCityOwner}>
        <div className={cls.ownerCity}>Город:</div>
        {city}
      </div>
    </div>
  );
};

export default VolunteerCard;
