function Message(){
    return(
        <div class="container-xxl py-5">
            <div class="container ">
                <div class="bg-light rounded p-3">
                    <div class="bg-white rounded p-4" style={{border: "1px dashed rgba(0,   185, 142, .3)"}}>
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            </div>
                            <div class="col-lg-6 wow fadeIn text-md-start mb-3 mb-md-0" data-wow-delay="0.5s">
                                <div style={{marginBottom: 0}}>
                                    <a href="" class="btn btn-dark py-3 px-4"><i class="fa fa-calendar-alt me-2"></i>Envoyer</a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;