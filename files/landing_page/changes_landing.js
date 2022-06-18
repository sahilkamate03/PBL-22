
const content_table = document.querySelector(".content_table")

const outpass = document.getElementById("outpass_btn")
const la = document.getElementById("la_btn")
const complaint = document.getElementById("complaint_btn")

const new_btn = document.getElementById("new_btn")
const history_btn = document.getElementById("history_btn")

var title_innerText;

export { content_table };

la.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Leave Application</h2>";
    title_innerText = title.innerText;
    document.getElementById("history_btn").style.backgroundColor = "#56565e";
    document.getElementById("new_btn").style.backgroundColor = "#56565e";
    content_table.innerHTML = "";
    if (tab_opened == "new_btn"){
        new_btns()
    }else {
        history_btns()
    }
});

complaint.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Complaint</h2>";
    title_innerText = title.innerText;
    document.getElementById("history_btn").style.backgroundColor = "#56565e";
    document.getElementById("new_btn").style.backgroundColor = "#56565e";
    content_table.innerHTML = "";
    if (tab_opened == "new_btn"){
        new_btns()
    }else {
        history_btns()
    }
});

outpass.addEventListener("click", () => {
    const title = document.querySelector('.title_head')
    title.innerHTML = "<h2>Outpass</h2>";
    title_innerText = title.innerText;
    document.getElementById("history_btn").style.backgroundColor = "#56565e";
    document.getElementById("new_btn").style.backgroundColor = "#56565e";
    content_table.innerHTML = "";
    if (tab_opened == "new_btn"){
        new_btns()
    }else {
        history_btns()
    }
});

var tab_opened;

history_btn.addEventListener("click", history_btns)
function history_btns() {
    tab_opened = "history_btn";
    const title = document.querySelector('#title_txt')
    document.getElementById("history_btn").style.backgroundColor = "#6200ee";
    document.getElementById("new_btn").style.backgroundColor = "#56565e";  
};

new_btn.addEventListener("click", new_btns)


function new_btns() {
    tab_opened = "new_btn";
    document.getElementById("new_btn").style.backgroundColor = "#6200ee";
    document.getElementById("history_btn").style.backgroundColor = "#56565e";

    if (title_innerText == "Outpass") {
        content_table.innerHTML = `
    <div class="container">
                    <div class=" text-center mt-5 ">

                        <h1>Outpass Form</h1>
                        

                    </div>


                    <div class="row ">
                        <div class="col-lg-7 mx-auto">
                            <div class="card mt-2 mx-auto p-4 bg-light">
                                <div class="card-body bg-light">

                                    <div class="container">
                                        <form id="contact-form" role="form">

                                        <div class="alert" style="display:none; color:white; background-color:green;text-align:center;"><b>Your message was sent</b></div>

                                            <div class="controls">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_name">Address *</label>
                                                            <input id="form_address" type="text" name="name"
                                                                class="form-control"
                                                                placeholder="Please enter Add. on Leave *"
                                                                required="required" data-error="Firstname is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_lastname">Mobile Number *</label>
                                                            <input id="form_mobile_no" type="text" name="surname"
                                                                class="form-control"
                                                                placeholder="Please enter Gaurdian No. *"
                                                                required="required" data-error="Lastname is required.">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">From *</label>
                                                            <input id="form_from" type="time" name="email"
                                                                class="form-control" min="09:00" max="21:00"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">To *</label>
                                                            <!-- <label for="form_email">From *</label> -->
                                                            <input id="form_to" type="time" name="email"
                                                                class="form-control" min="09:00" max="21:00"
                                                                placeholder="Please enter your email *"
                                                                required="required"
                                                                data-error="Valid email is required.">
                                                            <!-- <select id="form_need" name="need" class="form-control"
                                                                required="required"
                                                                data-error="Please specify your need.">
                                                                <option value="" selected disabled>--Select Your Issue--
                                                                </option>
                                                                <option>Request Invoice for order</option>
                                                                <option>Request order status</option>
                                                                <option>Haven't received cashback yet</option>
                                                                <option>Other</option>
                                                            </select> -->

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="form_message">Reason *</label>
                                                            <textarea id="form_reason" name="message"
                                                                class="form-control"
                                                                placeholder="Write your message here." rows="4"
                                                                required="required"
                                                                data-error="Please, enter the reason."></textarea>
                                                        </div>

                                                    </div>


                                                    <div class="col-md-12">

                                                        <input  class="btn btn-success btn-send  pt-2 btn-block
                                        " value="Send Request" style="background-color: #6200ee; cursor:pointer;" id ="send_req_complaint">

                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>
                            <!-- /.8 -->

                        </div>
                        <!-- /.row-->

                    </div>
                </div>
    `;
    }

    
}