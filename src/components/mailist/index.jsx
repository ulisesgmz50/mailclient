import React, {useEffect, useState} from "react"; 
import { fetchMails } from "../../store/slices/mails";
import {useDispatch, useSelector} from "react-redux";
import '../../App.scss';
import {BiLockAlt} from "react-icons/bi";
import {VscCircleFilled} from "react-icons/vsc";

const Maillist = ()  => {
    const {list: mails} = useSelector(state => state.mails);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMails());
    },[dispatch]);

    const [mailSelected, setMailSelected] = useState(null);

    return (
        <div className="list">
            {
            mails.map((mails, id) => (
                <MailListItem id={id} {...mails} active={mailSelected===id} setMailSelected={setMailSelected}/>
            ))
            }
        </div>
    )
    }

export default Maillist;


export const MailListItem = ({id, date, from, body, subject, setMailSelected, active})  => {
    
    //const [mailReaded, setmailReaded] = useState(false);
    const [mailItemSelected, setMailItemSelected] = useState(null);

    const onSelectedItem = ({target}) => {
        setMailItemSelected([target.id, target.date, target.value]);
    }
    const onClick = (event) => {
        event.preventDefault();
                setMailItemSelected(id, date, body);
       setMailSelected((mailSelected) => [mailItemSelected]);
       ///setMailItemInfo({  from, subject, body, date, isReaded, avatar, tag, attachements});

    }

    return (
                <div onClick={() =>  {setMailSelected(id); } } className={`listcontainer ${active ? "active" : ""}`} >
                    
                    <div className="inlineflex"
                    value ={mailItemSelected}
                    onChange={onSelectedItem}>
                        <div className="viewedicon">
                    <VscCircleFilled/> 
                        </div>
                    <a>
                    <h4>{date}</h4>
                    <div className="inlineflex">
                            <h1> <BiLockAlt/>&nbsp;  {from}  </h1> 
                            </div>
                        <div>
                            <h2>{subject}</h2>
                            <h3>{body}</h3>
                        </div>
                    </a>
                    </div>
                </div>
            )
}
