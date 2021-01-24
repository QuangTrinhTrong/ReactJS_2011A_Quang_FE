import React, { useEffect, useState } from 'react';
import Main from './../../components/organisms/Main';
import { useCookies } from "react-cookie";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { Link, useHistory } from "react-router-dom";
import * as ApiCaller from "../../helpers/index";
import Validate from "../../helpers/Validate";


function RoomMap(props) {

    const [cookies, setCookie] = useCookies([""]);
    const [openPopup, setOpenPopup] = useState(false);
    const [data, setData] = useState([]);
    const [showLoading, setshowLoading] = useState(false);
    const [showContent, setshowContent] = useState(true);
    const token = cookies.access_token;
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        callApi();
    }, []);

    function callApi() {
        setIsLoading(true);
        ApiCaller.getList("api/room", token)
            .then((res) => {
                setData(res.data.data);
                setIsLoading(false);
                setshowContent(false);
                fetchRows();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function fetchRows() {
        if (data instanceof Array) {
            let bg = "";
            let name_status = 0;
            return data.map((object, i) => {
                var showButtonDetail = (
                    <Link
                        className="btn btn-sm btn-light"
                        target="_blank"
                        to={"/room-details/" + object.id}
                        style={{ float: "right" }}
                    >
                        Chi tiết
                    </Link>
                );

                switch (object.room_status) {
                    case 1:
                        bg = "card text-white bg-facebook mb-3";
                        name_status = "Phòng sạch";
                        break;
                    case 2:
                        bg = "card text-white bg-secondary mb-3";
                        name_status = "Phòng bẩn";
                        break;
                    case 3:
                        bg = "card text-white bg-danger mb-3";
                        name_status = "Phòng có người ở";
                        break;
                    case 4:
                        bg = "card text-white bg-waring mb-3";
                        name_status = "Phòng kín";
                        break;
                    case 5:
                        bg = "card text-white bg-success mb-3";
                        name_status = "Phòng trống";
                        break;
                    default:
                        bg = "card text-white bg-white mb-3";
                        break;
                }

                return (
                    <div className="col-3" key={i}>
                        <div className={bg} style={{ maxWidth: "18rem" }}>
                            <div className="card-header">
                                <span className="text-left">{object.room_number}</span>
                                {showButtonDetail}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{object.name}</h5>
                                <p>Tình trạng: {name_status}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }
    function updateRoomSts(id) { }

    return (
        <Main>
            <div>
                <LoadingMask loading={isLoading} text={"loading..."}>
                    <Validate />
                    <div className="c-wrapper c-fixed-components">
                        <div className="c-body">
                            <Validate />
                            <main className="c-main">
                                <div className="container-fluid" hidden={showContent}>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="btn btn-sm btn-facebook btn_btb">Phòng sạch</span>
                                            <span className="btn btn-sm btn-danger btn_btb">Phòng có người ở</span>
                                            <span className="btn btn-sm btn-secondary btn_btb">Phòng bẩn</span>
                                            <span className="btn btn-sm btn-warning btn_btb">Phòng FULL</span>
                                            <span className="btn btn-sm btn-success">Phòng trống</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">{fetchRows()}</div>
                                </div>
                            </main>
                        </div>
                    </div>
                </LoadingMask>
            </div>
        </Main>
    );

    function showPopupSetClick() {
        setOpenPopup(true);
    }

    function closeModalPopup() {
        setOpenPopup(false);
    }

    // return (
    //     <Main>
    //         <div>
    //             <LoadingMask loading={true} text={"loading..."}>
    //                 <div style={{ width: 500, height: 300 }}>Compoment You want to display</div>
    //             </LoadingMask>
    //         </div>
    //     </Main>
    // );
}

export default RoomMap;