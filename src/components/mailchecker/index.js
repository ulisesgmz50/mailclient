import {ver,nover} from '../../store/visto/action';
import { selectCurrentVisto } from '../../store/visto/reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        visto: selectCurrentVisto(state),
    };
};

const Mailchecker = ({visto, ver,nover}) => {
    return (
        <div>
            <h1> {visto} </h1>
            <button onClick={() => ver()}>ver</button>
            <button onClick={() => nover()}>no ver</button>
        </div>
    );
    };

    export default connect(mapStateToProps, {ver, nover})(Mailchecker);