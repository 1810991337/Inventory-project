import React from 'react';


function InvoiceHeader(props){
    return(
        
        <div className="row  header-div ">
            <div className="col-12 pt-5  pb-5 info-header detail-top">
                <h1>INVOICE</h1>
                <div>
                    <p>+91-7897897890</p>
                    <p>abc@gmail.com</p>
                </div>
                <div>
                    <p>address</p>
                    <p>city,state,Pin-code</p>
                </div>
            </div>
       
        <div className="col-sm-6 col-xs-12 mt-5 detail-left">
            <form >
            <label id="invoice">INVOICE</label>
                <div className="input-group mb-2">
                
                    <div className="input-group-prepend">
                        <div className="input-group-text">#</div>
                    </div>
                    <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup" 
                    value={props.invoiceNo}
                    placeholder="Invoice Number" 
                    onChange={(e)=>props.handleChange(e , "invoice")} />
                </div>
                <div className="form-group">
                <label >Date</label>
                    <input 
                    className="form-control" 
                    type="date" 
                    value={props.date}
                     id="example-date-input"
                     onChange={(e)=>props.handleChange(e , "date")}/>
                    
                </div>
                <div className="mb-3">
                <label>Phone </label>  <br/>
                    <input  class="form-control"  type="number"
                     value={props.phone}
                     placeholder="Enter phone number"
                     onChange={(e)=>props.handleChange(e,"phone_no")}></input>
                </div>

            </form>
        </div>
            <div className="col-sm-6">
                <div className="form-group mt-5 detail-right">
                    <label >Bill To</label>
                    <textarea class="form-control" id="exampleTextarea" rows="8" data-gramm="true" spellcheck="false" data-gramm_editor="true" 
                    value={props.billInfo}
                    placeholder="Who is this invoice to?"
                     onChange={(e)=>props.handleChange(e , "bill")}>
                         </textarea>   
                                
                </div>
            </div>
        </div>
    )
}
export default InvoiceHeader;