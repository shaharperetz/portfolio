'use strict'





$(document).ready(init)




function onClickContactSubmit(){
  var email = $('#exampleFormControlInput1').val();
  var subject = $('#exampleFormControlInput2').val();
  var textBody = $('#exampleFormControlTextarea1').val()
  var container = $('#contactContainer')
  ClickContactSubmit(email , subject , textBody , container)



}


function createPortfolio() {
  var strHTML = '';
  var allProjs = getPortfolio();
  allProjs.forEach(proj => {
    var strHTMLs = `<div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${proj.id}')">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="${proj.Img}" alt="no photo yet">
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.labesls}</p>
  </div>
  </div>`;

    strHTML += strHTMLs
  });
  $('#portfolio-container').html(strHTML)
}



function renderModal(projId) {
  var proj = getProjById(projId)

  var strHTMLs = `<h2>${proj.name}</h2>
<p class="item-intro text-muted">${proj.title}.</p>
<img class="img-fluid d-block mx-auto" src="${proj.Img}" alt="No photo yet">
<p>${proj.desc}</p>
<ul class="list-inline">
<li>Date: ${proj.publishedAt}</li>
<li>Client: ${proj.name}</li>
<li>Category: ${proj.title}</li>
</ul>
<button class="btn btn-primary" data-dismiss="modal" type="button">
  <i class="fa fa-times"></i>
  Close Project</button>`


  $('.modal-body').html(strHTMLs)

}

















