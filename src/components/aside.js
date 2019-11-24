import React from 'react'




export const Aside = () => {
  return (

    <aside class="sidenav">
      <div class="sidenav__brand">
        <i class="fas fa-feather-alt sidenav__brand-icon"></i>
        <a class="sidenav__brand-link" href="#">Ux<span class="text-light">Pro</span></a>
        <i class="fas fa-times sidenav__brand-close"></i>
      </div>
      <div class="sidenav__profile">
        <div class="sidenav__profile-avatar"></div>
        <div class="sidenav__profile-title text-light">Matthew H</div>
      </div>
      <ul class="sidenav__list">
        <li class="sidenav__list-item">Monitoreo</li>
        <li class="sidenav__list-item">Item Two</li>
        <li class="sidenav__list-item">Item Three</li>
        <li class="sidenav__list-item">Item Four</li>
        <li class="sidenav__list-item">Item Five</li>
      </ul>
    </aside >

  )
}

export default Aside;