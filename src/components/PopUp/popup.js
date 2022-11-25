import React from "react";
import { MdClose } from "react-icons/md";
import { useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #66AB60;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const PopUpData = ({ isShowPopUp, setShowPopUp, data, title }) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: isShowPopUp ? 1 : 0,
        transform: isShowPopUp ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowPopUp(false);
        }
    };







    return (
        <>
            {isShowPopUp ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={isShowPopUp}>
                            <ModalContent>
                                <h1 className="mt-8">{title}</h1>
                                <div className="footer">

                                </div>
                            </ModalContent>
                            <CloseModalButton
                                aria-label="Close modal"
                                onClick={() => setShowPopUp((prev) => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};

export default PopUpData;