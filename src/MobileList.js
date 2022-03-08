import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MobileList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="card" style={{ width: '18rem' }}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                       <Link to='/products/mobile/iPhone' className='btn btn-primary'>I Phone</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to='/products/mobile/vivo' className='btn btn-primary'> Vivo </Link>
                    </li>
                    <li class="list-group-item">
                       <Link to='/products/mobile/samsung' className='btn btn-primary'> Samsung</Link>
                    </li>
                </ul>
            </div> 
            <Outlet />
        </div>
    )
}

export default MobileList