import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../Shared/payment-detail.service';
import { PaymentDetail } from '../Shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {





  constructor(public servec: PaymentDetailService, private tostest: ToastrService) {

  }
  ngOnInit(): void {
    this.servec.getallPay()
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.servec.formData = Object.assign({}, selectedRecord);

  }
  onDelete(id: number) {
    if (confirm('Are You sure Delete?')) {
      this.servec.deletePay(id).subscribe({
        next: (res) => {
          this.servec.getallPay();
          this.tostest.error('Delete Successfully', 'payment Register')
        }, error: (err) => {
          console.log(err);
        }
      });

    }

  }
}
