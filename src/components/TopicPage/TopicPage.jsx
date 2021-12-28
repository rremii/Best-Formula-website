import css from "./TopicPage.module.sass";
import {MathJax, MathJaxContext} from "better-react-mathjax";
import React from "react";

const TopicPage = (props) => {
    return (
        <div
            className={[css.wrapper, props.isLightMod ? "" : css.wrapper_night].join(
                " "
            )}
        >
            <div className={css.name}>
                <span>{props.name}</span>
            </div>
            <div className={css.container}>
                <div className={css.formulas}>

                    <div>{props.language === 'eng' ? 'Formulas' : 'Формулы'}</div>
                    <div>
                        {/*//////////////////////////*/}
                        <MathJaxContext>
                            {props?.formulas?.map((formula) => {
                                return (
                                    <span key={formula}>
                    <MathJax>{formula}</MathJax>
                  </span>
                                );
                            })}
                        </MathJaxContext>
                        {/*///////////////*/}
                    </div>
                </div>
                <div className={css.discription}>
                    <div>{props.language === 'eng' ? 'Discription' : 'Описание'}</div>
                    <div>
                        <ul>
                            {props?.discription?.map((discriptin) => {
                                return <li key={discriptin}>
                                    <MathJaxContext>
                                        <MathJax>
                                            {discriptin}
                                        </MathJax>
                                    </MathJaxContext></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TopicPage;
