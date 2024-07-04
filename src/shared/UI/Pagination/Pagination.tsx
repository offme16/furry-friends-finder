import { FC } from "react";
import cls from "./Pagination.module.scss";
import Button from "../Button/Button";

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    maxcount: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalItems, maxcount, onPageChange }) => {

    return (
        <div className={cls.Pagination}>
            <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={cls.PageButton}>
                Назад
            </Button>
            <Button onClick={() => onPageChange(currentPage + 1)} disabled={totalItems < maxcount} className={cls.PageButton}>
                Далее
            </Button>
        </div>
    );
}

export default Pagination;