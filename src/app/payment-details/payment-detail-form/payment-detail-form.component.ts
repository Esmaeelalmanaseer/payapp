import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/Shared/payment-detail.service';
import { NgForm } from '@angular/forms'
import { PaymentDetail } from 'src/app/Shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private tostrt: ToastrService) {

  }
  ngOnInit() {

  }
  onSumbit(form: NgForm) {
    if (this.service.formData.payId == 0) {
      this.insertpay(form)
    } else {
      this.UpdataPay(form)
    }
  }
  insertpay(form: NgForm) {
    this.service.postPaydetals().subscribe({
      next: (res) => {
        this.restform(form);
        this.service.getallPay()
        this.tostrt.success('Submint Successfully', 'Payment Detail Register')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  UpdataPay(form: NgForm) {
    this.service.putPay().subscribe({
      next: (res) => {
        this.restform(form);
        this.service.getallPay()
        this.tostrt.info('Update Successfully', 'Payment Detail Register')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  restform(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail()
  }

}
