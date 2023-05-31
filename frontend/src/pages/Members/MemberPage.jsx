import React from "react";
import MemberModal from "../../components/members/MemberModal"
import MemberList from "../../components/members/MemberList";

function MemberPage() {
    return (
        <>
            <MemberModal/>
            <div id={"MemberPage"}>
                <div className="container mt-5">
                    <div className="top d-flex justify-content-between my-5">
                        <h1>Lijst van alle teamleden</h1>

                        <a href="#" className={"btn btn-primary d-flex align-items-center"} data-toggle="modal"
                           data-target="#modalMemberModal">Teamlid aanmaken</a>
                    </div>
                    <MemberList/>
                </div>
            </div>
        </>
    )
}

export default MemberPage;
