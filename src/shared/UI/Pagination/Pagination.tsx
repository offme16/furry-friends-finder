import { FC, HTMLAttributes } from "react";
import cls from "./Pagination.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

interface PaginationProps extends HTMLAttributes<any>{
    className?: string,
    currentPage: number;
    totalItems: number;
    maxcount: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({className, currentPage, totalItems, maxcount, onPageChange }) => {

    return (
        <div className={clsx(cls.Pagination, className)}>
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