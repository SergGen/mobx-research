import {observer} from 'mobx-react-lite';
import {ElemListObj} from '../store/ElemList';
import {FetchData} from '../controller';

const Roster = observer(() => {
    const handle = async () => {
        try {
            const getData = (await FetchData.get()).data;
            ElemListObj.setItem(getData);
        } catch(err){
            console.log(err);
        }
    };

    const dropHandle = () => {
        ElemListObj.removeItem();
    };

    return (
        <>
            <button onClick={handle}>Add titles</button>
            <button onClick={dropHandle}>Drop List</button>
            <ol>
                {ElemListObj.getItem().map((elem, index) =>
                    <li key={index}>
                        {elem.title}
                    </li>)}
            </ol>
        </>
    );
});

export default Roster;