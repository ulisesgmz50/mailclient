import React, {useEffect, useState} from "react"; 
import { fetchMails } from "../../store/slices/mails";
import {useDispatch, useSelector} from "react-redux";
import '../../App.scss';
import {BiEnvelope,BiLockAlt} from "react-icons/bi";


const Maillist = ()  => {
    const {list: mails} = useSelector(state => state.mails);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMails());
    },[dispatch]);

    const [mailSelected, setMailSelected] = useState(null);
    console.log(mailSelected);

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


const MailListItem = ({id, date, from, body, subject, setMailSelected,active})  => {
    
    const [mailReaded, setmailReaded] = useState(0);
    console.log(active);
    return (
                <div onClick={() => {setMailSelected(id); console.log(id); } } className={`listcontainer ${active ? "active" : ""}`} >
                    <a>
                    <h4>{date}</h4>
                            <h1> <BiLockAlt/>&nbsp;  {from}  </h1> 
                        <div>
                            <h2>{subject}</h2>
                            <h3>{body}</h3>
                        </div>
                    </a>
                </div>
            )
}