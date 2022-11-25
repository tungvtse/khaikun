import { React, useEffect, useState } from "react";
import { Table, Button } from "antd";
import { ButtonStyled } from "../Button/buttons";
import Modal from "../Modal/Modal";
import ModalAnm from "../ModalAnnoucement/ModalAnm";
import "./body.css";
import { TableDemo } from "../Table/table";
import PopUpData from "../PopUp/popup";

export const BodyDemo = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalAnm, setShowModalAnm] = useState(false);
    const [showPopUpData, setShowPopUpData] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
        console.log(showModal);
    };

    const openModalAnm = () => {
        setShowModalAnm((prev) => !prev)
    }
    const openModalData = () => {
        setShowPopUpData((prev) => !prev)
    }
    const dataSource = [
        {
            key: "1",
            name: "dsfMike",
            no: "1",
            mcp: "10 Downingvxcv Street",
        },
        {
            key: "2",
            name: "Johfdsfn",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mifsdfke",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "Johfsn",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing vcxvcxvStreet",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Svxcvxcvtreet",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Stvxcvcxvvreet",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downingxcxcvvxv Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "1",
            name: "Mike",
            no: "1",
            mcp: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            no: "2",
            mcp: "10 a Street",
        },
    ];

    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",

        },
        {
            title: "Colector and janitor",
            dataIndex: "name",
            key: "name",
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        setShowPopUpData((prev) => !prev)
                    }
                };
            },
        },
        {
            title: "MCPs",
            dataIndex: "mcp",
            key: "mcp",
        },

    ];

    const handleOnClickDetail = () => { }
    const [state, setState] = useState([]);
    const selectRow = (record) => {
        const selectedRowKeys = [...state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        setState({ selectedRowKeys });
    };
    const onSelectedRowKeysChange = (selectedRowKeys) => {
        setState({ selectedRowKeys });
    };
    const { selectedRowKeys } = state;
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectedRowKeysChange
    };

    return (
        <>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Nhập mật khẩu"
            />
            <ModalAnm
                showModal={showModalAnm}
                setShowModal={setShowModalAnm}
                title="tung"
                announcement='tungtungtung'
            />
            <PopUpData isShowPopUp={showPopUpData} setShowPopUp={setShowPopUpData} data={dataSource.map(data => data)} title={"tugntungtungutun"} />

            <div className="bodyDiv">
                <div className="flex">
                    <div className="w-1/5"></div>
                    <TableDemo
                        dataSource={dataSource}
                        columns={columns}

                        className="w-3/5 mt-10"
                        onRow={(record) => ({
                            onClick: () => {
                                selectRow(record);
                            },
                        })}
                        rowSelection={rowSelection}

                    />
                    <div className="w-1/5"></div>
                </div>

                <div className="flex">
                    {" "}
                    <div className="w-4/5 "> </div>
                    <div className="w-1/5 mb-10">
                        <ButtonStyled type="text" onClick={() => openModal()}>
                            ADD
                        </ButtonStyled>
                        <ButtonStyled onClick={() => openModalAnm()} type="text">DELETE</ButtonStyled>
                    </div>
                </div>
            </div>
        </>
    );
};
