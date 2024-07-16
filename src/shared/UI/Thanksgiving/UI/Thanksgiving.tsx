import cls from "./Thanksgiving.module.scss";
import  thanksgiving  from "../../../assests/Thanksgiving.jpg";

const Thanksgiving = () => {
    return (
        <div className={cls.Thanksgiving}>
                <img src={thanksgiving} alt="ThanksgivingImage" />
                <span className={cls.thanks}>Спасибо! <br /> Вы делаете мир лучше! </span>
        </div>
    )
}

export default Thanksgiving;