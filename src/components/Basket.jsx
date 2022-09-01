import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/showcase'

export default function Basket () {

    const total = useSelector(state => state.basket.total)
    const isSpoiled = useSelector(state => state.basket.isSpoiled)
    const dispatch = useDispatch()
    const toggleSpoiled = () => {
        dispatch({type: 'basket/toggleSpoiled'})
        const url = isSpoiled ? 'products.json' : 'nowhere'
        dispatch(fetchProducts(url))
    }

    return (
        <>
            <span className="text-light fw-bold">Корзина:&nbsp;</span>
            <span className="text-light">{total || 0}</span>
            <span className="text-light">&nbsp;руб.&nbsp;&nbsp;&nbsp;</span>
            <button className="btn btn-primary" style={{width: '12rem'}} onClick={toggleSpoiled}>{isSpoiled ? 'Починить' : 'Испортить'}</button>
        </>
    )
}