import { items } from '../../data/items';
import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';


type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridITem = ({item, onClick}: Props) =>{
    return (
        <C.Container 
             showBackground={item.permanenShown || item.shown}
            onClick={onClick}
        >
            {item.permanenShown === false && item.shown === false &&
            
                <C.Icon src ={b7Svg}  alt="" opacity={.1}/>
            }
            {(item.permanenShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    );
}