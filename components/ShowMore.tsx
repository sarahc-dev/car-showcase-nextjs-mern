"use client";

import { ShowMoreProps } from "@/types";
import Button from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    };

    return <div className="w-full flex-center gap-5 mt-10">{!isNext && <Button title="Show More" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation}></Button>}</div>;
};

export default ShowMore;
