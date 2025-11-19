import React from 'react'

export default function SearchBar ()  {
  return (
    <div>
      <div class="container my-5">

  <div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="fw-semibold">Support Portal</h2>

    <button class="btn btn-primary px-4 rounded">
      My tickets
    </button>
  </div>

  <div class="search-box p-3 shadow-sm rounded-3 bg-white">
    <div class="input-group">
      <span class="input-group-text bg-white border-0">
        <i class="bi bi-search"></i>
      </span>
      <input 
        type="text" 
        class="form-control border-0" 
        placeholder="Eg: How do I open my account, How do I activate F&O..."/>
    </div>
  </div>

</div>



    </div>
  )
}
