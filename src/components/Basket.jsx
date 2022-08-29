import { useSelector } from 'react-redux'

export default function Basket () {

    const total = useSelector(state => state.basket.total)

    return (
        <>
            <span className="text-light fw-bold">Корзина:&nbsp;</span>
            <span className="text-light">{total || 0}</span>
            <span className="text-light">&nbsp;руб.&nbsp;&nbsp;&nbsp;</span>
        </>
    )
}