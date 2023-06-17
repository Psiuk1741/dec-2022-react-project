import React, {FC} from 'react';
import {IImage} from "../../interfaces";
import {imagesUrl} from "../../constans";

import css from './PosterCard.module.css'

interface IProps {
    poster: IImage
}

const PosterCard: FC<IProps> = ({poster}) => {
    return (
        <div className={css.posterCard}>
            <img loading={"lazy"} src={`${imagesUrl}${poster.file_path}`}
                 alt={'Movie poster'}
            />


        </div>
    );
};

export {PosterCard};