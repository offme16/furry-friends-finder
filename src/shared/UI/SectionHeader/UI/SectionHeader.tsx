import donationDog from "shared/assests/donationList/donationDog.svg";
import cls from './SectionHeader.module.scss';

interface SectionHeaderProps {
    mainText: string;
    subText: string;
}

const SectionHeader = ({ mainText, subText } : SectionHeaderProps) => {

    return (
        <div className={cls.SectionHeader}>
            <div className={cls.title}>
                <h1>{mainText}</h1>
            </div>
            <div className={cls.img_dog_bg}></div>
            <img className={cls.img_dog} src={donationDog} alt="donation dog" />
            <div className={cls.dog_char}>
                <h2>
                    {subText}
                </h2>
            </div>
        </div>
    );
};

export default SectionHeader;