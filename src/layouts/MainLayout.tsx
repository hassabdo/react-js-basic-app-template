import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const { Content } = Layout;

const MainLayout = ({ location, children, ...rest }: any) => {
    return (
        <div style={{ minHeight: "100vh" }} className={"app-container"}>

            <TransitionGroup component={"section"} >
                <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                    unmountOnExit
                >
                    {children}
                </CSSTransition>

            </TransitionGroup>
        </div>
    );
};

export default MainLayout;