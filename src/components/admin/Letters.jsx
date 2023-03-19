import React from 'react'
import { Link } from 'react-router-dom'


function Letters() {
  return (
    <div className='container-fluid px-4'>
        <h1 className='mt-4'>Letras del Abecedario</h1>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Añadir Letras</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Letras</button>
        </li>

        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                ...
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <table className='table table-striped'>
            <thead className='dash-table'>
                <tr>
                    <th>Image</th>
                    <th>Quote</th>
                    <th>Author</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                    <tr >
                        <td> <img src="" alt="" /> </td>    
                        <td className=''> sdsd </td>    
                        <td>dfg</td>    
                        <td className='buttons-table'>
                            <Link to="" className='btn yellow-button'>Edit</Link>
                            <button onClick="{ ()=>onDeleteQuote(quote.id) }  "className='btn red-button'>Delete</button>
                        </td>

                    </tr>
            </tbody>
        </table>
            </div>
    </div>
    </div>

  )
}

export default Letters